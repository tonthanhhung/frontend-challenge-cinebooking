import React, { useState } from "react";
import Seat from "../Seat/Seat";
import Alert from "../Alert/Alert";
import BlankSeat from "../BlankSeat/BlankSeat";
import ScreenDisplay from "../ScreenDisplay/ScreenDisplay";
import ZoomControl from "../ZoomControl/ZoomControl";
import SeatTypeDescription from "../SeatTypeDescription/SeatTypeDescription";
import { utils } from "../../utils";
import SummaryInfo from "../SummaryInfo/SummaryInfo";
import MovieInfo from "../MovieInfo/MovieInfo";
import Button from "../Button/Button";

interface Props {
  numberOfColumns: number;
  numberOfRows: number;
  maxReservation: number;
  blankSeats: string[];
  bookedSeats: string[];
  optionedSeats: OptionedSeatType;
  cinemaName: string;
  movieName: string;
  movieInfo: string;
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
  movieName,
  movieInfo,
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
    const seatSelected = utils.isSeatSelected(seat, selectedSeats);
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
    <div className="bg-gray-800 w-full md:w-2/3 lg:w-1/2 mx-auto relative pb-3 ">
      <Alert onClose={() => setErrorMessage("")}>{errorMessage}</Alert>
      <MovieInfo movieName={movieName} description={movieInfo} />
      <ScreenDisplay />
      <div className="overflow-auto text-center">
        <div
          className="inline-flex flex-col items-center mb-2 md:p-2 mx-auto "
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "0 0"
          }}
        >
          {columnNames.map(col => (
            <div className="flex">
              {rowNames.map(row => {
                const seat = { col, row };
                const isBlankSeat = utils.isSeatOfThisType(seat, blankSeats);
                if (isBlankSeat) {
                  return <BlankSeat />;
                }
                const seatType = utils.getSeatType(seat, optionedSeats);
                const price = optionedSeats[seatType as SeatType].price;
                return (
                  <Seat
                    seatType={seatType}
                    colIndex={col}
                    rowIndex={row}
                    booked={utils.isSeatOfThisType(seat, bookedSeats)}
                    isSelected={utils.isSeatSelected(seat, selectedSeats)}
                    onSelect={seat => onSeatSelected(seat, price)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <ZoomControl
        onZoomIn={() => setScale(scale + 1)}
        onZoomOut={() => scale > 1 && setScale(scale - 1)}
      />
      <SeatTypeDescription optionedSeats={optionedSeats} />
      <SummaryInfo
        cinemaName={cinemaName}
        time={time}
        totalPrice={totalPrice}
        mt-3
      />
      <div className="flex justify-around items-center mt-3">
        <Button className="flex-1 mx-3">Chọn combo</Button>
        <Button className="flex-1 mx-3">Thanh Toán</Button>
      </div>
    </div>
  );
};

export default SeatReservation;
