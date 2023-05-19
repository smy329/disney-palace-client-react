import { useEffect, useState } from 'react';
import SearchToys from '../componenets/SearchToys';
import { Link } from 'react-router-dom';

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [updatedToyList, setUpdatedToyList] = useState(toys);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.value;
    setSearchKey(searchInput);
    //console.log(searchKey);
  };
  //console.log(updatedToyList);

  useEffect(() => {
    const searchedToy = toys.filter((toy) =>
      toy.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setUpdatedToyList(searchedToy);
  }, [searchKey, toys]);

  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="container mx-auto mb-20 w-full">
      <SearchToys searchKey={searchKey} handleSearch={handleSearch} />
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
            {updatedToyList.map((toy) => (
              <tr key={toy._id}>
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
                  <Link to={`/toy-details/${toy._id}`}>
                    <button className="btn bg-primary border-primary hover:bg-secondary hover:border-secondary btn-xs ">
                      View Details
                    </button>
                  </Link>
                </th>
              </tr>
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
