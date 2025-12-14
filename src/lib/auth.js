import { cookies } from 'next/headers';

const SESSION_COOKIE_NAME = 'admin_session';
const SESSION_SECRET = process.env.SESSION_SECRET || 'your-secret-key-change-in-production';

export async function createSession(adminId) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, adminId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME);
  return session?.value || null;
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

export async function requireAuth() {
  const session = await getSession();
  if (!session) {
    throw new Error('Unauthorized');
  }
  // Local admin is always authorized
  if (session === 'local_admin') {
    return session;
  }
  // For database admins, verify they still exist
  // (This check happens in the API routes that use requireAuth)
  return session;
}

