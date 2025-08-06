import { create } from "zustand";

//const baseUrl = 'https://ht1-backend.onrender.com';
const baseUrl = ' http://127.0.0.1:8000';

export const useQuery = create((set) => ({
  set: set,
  loading: false,
  message: null,
  messages: [],

  sendQuery: async (query, id, chats) => {
    set({ loading: true });
    console.log(chats)
    try {
      const response = await fetch(`${baseUrl}/query/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, id, chats }),
      });

      if (!response.ok) {
        throw new Error("Query failed");
      }

      const data = await response.json();
      set({ message: data, loading: false });
      const msg = {
        id: Date.now(),
        text: data.response,
        role: 'bot',
        timestamp: new Date()
      };
      return msg;
    } catch (err) {
      console.error("Query Error:", err);
      set({ loading: false });
      return null;
    }
  },
}));
