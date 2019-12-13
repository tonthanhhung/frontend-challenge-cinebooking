import React from "react";

interface Props {
  movieName: string;
    description: string;
}

const MovieInfo: React.FC<Props> = ({ movieName, description }) => {
  return (
    <div className="text-white p-4 text-center flex flex-col">
      <div className="font-bold">{movieName}</div>
      <div>{description}</div>
    </div>
  );
};

export default MovieInfo;
