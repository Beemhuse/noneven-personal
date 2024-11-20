// import { useState } from 'react';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
// import books from "../../assets/books";
// import CheckoutForm from "../CheckoutForm"; // Component you'll create to handle checkout form

// const BookItem = ({ title, image, price, onCheckout }) => (
//   <div className="flex flex-col w-full items-center mx-4">
//     <img src={image} alt={title} className="h-auto w-full mb-4" />
//     <h3 className="text-center text-gray-700 mb-2">{title}</h3>
//     <p className="text-center text-gray-500 mb-2">₦{price}</p>
//     <button
//       onClick={onCheckout}
//       className="px-4 py-2 border border-[#2D89BF] text-black rounded hover:bg-[#2D89BF] hover:text-white transition"
//     >
//       Buy Now
//     </button>
//   </div>
// );

// const BookCarousel = () => {
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [showForm, setShowForm] = useState(false);

//   const handleCheckout = (book) => {
//     setSelectedBook(book);
//     setShowForm(true);
//   };

//   return (
//     <section className="py-16 bg-white xl:w-2/3 w-full m-auto">
//       <div className="container mx-auto text-center mb-8">
//         <h2 className="text-4xl font-[700] text-[#2D89BF] mb-2">
//           Fuel Your Mind. Feed Your Curiosity
//         </h2>
//         <p className="text-2xl xl:w-2/4 w-full m-auto">
//           We&apos;ve got the books to spark your imagination and keep you turning pages.
//         </p>
//       </div>
//       <Splide
//         options={{
//           type: 'loop',
//           perPage: 3,
//           gap: '1rem',
//           autoplay: true,
//           pauseOnHover: true,
//           resetProgress: false,
//           arrows: true,
//           pagination: false,
//           breakpoints: {
//             640: { perPage: 1 },
//             768: { perPage: 2 },
//           },
//         }}
//       >
//         {books.map((book) => (
//           <SplideSlide key={book.id}>
//             <BookItem
//               title={book.title}
//               image={book.image}
//               price={book.price}
//               onCheckout={() => handleCheckout(book)}
//             />
//           </SplideSlide>
//         ))}
//       </Splide>
//       {showForm && selectedBook && (
//         <CheckoutForm
//           selectedBook={selectedBook}
//           onClose={() => setShowForm(false)}
//         />
//       )}
//     </section>
//   );
// };

// export default BookCarousel;


import { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import books from "../../assets/books";
import CheckoutForm from "../CheckoutForm"; // Component to handle checkout logic

const currencyRates = {
  Naira: 1,
  Dollar: 0.0013,
  Euro: 0.0012,
  Pound: 0.001,
};

const BookItem = ({ book, onCheckout }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("Naira");
  const [deliveryMode, setDeliveryMode] = useState("softCopy");
  const [price, setPrice] = useState(book.softCopy.NairaPrice);

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    const selectedPrice =
      deliveryMode === "softCopy"
        ? book.softCopy[`${currency}Price`]
        : book.hardCopy[`${currency}Price`];
    setPrice(selectedPrice);
  };

  const handleDeliveryModeChange = (mode) => {
    setDeliveryMode(mode);
    const selectedPrice =
      mode === "softCopy"
        ? book.softCopy[`${selectedCurrency}Price`]
        : book.hardCopy[`${selectedCurrency}Price`];
    setPrice(selectedPrice);
  };

  return (
    // <div className="flex flex-col w-full items-center mx-4">
    //   <img src={book.image} alt={book.title} className="h-auto w-full mb-4" />
    //   <h3 className="text-center text-gray-700 mb-2">{book.title}</h3>
    //   <p className="text-center text-gray-500 mb-2">
    //     Soft Copy: ₦{book.softCopy.NairaPrice}, Hard Copy: ₦{book.hardCopy.NairaPrice}
    //   </p>
    //   <div className="mb-2">
    //     <label htmlFor="deliveryMode" className="mr-2">
    //       Delivery Mode:
    //     </label>
    //     <select
    //       id="deliveryMode"
    //       className="border border-gray-300 rounded px-2 py-1"
    //       value={deliveryMode}
    //       onChange={(e) => handleDeliveryModeChange(e.target.value)}
    //     >
    //       <option value="softCopy">Soft Copy</option>
    //       <option value="hardCopy">Hard Copy</option>
    //     </select>
    //   </div>
    //   <div className="mb-2">
    //     <label htmlFor="currency" className="mr-2">
    //       Select Currency:
    //     </label>
    //     <select
    //       id="currency"
    //       className="border border-gray-300 rounded px-2 py-1"
    //       value={selectedCurrency}
    //       onChange={(e) => handleCurrencyChange(e.target.value)}
    //     >
    //       {Object.keys(currencyRates).map((currency) => (
    //         <option key={currency} value={currency}>
    //           {currency}
    //         </option>
    //       ))}
    //     </select>
    //   </div>
    //   <p className="text-center text-gray-700 mb-4">
    //     {selectedCurrency} {price.toFixed(2)}
    //   </p>
    //   <button
    //     onClick={() =>
    //       onCheckout({
    //         book,
    //         deliveryMode,
    //         selectedCurrency,
    //         price,
    //       })
    //     }
    //     className="px-4 py-2 border border-[#2D89BF] text-black rounded hover:bg-[#2D89BF] hover:text-white transition"
    //   >
    //     Buy Now
    //   </button>
    // </div>

    <div className="flex flex-col w-full items-center mx-4" >
      {/* Book Image Slider */}
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          gap: '1rem',
          arrows: true,
          pagination: false,
        }}
        className="mb-4 w-full"
      >
        {book.image.map((imgSrc, index) => (
          <SplideSlide key={index}>
            <img
              src={imgSrc}
              alt={`${book.title} - Image ${index + 1}`}
             
            />
          </SplideSlide>
        ))}
      </Splide>
      {/* Book Information */}
      <h3 className="text-center text-gray-700 mb-2">{book.title}</h3>
      <p className="text-center text-gray-500 mb-2">
        Soft Copy: ₦{book.softCopy.NairaPrice}, Hard Copy: ₦{book.hardCopy.NairaPrice}
      </p>
      <div className="mb-2">
        <label htmlFor="deliveryMode" className="mr-2">
          Delivery Mode:
        </label>
        <select
          id="deliveryMode"
          className="border border-gray-300 rounded px-2 py-1"
          value={deliveryMode}
          onChange={(e) => handleDeliveryModeChange(e.target.value)}
        >
          <option value="softCopy">Soft Copy</option>
          <option value="hardCopy">Hard Copy</option>
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="currency" className="mr-2">
          Select Currency:
        </label>
        <select
          id="currency"
          className="border border-gray-300 rounded px-2 py-1"
          value={selectedCurrency}
          onChange={(e) => handleCurrencyChange(e.target.value)}
        >
          {["Naira", "Dollar", "Euro", "Pound"].map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <p className="text-center text-gray-700 mb-4">
        {selectedCurrency} {price.toFixed(2)}
      </p>
      <button
        onClick={() =>
          onCheckout({
            book,
            deliveryMode,
            selectedCurrency,
            price,
          })
        }
        className="px-4 py-2 border border-[#2D89BF] text-black rounded hover:bg-[#2D89BF] hover:text-white transition"
      >
        Buy Now
      </button>
    </div>
  );
};

const BookCarousel = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleCheckout = (order) => {
    setSelectedOrder(order);
    setShowForm(true);
  };

  return (
    <section className="py-16 bg-white xl:w-2/3 w-full m-auto">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-4xl font-[700] text-[#2D89BF] mb-2">
          Fuel Your Mind. Feed Your Curiosity
        </h2>
        <p className="text-2xl xl:w-2/4 w-full m-auto">
          We&apos;ve got the books to spark your imagination and keep you turning pages.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {books.map((book) => (
          <div key={book.id} className="flex justify-center" >
            <BookItem
              book={book}
              onCheckout={(order) => handleCheckout(order)}
            />
          </div>
        ))}
      </div>
      {showForm && selectedOrder && (
        <CheckoutForm
          order={selectedOrder}
          onClose={() => setShowForm(false)}
        />
      )}
    </section>
  );
};

// const BookCarousel = () => {
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [showForm, setShowForm] = useState(false);

//   const handleCheckout = (order) => {
//     setSelectedOrder(order);
//     setShowForm(true);
//   };

//   return (
//     <section className="py-16 bg-white xl:w-2/3 w-full m-auto">
//       <div className="container mx-auto text-center mb-8">
//         <h2 className="text-4xl font-[700] text-[#2D89BF] mb-2">
//           Fuel Your Mind. Feed Your Curiosity
//         </h2>
//         <p className="text-2xl xl:w-2/4 w-full m-auto">
//           We&apos;ve got the books to spark your imagination and keep you turning pages.
//         </p>
//       </div>
//       <Splide
//         options={{
//           type: 'loop',
//           perPage: 3,
//           gap: '1rem',
//           autoplay: true,
//           pauseOnHover: true,
//           resetProgress: false,
//           arrows: true,
//           pagination: false,
//           breakpoints: {
//             640: { perPage: 1 },
//             768: { perPage: 2 },
//           },
//         }}
//       >
//         {books.map((book) => (
//           <SplideSlide key={book.id}>
//             <BookItem
//               book={book}
//               onCheckout={(order) => handleCheckout(order)}
//             />
//           </SplideSlide>
//         ))}
//       </Splide>
//       {showForm && selectedOrder && (
//         <CheckoutForm
//           order={selectedOrder}
//           onClose={() => setShowForm(false)}
//         />
//       )}
//     </section>
//   );
// };

export default BookCarousel;
