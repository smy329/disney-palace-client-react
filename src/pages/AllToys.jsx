import React, { useEffect, useState } from 'react';

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error.message));
  }, []);

  console.log(toys[0]?.name.slice(0, 60));
  return (
    <div className="container mx-auto mb-20 w-full">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="text-center">
            <tr>
              {/* <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> */}
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/* row 1 */}
            {}
            {toys.map((toy) => (
              <>
                <tr>
                  {/* <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th> */}
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">
                          {toy.name.slice(0, 50)}...
                        </div>
                        <div className="text-sm opacity-60 text-left">
                          {toy.sellerName}{' '}
                          <span className="badge badge-ghost">Seller</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{toy.subCategory}</td>
                  <td>${toy.price}</td>
                  <td>{toy.availableQuantity}</td>
                  <th>
                    <button className="btn bg-primary border-primary hover:bg-secondary hover:border-secondary btn-xs ">
                      View Details
                    </button>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
          {/* foot */}
          <tfoot className="text-center">
            <tr>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
