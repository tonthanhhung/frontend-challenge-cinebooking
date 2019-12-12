export const screenA = {
  cinemaName: "CGV Cresent Mall",
  time: "09:10 - 11:10 | 08/07/2019",

  row: 10,
  col: 10,
  blankSeats: [
    "A1",
    "A10",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10"
  ],

  bookedSeats: ["D3", "D4", "B7", "C8"],
  optionedSeats: {
    standard: {
      items: [],
      price: 60000
    },
    vip: {
      items: ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G10"],
      price: 90000
    },
    deluxe: {
      items: ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10"],
      price: 100000
    }
  }
};
