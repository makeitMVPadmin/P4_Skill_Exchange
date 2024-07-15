import JobCard from "../../components/JobCard/JobCard";

const MarketPlace = () => {
  return (
    <div className="mx-auto p-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-100 p-6 col-span-1 ">
          <h2 className="text-xl font-bold mb-2">Filter</h2>
          <p className="text-gray-700">Category</p>
        </div>
        <div className="bg-white p-6 col-span-3">
          <h2 className="text-xl font-bold mb-2">Market Place</h2>
          <div className="w-full flex sm:items-center flex-wrap gap-5">
            <JobCard job="" />
            <JobCard job="" />
            <JobCard job="" />
            <JobCard job="" />
            <JobCard job="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
