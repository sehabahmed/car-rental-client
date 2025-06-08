/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSearchParams } from "react-router-dom";
import {
  useSearchAvailableCarsQuery,
} from "../../redux/features/car/carManagement.api";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useMemo } from "react";

export default function SearchAvailableCars() {
  const [searchParams] = useSearchParams();

  const location = searchParams.get("location");
  const date = searchParams.get("date");
  const startTime = searchParams.get("startTime");

  const hasSearchParams = location && date && startTime;

  const searchQuery = useMemo(() => {
    if (!hasSearchParams) return null;

    return {
      location,
      date,
      startTime,
    };
  }, [hasSearchParams, location, date, startTime]);

//   const {
//     data: allCarsData,
//     isLoading: isAllCarsLoading,
//     error: isAllCarsError,
//   } = useGetAllCarsQuery(undefined, { skip: hasSearchParams });

  const {
    data: searchResults,
    isLoading,
    error,
  } = useSearchAvailableCarsQuery(searchQuery, { skip: !hasSearchParams });


  // Show message if no search parameters
  if (!hasSearchParams) {
    return (
      <div className="w-11/12 mx-auto flex flex-col justify-center items-center h-64">
        <div className="text-lg text-gray-500 mb-4">
          Please use the search form to find available cars
        </div>
        <div className="text-sm text-gray-400">
          Location, date, and time are required for search
        </div>
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="w-11/12 mx-auto flex justify-center items-center h-64">
        <div className="text-lg">Searching for available cars...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-11/12 mx-auto flex justify-center items-center h-64">
        <div className="text-lg text-red-500">
          Error searching for cars. Please try again.
        </div>
      </div>
    );
  }

  // No cars found
  if (!searchResults?.data || searchResults.data.length === 0) {
    return (
      <div className="w-11/12 mx-auto flex flex-col justify-center items-center h-64">
        <div className="text-lg text-gray-500 mb-4">
          No available cars found for your search criteria
        </div>
        <div className="text-sm text-gray-400 mb-4">
          Location: {location} • Date: {new Date(date).toLocaleDateString()} •
          Time: {startTime}
        </div>
        <div className="text-sm text-gray-400">
          Try searching with different parameters
        </div>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
      {searchResults?.data?.map((car: any) => (
        <div
          key={car._id}
          className="w-full md:w-[70%] shadow-lg dark:bg-slate-800 bg-white rounded"
        >
          <img src={car.img} alt="" className="w-full h-64 object-cover" />
          <div className="flex w-full justify-between items-center p-4">
            <div className="flex  items-center gap-4">
              <div className=" flex flex-col items-center">
                <h2 className="font-semibold dark:text-[#abc2d3] text-black text-2xl">
                  {car.name}
                </h2>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <span>📍 {location} • </span>
              </div>
            </div>
            <BsThreeDotsVertical className="text-[#424242] dark:text-[#abc2d3] dark:hover:bg-slate-900/60 rounded-full text-[2.5rem] p-2 hover:bg-[#ececec] cursor-pointer" />
          </div>

          <p className="text-[#424242] dark:text-[#abc2d3] p-4">
            {car.description}
          </p>

          <div className="flex items-center justify-between w-full p-4 ">
            <div className="flex flex-col items-center gap-4 ">
              <div>
                {" "}
                <p className="text-[#424242] dark:text-[#abc2d3] text-[0.9rem]">
                  Price : ${car.pricePerHour}/hr
                </p>{" "}
              </div>
            </div>
            <button className="btn p-3 rounded dark:bg-slate-900 dark:border-slate-700 border bg-blue-600 text-white hover:bg-blue-700 hover:text-white">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
