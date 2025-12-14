'use client';

import { usePathname } from 'next/navigation';

export default function HeaderGate({ children }) {
  const pathname = usePathname();
  const hideHeader = pathname?.startsWith('/admin');

  if (hideHeader) return null;
  return children;
}
