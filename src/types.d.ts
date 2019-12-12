interface Seat {
  col: string;
  row: number;
}

interface OptionedSeatType {
  standard: { price: number };
  vip: { items: string[]; price: number };
  deluxe: { items: string[]; price: number };
}

type SeatType = "standard" | "vip" | "deluxe";
