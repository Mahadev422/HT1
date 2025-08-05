import BubbleDrop from "../components/animation/BubbleDrop";
import Features from "../components/Features";
import PdfUpload from "../components/PdfUpload";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Animated background elements */}
      <BubbleDrop />

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
          </div>
        </main>
      </div>
    </div>
  );
}
