import React from "react";
import Seat from "../Seat/Seat";
import { utils } from "../../utils";

const SeatInfoRow: React.FC<{}> = ({ children }) => (
  <div className="flex items-center w-full xs:w-5/6 md:w-2/3 lg:w-1/2">
    {children}
  </div>
);

interface Props {
  optionedSeats: OptionedSeatType;
}

const SeatTypeDescription: React.FC<Props> = ({ optionedSeats }) => {
  return (
    <div className="flex text-white flex-wrap pointer-events-none">
      <div className="flex-auto flex-col p-3 flex justify-center items-center">
        <SeatInfoRow>
          <Seat
            colIndex="A"
            isSelected={false}
            booked={true}
            seatType={"standard"}
          />
          Đã chọn
        </SeatInfoRow>
        <SeatInfoRow>
          <Seat
            colIndex="A"
            isSelected={true}
            booked={false}
            seatType={"standard"}
          />
          Đang chọn
        </SeatInfoRow>
      </div>
      <div className="flex-auto flex-col p-3 flex justify-center items-center">
        <SeatInfoRow>
          <Seat
            colIndex="A"
            isSelected={false}
            booked={false}
            seatType={"standard"}
          />
          {`Standard - ${utils.getVND(optionedSeats.standard.price)}`}
        </SeatInfoRow>
        <div className="flex items-center w-full xs:w-5/6 md:w-2/3 lg:w-1/2">
          <Seat colIndex="A" isSelected={false} booked={false} seatType="vip" />
          {`VIP - ${utils.getVND(optionedSeats.vip.price)}`}
        </div>
        <SeatInfoRow>
          <Seat
            colIndex="A"
            isSelected={false}
            booked={false}
            seatType="deluxe"
          />
          {`DELUXE - ${utils.getVND(optionedSeats.deluxe.price)}`}
        </SeatInfoRow>
      </div>
    </div>
  );
};

export default SeatTypeDescription;
