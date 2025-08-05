const BubbleDrop = () => {
  return (
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
  );
};

export default BubbleDrop;
