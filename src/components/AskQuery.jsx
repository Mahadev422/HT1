import { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaUser, FaRobot } from 'react-icons/fa';
import Search from './animation/Search';

export default function AskQuery () {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot", timestamp: new Date(Date.now() - 10000) },
    { id: 2, text: "I'm having trouble with my React app", sender: "user", timestamp: new Date(Date.now() - 8000) },
    { id: 3, text: "I'd be happy to help! Can you describe what specific issue you're encountering?", sender: "bot", timestamp: new Date(Date.now() - 5000) }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const simulateBotResponse = () => {
    const responses = [
      "That's a great question! Let me think about that...",
      "I understand the issue. Here's what you can try:",
      "That should work! Is there anything else you'd like to know?",
      "Let me help you with that step by step.",
      "Perfect! That's exactly the right approach."
    ];
    
    setIsTyping(true);
    
    setTimeout(() => {
      const response = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: response,
        sender: "bot",
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 2000 + Math.random() * 2000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: newMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false);
      simulateBotResponse();
    }, 500);
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const MessageBubble = ({ message }) => {
    const isUser = message.sender === 'user';
    
    return (
      <div className={`flex items-start space-x-3 mb-4 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser ? 'bg-green-500' : 'bg-blue-500'
        }`}>
          {isUser ? <FaUser className="w-4 h-4 text-white" /> : <FaRobot className="w-4 h-4 text-white" />}
        </div>
        <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
          isUser 
            ? 'bg-green-500 text-white rounded-tr-sm' 
            : 'bg-gray-100 text-gray-800 rounded-tl-sm'
        }`}>
          <p className="text-sm">{message.text}</p>
          <p className={`text-xs mt-1 ${isUser ? 'text-green-100' : 'text-gray-500'}`}>
            {formatTime(message.timestamp)}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto z-10 bg-white">

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-6 py-4 bg-gray-50">
        <div className="space-y-4">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          
          {isTyping && <Search path={'search'} />}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(e)}
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            />
            {isLoading && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent"></div>
              </div>
            )}
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim() || isLoading}
            className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full transition-colors duration-200"
          >
            <FaPaperPlane className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
