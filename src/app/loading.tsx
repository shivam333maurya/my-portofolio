import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 z-50">
      <div className="spinner-border" />
      <span className="visually-hidden" />
    </div>
  );
};

export default Loading;
