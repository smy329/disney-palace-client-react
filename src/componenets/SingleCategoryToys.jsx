import { Rating } from '@smastrom/react-rating';
import { Link } from 'react-router-dom';

const SingleCategoryToys = ({ tc }) => {
  const { _id, name, picture, price, rating } = tc;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            alt={name}
            className="w-full h-72 object-top object-scale-down"
          />
        </figure>
        <div className="card-body">
          <h2 className="flex items-center text-left text-base leading-6 font-medium">
            {name}
          </h2>
          <div className="flex-1 flex items-center">
            <Rating style={{ maxWidth: 150 }} value={rating} readOnly />

            <span className="text-white ml-2 p-1 text-sm font-semibold border rounded-full bg-primary">
              {rating}
            </span>
          </div>
          <p className="text-3xl font-semibold">${price}</p>
          <Link to={`/toy-details/${_id}`}>
            <button className="theme-btn"> View details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCategoryToys;
