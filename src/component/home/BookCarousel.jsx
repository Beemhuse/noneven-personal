import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const books = [
    {
      id: 1,
      title: "Terrorism in the Human Family Interconnecting Security Challenges",
      image: "/book1.svg",
      link: "#",
    },
    {
      id: 2,
      title: "Understanding The Issues and Substance of International Politics and Relations",
      image: "/book2.svg",
      link: "#",
    },
    {
      id: 3,
      title: "Understanding The Issues and Substance of International Politics and Relations",
      image: "/book3.svg",
      link: "#",
    },
    // Add more books as needed
  ];
  
  const BookItem = ({ title, image, link }) => (
    <div className="flex flex-col w-full items-center mx-4">
      <img src={image} alt={title} className="h-auto w-full mb-4" />
      <h3 className="text-center text-gray-700 mb-2">{title}</h3>
      <a href={link} className="px-4 py-2 border border-[#2D89BF] text-black rounded hover:bg-[#2D89BF] hover:text-white transition">
        Buy Now
      </a>
    </div>
  );
  
  const BookCarousel = () => {
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
              640: {
                perPage: 1,
              },
              768: {
                perPage: 2,
              },
            },
          }}
        >
          {books.map((book) => (
            <SplideSlide key={book.id}>
              <BookItem title={book.title} image={book.image} link={book.link} />
            </SplideSlide>
          ))}
        </Splide>
      </section>
    );
  };
  
  export default BookCarousel;
  