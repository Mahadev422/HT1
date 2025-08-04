import { create } from "zustand";

export const useQuery = create((set) => ({
  loading: false,
  message: null,

  sendQuery: async (query) => {
    set({ loading: true });

    try {
      const response = await fetch("http://localhost:8000/query", {
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
      console.log(data);
      return data;
    } catch (err) {
      console.error("Query Error:", err);
      set({ loading: false });
      return null;
    }
  },
}));
