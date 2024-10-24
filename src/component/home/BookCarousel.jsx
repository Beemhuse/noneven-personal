import { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import books from "../../assets/books";
import CheckoutForm from "../CheckoutForm"; // Component you'll create to handle checkout form

const BookItem = ({ title, image, price, onCheckout }) => (
  <div className="flex flex-col w-full items-center mx-4">
    <img src={image} alt={title} className="h-auto w-full mb-4" />
    <h3 className="text-center text-gray-700 mb-2">{title}</h3>
    <p className="text-center text-gray-500 mb-2">₦{price}</p>
    <button
      onClick={onCheckout}
      className="px-4 py-2 border border-[#2D89BF] text-black rounded hover:bg-[#2D89BF] hover:text-white transition"
    >
      Buy Now
    </button>
  </div>
);

const BookCarousel = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleCheckout = (book) => {
    setSelectedBook(book);
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
      <Splide
        options={{
          type: 'loop',
          perPage: 3,
          gap: '1rem',
          autoplay: true,
          pauseOnHover: true,
          resetProgress: false,
          arrows: true,
          pagination: false,
          breakpoints: {
            640: { perPage: 1 },
            768: { perPage: 2 },
          },
        }}
      >
        {books.map((book) => (
          <SplideSlide key={book.id}>
            <BookItem
              title={book.title}
              image={book.image}
              price={book.price}
              onCheckout={() => handleCheckout(book)}
            />
          </SplideSlide>
        ))}
      </Splide>
      {showForm && selectedBook && (
        <CheckoutForm
          selectedBook={selectedBook}
          onClose={() => setShowForm(false)}
        />
      )}
    </section>
  );
};

export default BookCarousel;
