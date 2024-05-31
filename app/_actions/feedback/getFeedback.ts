type FeedbackDto = {
  id: number;
  name: string;
  ticketID: any;
  date: any;
  time: any;
  order: any;
};

const FeedbackData: FeedbackDto[] = [
  {
    id: 1,
    name: "Carla Montoya",
    ticketID: "7254-4212",
    date: "05/12/2022",
    time: "1:58 PM",
    order: "Q1231",
  },
  {
    id: 2,
    name: "Misael Gutierrez",
    ticketID: "7254-4212",
    date: "05/12/2022",
    time: "1:58 PM",
    order: "Q1231",
  },
  {
    id: 3,
    name: "Mario Aguilar",
    ticketID: "7254-4212",
    date: "05/12/2022",
    time: "1:58 PM",
    order: "Q1231",
  },
  {
    id: 4,
    name: "Katia Herrera",
    ticketID: "7254-4212",
    date: "05/12/2022",
    time: "1:58 PM",
    order: "Q1231",
  },
  {
    id: 5,
    name: "Angel Paz",
    ticketID: "7254-4212",
    date: "05/12/2022",
    time: "1:58 PM",
    order: "Q1231",
  },
  {
    id: 6,
    name: "Gabriel Perez",
    amount: "$15.00",
    ticketID: "7254-4212",
    date: "05/12/2022",
    time: "1:58 PM",
    order: "Q1231",
  },
];

export { FeedbackData, FeedbackDto };