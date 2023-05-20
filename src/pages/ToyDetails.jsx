import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const ToyDetails = () => {
  useTitle('Toy Details');
  const params = useParams();
  const [toyDetails, setToysDetails] = useState({});

  useEffect(() => {
    fetch(
      `https://disney-palace-server.vercel.app/toys/6467833e796a3f4753d2888f`
    )
      .then((response) => response.json())
      .then((data) => setToysDetails(data))
      .catch((error) => error.message);
  }, []);

  console.log(toyDetails);
  return (
    <div className="container mx-auto mb-20">
      ToyDetails: {params.id}
      <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-2 gap-5">
        <figure className=" ">
          <img
            src={toyDetails.picture}
            alt="toy picture"
            className="w-full h-[500px] object-top object-scale-down"
          />
        </figure>
        <div className="p-5 flex flex-auto flex-col flex-grow space-y-5">
          <h2 className="card-title text-2xl">{toyDetails.name}</h2>
          <p className="text-gray-500">{toyDetails.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-4xl font-semibold text-primary">
              {' '}
              ${toyDetails.price}
            </p>
            <div className="flex items-center">
              <Rating
                style={{ maxWidth: 150 }}
                value={toyDetails.rating}
                readOnly
              />

              <span className="text-white ml-2 p-1 text-sm font-semibold border rounded-full bg-primary">
                {toyDetails.rating}
              </span>
            </div>
          </div>

          <p className="text-gray-500 text-lg">
            In Stock: {toyDetails.availableQuantity} Pcs
          </p>
          <div className="border-2 shadow-md rounded-2xl p-8 space-y-2">
            <h1 className="text-2xl font-bold">Sold By</h1>
            <p className="text-gray-500 font-medium">
              Seller Name: {toyDetails.sellerName}
            </p>
            <p className="text-gray-500 font-medium">
              Seller Email: {toyDetails.sellerEmail}
            </p>
          </div>
          <div className="flex gap-5">
            <button className="btn btn-warning flex-1">Add to Cart</button>
            <button className="theme-btn flex-1">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
