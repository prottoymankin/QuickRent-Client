import { FaSearch } from "react-icons/fa";

const EmptyProperties = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center border border-dashed rounded-2xl">
      <div className="w-20 h-20 rounded-full bg-default-100 flex items-center justify-center mb-6">
        <FaSearch className="text-4xl text-default-500" />
      </div>

      <h3 className="text-2xl font-semibold">
        No Properties Found
      </h3>

      <p className="mt-3 max-w-md text-default-500">
        We couldn't find any properties matching your search or filter
        criteria. Try changing your search keywords or selecting different
        filters.
      </p>
    </div>
  );
};

export default EmptyProperties;