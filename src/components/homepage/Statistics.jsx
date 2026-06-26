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
    <section>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Rental <span className="text-primary">Statistics</span>
          </h2>

          <p className="mt-4 text-default-500">
            Numbers that reflect the trust of our growing rental community.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {statistics.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group rounded-2xl border border-default-200 bg-content1 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="text-4xl font-extrabold text-primary">
                  {item.value}
                </h3>

                <p className="mt-3 text-default-500 font-medium">
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