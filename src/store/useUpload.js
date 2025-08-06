// store/useUpload.js
import { create } from 'zustand';

//const baseUrl = 'https://ht1-backend.onrender.com';
const baseUrl = ' http://127.0.0.1:8000';

export const useUpload = create((set) => ({
  uploading: false,
  uploadError: null,
  uploadSuccess: false,
  file: null,
  set: set,
  id: null,

  uploadFile: async (file) => {
    set({ uploading: true, uploadError: null, uploadSuccess: false });

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`${baseUrl}/upload/pdf`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      set({ uploading: false, uploadSuccess: true});
      return data.id;
    } catch (err) {
      set({ uploading: false, uploadError: err.message });
      return null;
    } finally {
      set({ uploading: false, uploadError: null, uploadSuccess: false })
    }
  }
}));
