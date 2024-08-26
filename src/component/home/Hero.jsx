
const Hero = () => {
  return (
    <section className="xl:px-[150px] p-3">
        <div className="flex flex-col md:flex-row justify-center items-center ">

      <div className="w-full md:w-1/2">
        <img
          src="/headerimg.svg"
          alt="Mr. Akan Ido"
          className="w-full h-auto aspect-auto rounded-lg"
        />
      </div>
      <div className="w-full space-y-7 md:w-1/2 ">
        <h2 className="text-5xl font-bold mb-4 leading-snug xl:w-2/3 w-full">A Life Dedicated to <span className="text-[#2D89BF] italic">Education, Service, and Authorship.</span></h2>
        <p className="text-gray-600 leading-snug text-3xl mb-6">
          The remarkable life and career of Mr. Akan Ido. An Entrepreneur, Author, and Leader.
        </p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-[#2D89BF] text-white rounded hover:bg-blue-700">Buy Products</button>
          <button className="px-4 py-2 border border-gray-600 text-gray-600 rounded hover:bg-gray-600 hover:text-white">Send an Email</button>
        </div>
      </div>
        </div>
      <article className="leading-snug text-3xl mb-6 italic">
      Akan Ido&apos;s life story is a testament to the power of resilience and the pursuit of knowledge. Born during the Nigerian Civil War, a period of immense hardship, he hails from Nkek Enen Ido village in Ukanafun Local Government Area of Akwa Ibom State. 
      </article>
    </section>
  );
};

export default Hero;
