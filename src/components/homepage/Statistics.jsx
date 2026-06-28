import {
  FaBuilding,
  FaHome,
  FaUsers,
  FaMapMarkedAlt,
} from "react-icons/fa";

const statistics = [
  {
    id: 1,
    icon: FaBuilding,
    value: "1,200+",
    title: "Properties Listed",
  },
  {
    id: 2,
    icon: FaHome,
    value: "850+",
    title: "Properties Rented",
  },
  {
    id: 3,
    icon: FaUsers,
    value: "5,000+",
    title: "Happy Users",
  },
  {
    id: 4,
    icon: FaMapMarkedAlt,
    value: "30+",
    title: "Cities Covered",
  },
];

export default function Statistics() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            Rental <span className="text-emerald-600">Statistics</span>
          </h2>

          <p className="mt-5 text-lg leading-7 text-zinc-500">
            Numbers that reflect the trust and growth of our rental community.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {statistics.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={28} />
                </div>

                <h3 className="text-4xl font-extrabold tracking-tight text-zinc-950">
                  {item.value}
                </h3>

                <p className="mt-3 font-medium text-zinc-500">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}