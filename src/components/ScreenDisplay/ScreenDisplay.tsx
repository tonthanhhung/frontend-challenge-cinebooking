import React from "react";

interface Props {}

const ScreenDisplay: React.FC<Props> = props => {
  return (
    <div
      className="w-full border-2 border-white text-center mb-6 text-white bg-purple-400 shadow-outline"
      style={{
        borderRadius: "100%/0 0 30px 30px",
        boxShadow: "0px 9px 17px 0px rgba(255, 255, 255, 0.5)"
      }}
    >
      Màn ảnh
    </div>
  );
};

export default ScreenDisplay;
