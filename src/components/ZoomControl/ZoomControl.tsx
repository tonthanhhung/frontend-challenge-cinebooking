import React from "react";

interface Props {
    onZoomIn: ()=>void;
    onZoomOut: ()=>void;
}

const ZoomControl: React.FC<Props> = ({
    onZoomIn, onZoomOut
                                      }) => {
  return (
      <div className="flex w-full text-white justify-center">
          Zoom:
          <button
              className="bg-white rounded-sm text-gray-900 ml-2"
              onClick={onZoomIn}
          >
              ➕
          </button>
          <button
              className="bg-white rounded-sm text-gray-900 ml-2"
              onClick={onZoomOut}
          >
              ➖
          </button>
      </div>
  );
};

export default ZoomControl;
