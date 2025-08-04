// store/useUpload.js
import { create } from 'zustand';

export const useUpload = create((set) => ({
  uploading: false,
  uploadError: null,
  uploadSuccess: false,
  file: null,
  set: set,

  uploadFile: async (file) => {
    set({ uploading: true, uploadError: null, uploadSuccess: false });

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://localhost:8000/upload/pdf', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      set({ uploading: false, uploadSuccess: true });
      console.log(data);
      return data;
    } catch (err) {
      set({ uploading: false, uploadError: err.message });
      return null;
    } finally {
      set({ uploading: false, uploadError: null, uploadSuccess: false })
    }
  }
}));
