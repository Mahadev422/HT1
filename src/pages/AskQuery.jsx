import { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaUser, FaRobot } from 'react-icons/fa';
import Search from '../components/animation/Search';
import { useQuery } from '../store/useQuery';
import { useParams } from 'react-router-dom';

export default function AskQuery () {
  const { messages, sendQuery, loading, set} = useQuery();
  const {id} = useParams();
  
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || loading || !id) return;

    const userMessage = {
      id: Date.now(),
      text: newMessage,
      role: "user",
      timestamp: new Date()
    };
    const chats = [...messages]
    set({ messages: [...messages, userMessage]});

    const msg = await sendQuery(newMessage, id, chats);
    set({ messages: [...messages, userMessage, msg]});
    setNewMessage('');
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const MessageBubble = ({ message }) => {
    const isUser = message.role === 'user';
    
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
    <div className="flex flex-col h-screen max-w-4xl mx-auto z-10 bg-gradient-to-b from-gray-50 to-blue-100 bg-blue-100">
      <header className='sticky top-0 w-screen bg-green-200 h-15'>
        <h1>ID: {id}</h1>
      </header>
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-6 py-4 bg-gray-50">
        <div className="space-y-4">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          
          {loading && <div className='w-50 flex items-center gap-5'>
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
          bg-blue-500`}>
           <FaRobot className="w-4 h-4 text-white" />
        </div>
            <Search path={'search'} />
            </div>}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t sticky bottom-0 border-gray-200 px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              disabled={loading}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(e)}
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            />
            {loading && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent"></div>
              </div>
            )}
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim() || loading}
            className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full transition-colors duration-200"
          >
            <FaPaperPlane className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
