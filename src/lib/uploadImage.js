import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import app from './firebaseClient';

export const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB limit

export async function uploadImageToFirebase(file, folder = 'news') {
  if (!file) return null;

  const storage = getStorage(app);
  const uniqueName = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}-${file.name}`;
  const imageRef = ref(storage, uniqueName);

  const snapshot = await uploadBytes(imageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);
  return downloadURL;
}
