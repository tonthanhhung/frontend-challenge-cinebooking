import * as React from "react";
import SeatReservation from "./SeatReservation/SeatReservation";
import { screenA } from "../mockedData";

export const App = () => {
  const screen = screenA;
  const maxReservation = 6;
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 p-2">
        <SeatReservation
          cinemaName={screen.cinemaName}
          time={screen.time}
          numberOfColumns={screen.col}
          numberOfRows={screen.row}
          maxReservation={maxReservation}
          bookedSeats={screen.bookedSeats}
          blankSeats={screen.blankSeats}
          optionedSeats={screen.optionedSeats}
        />
      </div>
    </div>
  );
};
