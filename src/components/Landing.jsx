import React, { useState, useRef } from 'react';
import { AiOutlineUpload, AiOutlineFileText, AiOutlineCheck, AiOutlineClose, AiOutlineThunderbolt, AiOutlineSafety, AiOutlineClockCircle } from 'react-icons/ai';

export default function Landing() {

  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    if (file.type !== 'application/pdf') {
      alert('Please upload only PDF files');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadedFile({
            name: file.name,
            size: (file.size / 1024 / 1024).toFixed(2) + ' MB'
          });
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const removeFile = () => {
    setUploadedFile(null);
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-indigo-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full opacity-10 animate-bounce" style={{animationDuration: '3s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 py-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <AiOutlineFileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">DocFlow</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Support</a>
            </nav>
          </div>
        </header>

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
            <div className="max-w-2xl mx-auto mb-16">
              <div 
                className={`relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-dashed transition-all duration-300 ${
                  dragActive 
                    ? 'border-purple-400 bg-white/20 scale-105' 
                    : 'border-white/30 hover:border-purple-400 hover:bg-white/15'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {!uploadedFile && !isUploading && (
                  <div className="text-center">
                    <div className="mb-6">
                      <AiOutlineUpload className="w-16 h-16 text-white/60 mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        Drop your PDF here
                      </h3>
                      <p className="text-white/70 mb-6">
                        or click to browse from your device
                      </p>
                    </div>
                    
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Choose PDF File
                    </button>
                    
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    
                    <p className="text-white/50 text-sm mt-4">
                      Maximum file size: 50MB • PDF files only
                    </p>
                  </div>
                )}

                {isUploading && (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
                      <AiOutlineUpload className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Uploading your PDF...
                    </h3>
                    <div className="w-full bg-white/20 rounded-full h-3 mb-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <p className="text-white/70 text-sm">
                      {Math.round(uploadProgress)}% complete
                    </p>
                  </div>
                )}

                {uploadedFile && (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AiOutlineCheck className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Upload Successful!
                    </h3>
                    <div className="bg-white/10 rounded-xl p-4 mb-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <AiOutlineFileText className="w-8 h-8 text-purple-400" />
                        <div className="text-left">
                          <p className="text-white font-medium">{uploadedFile.name}</p>
                          <p className="text-white/60 text-sm">{uploadedFile.size}</p>
                        </div>
                      </div>
                      <button
                        onClick={removeFile}
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        <AiOutlineClose className="w-5 h-5" />
                      </button>
                    </div>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                      Process Document
                    </button>
                  </div>
                )}
              </div>
            </div>

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

        {/* Footer */}
        <footer className="px-6 py-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-white/60">
              © 2025 DocFlow. Transforming documents with AI.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
