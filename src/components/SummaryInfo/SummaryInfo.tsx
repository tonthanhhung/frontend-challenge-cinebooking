import React from "react";
import { utils } from "../../utils";

interface Props {
  totalPrice: number;
  cinemaName: string;
  time: string;
}

const SummaryInfo: React.FC<Props> = ({ totalPrice, cinemaName, time }) => {
  return (
    <div className="flex mx-3 text-black bg-white rounded">
      <div className="flex-1 flex-col px-3">
        <div className="">{cinemaName}</div>
        <div className="">{time}</div>
      </div>
      <div className="flex-1 px-3 text-2xl font-extrabold flex items-center justify-center">
        {utils.getVND(totalPrice)}
      </div>
    </div>
  );
};

export default SummaryInfo;
