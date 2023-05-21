import service1 from '../../assets/images/services/service1.png';
import service2 from '../../assets/images/services/service2.png';
import service3 from '../../assets/images/services/service3.png';

const ServicesToHelp = () => {
  return (
    <div className="space-y-5">
      <div
        className="flex flex-col items-center text-center space-y-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="text-5xl font-bold text-black">
          Services To Help You Shop
        </h1>
        <p className="text-xl font-medium tracking-wide w-3/5 text-slate-500 ">
          Explore our curated selection of services designed to enhance your
          Disney toy shopping experience in our exclusive marketplace.{' '}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          className="card w-full bg-gray-100 shadow-xl"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="card-body">
            <h2 className="card-title text-3xl">Frequently Asked Questions</h2>
            <p className="text-slate-500 font-medium">
              Providing our comprehensive FAQ section with the information you
              need for a smooth online shopping experience.
            </p>
          </div>
          <figure>
            <img src={service1} alt="Shoes" />
          </figure>
        </div>
        <div
          className="card w-full bg-gray-100 shadow-xl"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="card-body">
            <h2 className="card-title text-3xl">Online Payment Process</h2>
            <p className="text-slate-500 font-medium">
              Experience seamless and secure online payments at our web store,
              ensuring a hassle-free shopping experience.
            </p>
          </div>
          <figure>
            <img src={service2} alt="Shoes" />
          </figure>
        </div>
        <div
          className="card w-full bg-gray-100 shadow-xl"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="card-body">
            <h2 className="card-title text-3xl">Home Delivery Options</h2>
            <p className="text-slate-500 font-medium">
              Enjoy the convenience of doorstep delivery with our reliable and
              efficient home delivery service{' '}
            </p>
          </div>
          <figure>
            <img src={service3} alt="Shoes" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ServicesToHelp;
