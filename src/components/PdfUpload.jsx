import { AiOutlineUpload, AiOutlineFileText, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import Search from './animation/Search';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
const PdfUpload = () => {
    const [dragActive, setDragActive] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
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
  
      // Simulate upload progress
      setTimeout(() => {
        setIsUploading(false);
        setUploadedFile({
            name: file.name,
            size: (file.size / 1024 / 1024).toFixed(2) + ' MB'
          });
      }, 2000)
    };
  
    const removeFile = () => {
      setUploadedFile(null);
      setUploadProgress(0);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    };

  return (
    <div className="max-w-2xl mx-auto mb-16">
      <div
        className={`relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-dashed transition-all duration-300 ${
          dragActive
            ? "border-purple-400 bg-white/20 scale-105"
            : "border-white/30 hover:border-purple-400 hover:bg-white/15"
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

        {isUploading && <Search path={"uploading"} />}

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
            <Link to='chat' className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Process Document
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfUpload;
