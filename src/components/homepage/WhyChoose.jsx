import {
  FaHome,
  FaBolt,
  FaLock,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUsers,
} from "react-icons/fa";

const whyChooseUsData = [
  {
    id: 1,
    icon: FaHome,
    title: "Verified Properties",
    description:
      "Browse carefully verified rental listings with accurate details, genuine photos, and trusted property owners.",
  },
  {
    id: 2,
    icon: FaBolt,
    title: "Fast & Easy Booking",
    description:
      "Find your ideal property quickly with intuitive search, advanced filters, and a smooth rental process.",
  },
  {
    id: 3,
    icon: FaLock,
    title: "Safe & Secure Platform",
    description:
      "Your personal information and bookings are protected with secure authentication and role-based access control.",
  },
  {
    id: 4,
    icon: FaMapMarkerAlt,
    title: "Smart Location Search",
    description:
      "Search properties by location and discover homes that perfectly match your lifestyle and budget.",
  },
  {
    id: 5,
    icon: FaMoneyBillWave,
    title: "Affordable Rental Options",
    description:
      "Explore apartments, houses, and rooms at competitive prices for every budget.",
  },
  {
    id: 6,
    icon: FaUsers,
    title: "Trusted Community",
    description:
      "Connect with genuine property owners and tenants through a platform built on transparency and trust.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            Why Choose <span className="text-emerald-600">QuickRent?</span>
          </h2>

          <p className="mt-5 text-lg leading-7 text-zinc-500">
            Experience a smarter, faster, and more secure way to rent
            properties. We make finding or listing a home simple, reliable,
            and hassle-free.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUsData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={28} />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-zinc-950">
                  {item.title}
                </h3>

                <p className="leading-7 text-zinc-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}