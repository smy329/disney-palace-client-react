import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../hooks/useTitle';

const MyToys = () => {
  useTitle('My Toys');
  const params = useParams();
  const [myToys, setMyToys] = useState([]);
  const [modalData, setModalData] = useState();
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  useEffect(() => {
    const myPromise = fetch(`http://localhost:5000/my-toys/${params.email}`)
      .then((response) => response.json())
      .then((data) => setMyToys(data))
      .catch((error) => console.log(error.message));
    toast.promise(myPromise, {
      loading: 'Loading...',
      success: 'My toys fetched successfully',
      error: 'Error when fetching',
    });
  }, []);

  useEffect(() => {
    const subCategoriesFromDB = fetch(
      'https://disney-palace-server.vercel.app/sub-categories'
    )
      .then((response) => response.json())
      .then((data) => setSubCategories(data))
      .catch((error) => console.log(error.message));
    toast.promise(subCategoriesFromDB, {
      loading: 'Loading...',
      success: 'All Sub categories fetched successfully',
      error: 'Error when fetching',
    });
  }, []);

  const showModalData = (id) => {
    const modalDataCRUD = fetch(`http://localhost:5000/toys/${id}`)
      .then((response) => response.json())
      .then((data) => setModalData(data))
      .catch((error) => console.log(error.message));
    toast.promise(modalDataCRUD, {
      loading: 'Loading...',
      success: 'Modal data fetched successfully',
      error: 'Error when fetching',
    });
  };

  const handleSelectSubCategory = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const picture = form.toyImg.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const rating = form.rating.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const description = form.description.value;
    const updatedToyData = {
      name,
      picture,
      subCategory,
      price,
      availableQuantity,
      rating,
      sellerName,
      sellerEmail,
      description,
    };
    console.log(updatedToyData);
    fetch(`http://localhost:5000/my-toys/update/${modalData._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedToyData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success('The toy has been updated successfully');
        }
      })
      .catch((error) => console.log(error.message));
    form.reset();
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/my-toys/${id}`, {
          method: 'DELETE',
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              toast.success('The toy has been deleted successfully');
              //you may got another idea to get it done by using useeffect dependency, bt that way causes infinite llop of data fatching
              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
            }
          })
          .catch((error) => console.log(error.message));
      }
    });
  };

  const handleDesc = () => {
    const descCRUD = fetch(`http://localhost:5000/my-toys/sort/desc`)
      .then((response) => response.json())
      .then((data) => setMyToys(data))
      .catch((error) => console.log(error.message));
    toast.promise(descCRUD, {
      loading: 'Loading...',
      success: 'Successfully sorted in descending order',
      error: 'Error when fetching',
    });
  };

  const handleAsc = () => {
    const ascCRUD = fetch(`http://localhost:5000/my-toys/sort/asc`)
      .then((response) => response.json())
      .then((data) => setMyToys(data))
      .catch((error) => console.log(error.message));
    toast.promise(ascCRUD, {
      loading: 'Loading...',
      success: 'Successfully sorted in ascending order',
      error: 'Error when fetching',
    });
  };

  return (
    <div className="container mx-auto mb-20 w-full">
      <div className="overflow-x-auto w-full">
        {/* sorting dropdown */}
        <div className="flex justify-end">
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn btn-md theme-btn m-1 ">
              <span className="text-sm">Sort By</span>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link onClick={handleDesc}>Descending</Link>
              </li>
              <li>
                <Link onClick={handleAsc}>Ascending</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* sorting dropdown end */}

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
            {myToys.map((toy) => (
              <tr key={toy._id}>
                {/* <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th> */}
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold text-left">
                        {toy?.name?.slice(0, 50)}...
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
                  <div className="flex gap-3 justify-center">
                    {/* <Link to={`/toy-details/${toy._id}`}> */}

                    <label
                      onClick={() => {
                        showModalData(toy._id);
                      }}
                      htmlFor="my-modal-5"
                      className="btn bg-primary border-primary hover:bg-secondary hover:border-secondary btn-xs"
                    >
                      Update
                    </label>
                    {/* <UpdateMyToys /> */}

                    <button
                      className="btn bg-grayPrimary border-grayPrimary hover:bg-graySecondary hover:border-graySecondary btn-xs "
                      onClick={() => {
                        handleDelete(toy._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
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
      <div>
        {/* The button to open modal */}
        {/* <label htmlFor="my-modal-5" className="btn">
        open modal
      </label> */}

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">
              Congratulations random Internet user!
            </h3>
            <form
              action=""
              className="space-y-4 md:space-y-6 w-4/5 mx-auto"
              onSubmit={handleUpdateToy}
            >
              <div className="flex gap-8">
                <div className="flex-1">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter toy name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="theme-input "
                    placeholder="Enter toy name"
                    defaultValue={modalData?.name}
                    required
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="toyImg"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter toy photo url
                  </label>
                  <input
                    type="text"
                    name="toyImg"
                    id="toyImg"
                    className="theme-input"
                    placeholder="Enter toy photo url"
                    defaultValue={modalData?.picture}
                    required
                  />
                </div>
              </div>
              <div className="flex gap-8">
                <div className="flex-1">
                  <label
                    htmlFor="subCategory"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    What is your toy&apos;s sub-category
                  </label>

                  <select
                    id="subCategory"
                    name="subCategory"
                    value={selectedSubCategory}
                    defaultValue={modalData?.subCategory}
                    onChange={handleSelectSubCategory}
                    className="theme-input"
                  >
                    {subCategories.map((category) => (
                      <option key={category._id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Toy price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="theme-input"
                    placeholder="Enter selling price"
                    step="any"
                    defaultValue={modalData?.price}
                    required
                  />
                </div>
              </div>
              <div className="flex gap-8">
                <div className="flex-1">
                  <label
                    htmlFor="availableQuantity"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    How many stock do you have?
                  </label>
                  <input
                    type="number"
                    name="availableQuantity"
                    id="availableQuantity"
                    className="theme-input "
                    placeholder="Enter available quantity"
                    step="any"
                    defaultValue={modalData?.availableQuantity}
                    required
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="rating"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Toy rating
                  </label>
                  <input
                    type="number"
                    name="rating"
                    id="rating"
                    className="theme-input"
                    placeholder="Enter toy rating (within 5)"
                    step="any"
                    defaultValue={modalData?.rating}
                    required
                  />
                </div>
              </div>
              <div className="flex gap-8">
                <div className="flex-1">
                  <label
                    htmlFor="sellerName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Write seller name
                  </label>
                  <input
                    type="text"
                    name="sellerName"
                    id="sellerName"
                    className="theme-input "
                    placeholder="Enter seller name"
                    defaultValue={modalData?.sellerName}
                    required
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="sellerEmail"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    What is seller&apos;s email?
                  </label>
                  <input
                    type="text"
                    name="sellerEmail"
                    id="sellerEmail"
                    className="theme-input"
                    placeholder="Enter seller email"
                    defaultValue={modalData?.sellerEmail}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Describe your product
                </label>
                <textarea
                  rows={8}
                  type="text"
                  name="description"
                  id="description"
                  className="theme-input "
                  placeholder="Enter product description"
                  defaultValue={modalData?.description}
                  required
                />
              </div>
              <div className="flex gap-5">
                <label
                  className="theme-btn-secondary flex-1"
                  htmlFor="my-modal-5"
                >
                  Back
                </label>
                <button className="theme-btn flex-1">Update Your Toy</button>
              </div>
            </form>
            {/* <div className="modal-action">
              <label htmlFor="my-modal-5" className="btn">
                Yay!
              </label>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
