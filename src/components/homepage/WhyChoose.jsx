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
      "Your information stays protected with secure authentication and reliable access control.",
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
      "Explore a wide range of apartments, houses, and rooms at competitive prices for every budget.",
  },
  {
    id: 6,
    icon: FaUsers,
    title: "Trusted Community",
    description:
      "Connect with genuine property owners and renters through a platform built on transparency and trust.",
  },
];

export default function WhyChoose() {
  return (
    <section>
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Why Choose <span className="text-primary">QuickRent?</span>
          </h2>

          <p className="mt-4 text-default-500">
            Experience a smarter, faster, and more secure way to rent
            properties. We make finding or listing a home simple, reliable,
            and hassle-free.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUsData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group rounded-2xl border border-default-200 bg-content1 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>

                <p className="leading-7 text-default-500">
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