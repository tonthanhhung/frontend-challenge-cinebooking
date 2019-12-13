import React from "react";
import classNames from "classnames";

interface Props {
  colIndex?: string;
  rowIndex?: number;
  isSelected: boolean;
  booked: boolean;
  seatType: SeatType;
  onSelect?: (seat: Seat) => void;
}

const Seat: React.FC<Props> = ({
  colIndex,
  rowIndex,
  isSelected,
  booked,
  seatType = "standard",
  onSelect
}) => {
  let seatModifierClass = "";
  if (booked) {
    seatModifierClass =
      "bg-gray-900 text-gray-900 cursor-default border-gray-500 pointer-events-none";
  } else {
    switch (seatType) {
      case "deluxe": {
        seatModifierClass = isSelected
          ? "bg-indigo-500 text-gray-100"
          : "bg-transparent border-indigo-700";
        break;
      }
      case "vip": {
        seatModifierClass = isSelected
          ? "bg-green-500 text-gray-800"
          : "bg-transparent border-green-500";
        break;
      }
      default: {
        seatModifierClass = isSelected
          ? "bg-white text-gray-800"
          : "bg-transparent ";
      }
    }
  }
  return (
    <div
      className={classNames(
        "seat inline-block w-6 h-6 border md:w-8 md:h-8 md:border-2 mr-1 mb-1 md:mr-2 md: mb-2 rounded-lg first:text-red-800 last:text-blue=600 flex items-center justify-center  hover:border-yellow-500 cursor-pointer uppercase text-white ",
        seatModifierClass
      )}
      onClick={() =>
        onSelect &&
        colIndex &&
        rowIndex &&
        onSelect({ col: colIndex, row: rowIndex })
      }
    >
      {colIndex}
      {rowIndex}
    </div>
  );
};

export default Seat;
