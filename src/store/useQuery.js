import { create } from "zustand";

const baseUrl = 'https://ht1-backend.onrender.com';

export const useQuery = create((set) => ({
  set: set,
  loading: false,
  message: null,
  messages: [
    { id: 1, text: "Hello! How can I help you today?", sender: "bot", timestamp: new Date(Date.now() - 10000) },
    { id: 2, text: "I'm having trouble with my React app", sender: "user", timestamp: new Date(Date.now() - 8000) },
    { id: 3, text: "I'd be happy to help! Can you describe what specific issue you're encountering?", sender: "bot", timestamp: new Date(Date.now() - 5000) }
  ],

  sendQuery: async (query) => {
    set({ loading: true });

    try {
      const response = await fetch(`${baseUrl}/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error("Query failed");
      }

      const data = await response.json();
      set({ message: data, loading: false });
      const msg = {
        id: Date.now(),
        text: data.response,
        sender: 'bot',
        timestamp: new Date()
      };
      console.log(msg);
      return msg;
    } catch (err) {
      console.error("Query Error:", err);
      set({ loading: false });
      return null;
    }
  },
}));
