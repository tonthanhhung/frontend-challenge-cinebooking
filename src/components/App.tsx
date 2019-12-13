import * as React from "react";
import SeatReservation from "./SeatReservation/SeatReservation";
import { screenA } from "../mockedData";

export const App = () => {
  const screen = screenA;
  const maxReservation = 6;
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 md:p-2 bg-gray-800">
        <SeatReservation
          movieName={screen.movieName}
          movieInfo={screen.movieInfo}
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
