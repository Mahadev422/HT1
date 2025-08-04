import { create } from "zustand";

export const useToast = create((set, get) => ({
  set: set,
  progress: 0,
  vissible: false,
  tost: null,
}))