
const Cashback = () => {
  // https://i.ibb.co/CMyZB9r/cashback.jpg
  return (
    <div className='bg-[url("https://i.ibb.co/84bDXLw/cashback.png")]  md:bg-cover md:bg-center md:bg-fixed bg-no-repeat w-full h-[420px] md:h-screen relative'>
      <div
        className="bg-primary absolute -bottom-10 md:bottom-10 right-0 md:right-10 text-white w-full md:w-2/5 px-5 md:px-12 py-3 md:py-16 rounded-3xl"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <h1 className="mb-2 md:mb-4 text-3xl md:text-5xl font-bold ">
          Get 5% Cash Back On $200
        </h1>
        <p className="text-xl leading-2 md:leading-8 mb-2 md:mb-10">
          Shopping is a bit of a relaxing hobby for me, which is sometimes
          troubling for the bank balance.
        </p>
        <button className="px-5 md:px-9 py-2 md:py-4 border-white border rounded-full font-semibold">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Cashback;
