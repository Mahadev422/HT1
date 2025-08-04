import Features from '../components/Features';
import PdfUpload from "../components/PdfUpload";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-indigo-500 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full opacity-10 animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <main className="px-6 py-16">
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

            {/* Features Grid */}
            {/* <Features /> */}
          </div>
        </main>
      </div>
    </div>
  );
}
