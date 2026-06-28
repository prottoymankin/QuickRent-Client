import { FaSearch } from "react-icons/fa";

const EmptyProperties = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white px-6 py-20 text-center shadow-sm">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <FaSearch className="text-4xl" />
      </div>

      <h3 className="text-2xl font-bold text-zinc-950">
        No Properties Found
      </h3>

      <p className="mt-3 max-w-md leading-7 text-zinc-500">
        We couldn't find any properties matching your search or filter
        criteria. Try adjusting your search keywords or selecting different
        filters.
      </p>
    </div>
  );
};

export default EmptyProperties;