import React from "react";
import {
  AiOutlineClockCircle,
  AiOutlineSafety,
  AiOutlineThunderbolt,
} from "react-icons/ai";

const Features = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <AiOutlineThunderbolt className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-4">
          Lightning Fast
        </h3>
        <p className="text-white/70">
          Process documents in seconds with our optimized AI algorithms and
          cloud infrastructure.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <AiOutlineSafety className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-4">
          Secure & Private
        </h3>
        <p className="text-white/70">
          Enterprise-grade security with end-to-end encryption. Your documents
          are safe with us.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <AiOutlineClockCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-4">
          24/7 Available
        </h3>
        <p className="text-white/70">
          Access your documents anytime, anywhere. Our platform never sleeps.
        </p>
      </div>
    </div>
  );
};

export default Features;
