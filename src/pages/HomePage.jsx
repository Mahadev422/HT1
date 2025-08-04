import { useState, useRef } from 'react';
import { AiOutlineThunderbolt, AiOutlineSafety, AiOutlineClockCircle } from 'react-icons/ai';
import PdfUpload from '../components/PdfUpload';

export default function HomePage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-indigo-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full opacity-10 animate-bounce" style={{animationDuration: '3s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <main className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Process Your
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> PDFs</span>
                <br />Instantly
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Upload, analyze, and extract insights from your PDF documents with our AI-powered platform. 
                Fast, secure, and incredibly smart.
              </p>
            </div>

            {/* Upload Section */}
            <PdfUpload />

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <AiOutlineThunderbolt className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Lightning Fast</h3>
                <p className="text-white/70">
                  Process documents in seconds with our optimized AI algorithms and cloud infrastructure.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <AiOutlineSafety className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Secure & Private</h3>
                <p className="text-white/70">
                  Enterprise-grade security with end-to-end encryption. Your documents are safe with us.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <AiOutlineClockCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">24/7 Available</h3>
                <p className="text-white/70">
                  Access your documents anytime, anywhere. Our platform never sleeps.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};