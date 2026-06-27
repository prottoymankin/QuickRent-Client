import Link from "next/link";

const EmptyState = ({
  title,
  description,
  buttonText,
  buttonHref
}) => {
  return (
    <div 
      className="flex min-h-114 flex-col items-center justify-center rounded-2xl border border-dashed border-default-300 bg-default-50 px-6 text-center"
    >
      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-default-500">
        {description}
      </p>

      {buttonText && buttonHref && (
        <Link
          href={buttonHref}
          className="mt-8 rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
};

export default EmptyState;