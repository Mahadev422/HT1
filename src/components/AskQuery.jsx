import React, { useState } from "react";

export default function AskQuery() {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi there! Ask me anything about your documents." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        type: "bot",
        text: `Here's what I found related to: "${userMessage.text}"\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit...`,
      };
      setMessages((prev) => [...prev, botMessage]);
      setLoading(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-6">
      <section className="max-w-3xl mx-auto flex flex-col h-[90vh]">
        <h2 className="text-2xl font-semibold mb-4">Query Chat</h2>

        <div className="flex-1 overflow-y-auto bg-gray-100 p-4 rounded-md space-y-4 border">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[80%] px-4 py-3 rounded-lg text-sm shadow-md whitespace-pre-wrap ${
                msg.type === "user"
                  ? "bg-blue-500 text-white self-end ml-auto"
                  : "bg-gray-200 text-gray-900 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {loading && (
            <div className="bg-gray-200 text-gray-900 px-4 py-3 rounded-lg text-sm shadow-md w-fit">
              Processing...
            </div>
          )}
        </div>

        <form
          onSubmit={handleSend}
          className="mt-4 flex items-center gap-2 border-t pt-4"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your query..."
            rows={2}
            className="flex-1 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
            disabled={loading}
          >
            Send
          </button>
        </form>
      </section>
    </main>
  );
}
