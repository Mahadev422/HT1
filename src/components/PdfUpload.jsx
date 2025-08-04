import { AiOutlineUpload } from "react-icons/ai";
import Search from "./animation/Search";
import { useRef, useState } from "react";
import UploadSuccess from "./UploadSuccess";
import { useUpload } from "../store/useUpload";

const PdfUpload = () => {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const { uploading, file, set} = useUpload();

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
      set({file: files[0]});
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      set({file: e.target.files[0]});
    }
  };

  return (
    <div className="max-w-2xl mx-auto mb-16 ">
      <div
        className={`relative bg-blue-100 backdrop-blur-lg rounded-3xl p-8 border-2 border-dashed transition-all duration-300 ${
          dragActive
            ? "border-purple-400 bg-white/20 scale-105"
            : "border-white/30 hover:border-purple-400 hover:bg-blue-200"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {!file && !uploading && (
          <div className="text-center">
            <div className="mb-6">
              <div className="w-30 mx-auto" >
                <Search path={'upload'}/>
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Drop your PDF here
              </h3>
              <p className="mb-6">
                or click to browse from your device
              </p>
            </div>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded hover:rounded-full font-semibold text-lg transition-all duration-150 transform shadow-lg hover:shadow-xl"
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

            <p className="text-sm mt-4">
              Maximum file size: 50MB • PDF files only
            </p>
          </div>
        )}

        {(file && !uploading) && (
         <UploadSuccess fileInputRef={fileInputRef} />
        )}

        {uploading && <Search path={"uploading"} />}
      </div>
    </div>
  );
};

export default PdfUpload;
