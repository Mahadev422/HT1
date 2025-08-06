import React from "react";
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineFileText,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useUpload } from "../store/useUpload";

const UploadSuccess = ({ fileInputRef }) => {
  const { set, file, uploadFile } = useUpload();
  const navigate = useNavigate();
    const removeFile = () => {
    set({file: null});
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFileSend = async () => {
    if(!file) return alert('Please upload pdf file');

    const id = await uploadFile(file);
    if(!id) return;
    return navigate(`${id}`);
  }

  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
        <AiOutlineCheck className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">
        Upload Successful!
      </h3>
      <div className="bg-blue-50 rounded-xl p-4 mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <AiOutlineFileText className="w-8 h-8 text-purple-400" />
          <div className="text-left">
            <p className="font-medium">{file.name}</p>
            <p className="text-sm">{file.size}</p>
          </div>
        </div>
        <button
          onClick={removeFile}
          className="text-white/60 hover:text-white transition-colors"
        >
          <AiOutlineClose className="w-5 h-5" />
        </button>
      </div>
      <button
        onClick={handleFileSend}
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
      >
        Process Document
      </button>
    </div>
  );
};

export default UploadSuccess;
