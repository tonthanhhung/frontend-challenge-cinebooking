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

function getVND(price: number) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND"
  }).format(price);
}

export const utils = {
  getSeatType,
  isSeatOfThisType,
  isSeatSelected,
  getVND
};
