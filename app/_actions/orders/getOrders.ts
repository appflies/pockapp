import React, { useState } from 'react';

type OrderDto = {
  id: number;
  name: string;
  amount: any;
  ticketID: any;
  date: any;
  time: any;
  table: any;
};

const OrderData: OrderDto[] = [
  {
    id: 1,
    name: "Carla Montoya",
    amount: "$56.00",
    ticketID: "2245",
    date: "05/12/2022",
    time: "1:58 PM",
    table: "T4",
  },
  {
    id: 2,
    name: "Misael Gutierrez",
    amount: "$12.00",
    ticketID: "2245",
    date: "05/12/2022",
    time: "1:58 PM",
    table: "T4",
  },
  {
    id: 3,
    name: "Mario Aguilar",
    amount: "$20.00",
    ticketID: "2245",
    date: "05/12/2022",
    time: "1:58 PM",
    table: "T4",
  },
  {
    id: 4,
    name: "Katia Herrera",
    amount: "$34.00",
    ticketID: "2245",
    date: "05/12/2022",
    time: "1:58 PM",
    table: "T4",
  },
  {
    id: 5,
    name: "Angel Paz",
    amount: "$89.00",
    ticketID: "2245",
    date: "05/12/2022",
    time: "1:58 PM",
    table: "T4",
  },
  {
    id: 6,
    name: "Gabriel Perez",
    amount: "$15.00",
    ticketID: "2245",
    date: "05/12/2022",
    time: "1:58 PM",
    table: "T4",
  },
];

export { OrderData, OrderDto };