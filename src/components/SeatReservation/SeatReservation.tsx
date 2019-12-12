import React, { useState } from "react";
import Seat from "../Seat/Seat";
import Alert from "../Alert/Alert";
import BlankSeat from "../BlankSeat/BlankSeat";

interface Props {
  numberOfColumns: number;
  numberOfRows: number;
  maxReservation: number;
  blankSeats: string[];
  bookedSeats: string[];
  optionedSeats: OptionedSeatType;
  cinemaName: string;
  time: string;
}
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const SeatReservation: React.FC<Props> = ({
  numberOfColumns,
  numberOfRows,
  maxReservation,
  optionedSeats,
  bookedSeats,
  blankSeats,
  cinemaName,
  time
}) => {
  const columnNames: string[] = Array(numberOfColumns)
    .fill("")
    .map((_, i) => alphabet[i]);

  const rowNames: number[] = Array(numberOfRows)
    .fill(0)
    .map((_, i) => i + 1);
  const [selectedSeats, setSelectedSeat] = useState<Seat[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [scale, setScale] = useState(1);

  const onSeatSelected = (seat: Seat, price: number) => {
    const { col, row } = seat;
    const seatSelected = isSeatSelected(seat, selectedSeats);
    setErrorMessage("");
    if (!seatSelected) {
      if (selectedSeats.length < maxReservation) {
        setTotalPrice(totalPrice + price);
        setSelectedSeat([
          ...selectedSeats,
          {
            col,
            row
          }
        ]);
      } else {
        setErrorMessage(`You can not book over ${maxReservation} tickets`);
      }
    } else {
      setTotalPrice(totalPrice - price);
      setSelectedSeat(
        selectedSeats.filter(
          ({ col, row }) => seat.col !== col || seat.row !== row
        )
      );
    }
  };

  return (
    <div className="bg-gray-800 w-full md:w-2/3 lg:w-1/2 mx-auto ">
      <ScreenDisplay />

      <div className="overflow-auto text-center">
        <div
          className="inline-flex flex-col items-center mb-2 p-2 mx-auto "
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "0 0"
          }}
        >
          {columnNames.map(col => (
            <div className="flex">
              {rowNames.map(row => {
                const seat = { col, row };
                const isBlankSeat = isSeatOfThisType(seat, blankSeats);
                if (!isBlankSeat) {
                  const isBooked = isSeatOfThisType(seat, bookedSeats);
                  const seatType = getSeatType(seat, optionedSeats);
                  const price = optionedSeats[seatType as SeatType].price;
                  return (
                    <Seat
                      seatType={getSeatType(seat, optionedSeats)}
                      colIndex={col}
                      rowIndex={row}
                      booked={isBooked}
                      isSelected={isSeatSelected(seat, selectedSeats)}
                      onSelect={seat => onSeatSelected(seat, price)}
                    />
                  );
                }
                return <BlankSeat />;
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full text-white justify-center">
        Zoom:
        <button
          className="bg-white rounded-sm text-gray-900 ml-2"
          onClick={() => setScale(scale + 1)}
        >
          ➕
        </button>
        <button
          className="bg-white rounded-sm text-gray-900 ml-2"
          onClick={() => scale > 1 && setScale(scale - 1)}
        >
          ➖
        </button>
      </div>
      <Description optionedSeats={optionedSeats} />
      <SummaryInfo
        cinemaName={cinemaName}
        time={time}
        totalPrice={totalPrice}
      />
      <Alert onClose={() => setErrorMessage("")}>{errorMessage}</Alert>
    </div>
  );
};
function getSeatType(seat: Seat, optionedSeats: OptionedSeatType): SeatType {
  for (let [key, value] of Object.entries(optionedSeats)) {
    const seatName = `${seat.col}${seat.row}`;
    if (value.items.indexOf(seatName) !== -1) {
      return key as SeatType;
    }
  }
  return "standard";
}

function isSeatOfThisType(seat: Seat, blankSeats: string[]) {
  return blankSeats.indexOf(`${seat.col}${seat.row}`) !== -1;
}

function isSeatSelected(seat: Seat, selectedSeats: Seat[]) {
  return !!selectedSeats.find(
    ({ col, row }) => col === seat.col && row === seat.row
  );
}

const ScreenDisplay = () => (
  <div
    className="w-full border-2 border-red-700 text-center mb-4 text-white bg-purple-400"
    style={{
      borderRadius: "100%/0 0 30px 30px"
    }}
  >
    Screen
  </div>
);

const Description = ({
  optionedSeats
}: {
  optionedSeats: OptionedSeatType;
}) => (
  <div className="flex text-white flex-wrap">
    <div className="flex-auto flex-col p-3 flex justify-center items-center">
      <div className="flex items-center w-full xs:w-5/6 md:w-2/3 lg:w-1/2">
        <Seat
          colIndex="A"
          isSelected={false}
          booked={true}
          seatType={"standard"}
        />
        Đã chọn
      </div>
      <div className="flex items-center w-full xs:w-5/6 md:w-2/3 lg:w-1/2">
        <Seat
          colIndex="A"
          isSelected={true}
          booked={false}
          seatType={"standard"}
        />
        Đang chọn
      </div>
    </div>
    <div className="flex-auto flex-col p-3 flex justify-center items-center">
      <div className="flex items-center w-full xs:w-5/6 md:w-2/3 lg:w-1/2">
        <Seat
          colIndex="A"
          isSelected={false}
          booked={false}
          seatType={"standard"}
        />
        {`Standard - ${new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND"
        }).format(optionedSeats.standard.price)}`}
      </div>
      <div className="flex items-center w-full xs:w-5/6 md:w-2/3 lg:w-1/2">
        <Seat colIndex="A" isSelected={false} booked={false} seatType="vip" />
        {`VIP - ${new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND"
        }).format(optionedSeats.vip.price)}`}
      </div>
      <div className="flex items-center w-full xs:w-5/6 md:w-2/3 lg:w-1/2">
        <Seat
          colIndex="A"
          isSelected={false}
          booked={false}
          seatType="deluxe"
        />
        {`DELUXE - ${new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND"
        }).format(optionedSeats.deluxe.price)}`}
      </div>
    </div>
  </div>
);

const SummaryInfo = ({
  totalPrice,
  cinemaName,
  time
}: {
  totalPrice: number;
  cinemaName: string;
  time: string;
}) => (
  <div className="flex mx-3 text-black bg-white rounded">
    <div className="flex-1 flex-col px-3">
      <div className="">{cinemaName}</div>
      <div className="">{time}</div>
    </div>
    <div className="flex-1 px-3 text-2xl font-extrabold flex items-center justify-center">
      {new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
      }).format(totalPrice)}
    </div>
  </div>
);

export default SeatReservation;
