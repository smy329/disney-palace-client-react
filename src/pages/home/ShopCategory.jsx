import { useEffect, useState } from 'react';
import { FlipProvider, useFlip } from 'react-easy-flip';
import SingleCategoryToys from '../../componenets/SingleCategoryToys';
import { toast } from 'react-hot-toast';

const ShopCategory = () => {
  const [tabs, setTabs] = useState([]);
  const [selectedTab, setSelectedTab] = useState('');
  const [tabContent, setTabContent] = useState([]);

  const selectedTabHandler = (name) => {
    setSelectedTab(name);
    console.log(name);
    const tabContentCRUD = fetch(
      `https://disney-palace-server.vercel.app/toys/subCategory/${name}`
    )
      .then((response) => response.json())
      .then((data) => setTabContent(data))
      .catch((error) => console.log(error.message));
    toast.promise(tabContentCRUD, {
      loading: 'Loading...',
      success: 'Tab Contents fetched successfully',
      error: 'Error when fetching',
    });
  };

  //fetching sun categories
  useEffect(() => {
    const subCategoriesCRUD = fetch(
      'https://disney-palace-server.vercel.app/sub-categories'
    )
      .then((response) => response.json())
      .then((data) => setTabs(data))
      .catch((error) => console.log(error.message));
    toast.promise(subCategoriesCRUD, {
      loading: 'Loading...',
      success: 'Sub categories fetched successfully',
      error: 'Error when fetching',
    });
  }, []);

  useEffect(() => {
    const firstTabContentCRUD = fetch(
      `https://disney-palace-server.vercel.app/toys/subCategory/${tabs[0]?.name}`
    )
      .then((response) => response.json())
      .then((data) => setTabContent(data))
      .catch((error) => console.log(error.message));
    toast.promise(firstTabContentCRUD, {
      loading: 'Loading...',
      success: 'Tab contents fetched successfully',
      error: 'Error when fetching',
    });
  }, [tabs]);

  const animationOption = {
    duration: 1000,
  };
  const flipRootId = 'flipRoot';

  useFlip(flipRootId, animationOption);

  return (
    <FlipProvider>
      <div
        className="space-y-8 container mx-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex flex-col items-center text-center space-y-5">
          <h1 className="text-5xl font-bold text-black">
            Shop Our Top Categories
          </h1>
          <p className="text-xl font-medium w-11/12 md:w-4/5 text-slate-500 ">
            A collection of toys inspired by beloved Disney characters and
            stories, offering a magical and enchanting playtime experience for
            children and Disney fans alike.
          </p>
        </div>

        <div
          className="w-full flex justify-center pt-3"
          data-flip-root-id={flipRootId}
        >
          <div className="flex flex-col md:flex-row gap-3 md:gap-10 items-center justify-center w-2/4">
            {tabs?.map((tabItem) => {
              return (
                <div
                  onClick={() => selectedTabHandler(tabItem.name)}
                  className="w-full cursor-pointer text-center hover:text-primary "
                  key={tabItem._id}
                >
                  {/* here i am making first letter capital */}
                  <span className="text-xl tracking-wide font-medium ">
                    {tabItem.name.charAt(0).toUpperCase() +
                      tabItem.name.slice(1)}
                  </span>
                  {selectedTab === tabItem.name ? (
                    <div
                      className="w-full h-1 bg-secondary mt-3"
                      data-flip-id="highlight"
                    />
                  ) : (
                    <div className="w-full h-2 bg-transparent mt-3" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-3">
          {tabContent.map((tc) => (
            <SingleCategoryToys key={tc._id} tc={tc} />
          ))}
        </div>
      </div>
    </FlipProvider>
  );
};

export default ShopCategory;
