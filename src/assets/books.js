import book2 from "../assets/BookImage/Understanding the Issues and Substance of International Politics and Relations- Medieval & Contemporary Perspectives .jpeg"
import book2b from "../assets/BookImage/Understanding the Issues and Substance of International Politics and Relations- Medieval & Contemporary Perspectives 2.jpeg"

import book1b from "../assets/BookImage/terrorismbackview.jpeg"
import book1 from "../assets/BookImage/terrorism.jpeg"


const books = [
  {
    id: 1,
    title: "Terrorism in the Human Family Interconnecting Security Challenges",
    image: [book1, book1b], 
    softCopy: {
      NairaPrice: 10000,
      DollarPrice: 13,
      EuroPrice: 11,
      PoundPrice: 11,
    },
    hardCopy: {
      NairaPrice: 13000,
      DollarPrice: 13,
      EuroPrice: 11,
      PoundPrice: 11,
    },
    pdf: "../Terrorism.pdf", // For soft copy
  },
  {
    id: 2,
    title: "Understanding the Issues and Substance of International Politics and Relations: Medieval & Contemporary Perspectives",
    image: [book2, book2b],
   
    softCopy: {
      NairaPrice: 9000,
      DollarPrice: 12,
      EuroPrice: 10,
      PoundPrice: 10,
    },
    hardCopy: {
      NairaPrice: 12000,
      DollarPrice: 12,
      EuroPrice: 10,
      PoundPrice: 10,
    },
    pdf: "../Politics.pdf", // For soft copy
  },
];
export default books;
