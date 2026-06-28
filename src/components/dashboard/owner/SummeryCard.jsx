const SummaryCard = ({ icon: Icon, title, value }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
      {/* Top Accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-emerald-600 to-emerald-400" />

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition-transform duration-300 group-hover:scale-105">
        <Icon className="text-3xl" />
      </div>

      <div className="mt-6 space-y-1">
        <p className="text-sm font-medium text-zinc-500">
          {title}
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-zinc-950">
          {value}
        </h2>
      </div>
    </div>
  );
};

export default SummaryCard;