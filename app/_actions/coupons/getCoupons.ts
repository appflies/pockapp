type CouponDto = {
  id: number;
  name: string;
  amount: any,
  review: any,
};

const CouponData: CouponDto[] = [
  {
    id: 1,
    name: "Carla Montoya",
    amount: "$13.30",
    review: "3",
  },
  {
    id: 2,
    name: "Misael Gutierrez",
    amount: "$13.30",
    review: "3",
  },
  {
    id: 3,
    name: "Mario Aguilar",
    amount: "$13.30",
    review: "3",
  },
  {
    id: 4,
    name: "Katia Herrera",
    amount: "$13.30",
    review: "3",
  },
  {
    id: 5,
    name: "Angel Paz",
    amount: "$13.30",
    review: "3",
  },
  {
    id: 6,
    name: "Gabriel Perez",
    amount: "$13.30",
    review: "3",
  },
];

export { CouponData, CouponDto };