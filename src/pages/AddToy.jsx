import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddToy = () => {
  const navigate = useNavigate();
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  useEffect(() => {
    fetch('https://disney-palace-server.vercel.app/sub-categories')
      .then((response) => response.json())
      .then((data) => setSubCategories(data))
      .catch((error) => console.log(error.message));
  }, []);

  const handleSelectSubCategory = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const nameInput = form.name.value;
    const toyImgInput = form.toyImg.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const rating = form.rating.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const description = form.description.value;
    const toyData = {
      nameInput,
      toyImgInput,
      subCategory,
      price,
      availableQuantity,
      rating,
      sellerName,
      sellerEmail,
      description,
    };
    console.log(toyData);
    fetch('http://localhost:5000/toys', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(toyData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success('A new toy has been added successfully');
        }
      })
      .catch((error) => console.log(error.message));
    //form.reset();
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="container mx-auto space-y-20 mb-20">
      <h1 className="text-5xl font-bold text-black text-center">Add A Toy</h1>
      <form
        action=""
        className="space-y-4 md:space-y-6 w-4/5 mx-auto"
        onSubmit={handleAddToy}
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
            {/* <input
              type="text"
              name="subCategory"
              id="subCategory"
              className="theme-input "
              placeholder="Select one sub-category"
              required
            /> */}
            <select
              id="subCategory"
              name="subCategory"
              value={selectedSubCategory}
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
            required
          />
        </div>
        <div className="flex gap-8">
          <button className="theme-btn-secondary flex-1" onClick={handleGoBack}>
            Back
          </button>
          <button className="theme-btn flex-1">Add Toy</button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
