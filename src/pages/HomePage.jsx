import { FaPaperPlane } from "react-icons/fa";
import BubbleDrop from "../components/animation/BubbleDrop";
import PdfUpload from "../components/PdfUpload";
import Header from "../layout/Header";

export default function HomePage() {
  return (
    <div className="h-full min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-10">
      <Header />
      {/* Animated background elements */}
      <BubbleDrop />
      <div className="flex flex-wrap mt-10">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <p className="text-xl max-w-2xl mx-auto">
            You can also start your previous chat by remembering chat id.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 mb-8">
          <label htmlFor="chat-id" className="mr-2 text-gray-700 font-medium">
            Enter Previous Chat ID
          </label>
          <input
            id="chat-id"
            type="text"
            className="bg-amber-50 border border-amber-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          />
          <button className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center transition">
            <FaPaperPlane className="w-4 h-4 mr-1" />
            Send
          </button>
        </div>
      </div>
      <div className="relative z-10 mx-auto">
        {/* Hero Section */}
        <main className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Upload, analyze, and extract insights from your PDF documents
                with our AI-powered platform. Fast, secure, and incredibly
                smart.
              </p>
            </div>
            {/* Upload Section */}
            <PdfUpload />
          </div>
        </main>
      </div>
      </div>
      

      
    </div>
  );
}
