import BookCarousel from "../component/home/BookCarousel";
import Hero from "../component/home/Hero";
import MainPage from "../component/home/MainPage";
import InspirationBanner from "../component/InspirationBanner";

export default function Home() {

  return (
    <main>
   {/* <Navbar /> */}
   <Hero />
   <MainPage />
   <BookCarousel />
   <InspirationBanner />
    </main>
  )
}