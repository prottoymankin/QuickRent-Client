import dhaka_city from '../../../public/images/dhaka_city.jpg';
import chattagram_city from '../../../public/images/chattagram.jpg';
import sylhet_city from '../../../public/images/sylhet.webp';
import rajshahi_city from '../../../public/images/rajshahi.webp';

import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

const topLocations = [
  {
    id: 1,
    city: "Dhaka",
    properties: 320,
    image: dhaka_city
  },
  {
    id: 2,
    city: "Chattogram",
    properties: 180,
    image: chattagram_city
  },
  {
    id: 3,
    city: "Sylhet",
    properties: 140,
    image: sylhet_city
  },
  {
    id: 4,
    city: "Rajshahi",
    properties: 95,
    image: rajshahi_city
  },
];

export default function TopLocations() {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Explore Top <span className="text-primary">Locations</span>
          </h2>

          <p className="mt-4 text-zinc-500">
            Find rental properties in Bangladesh's most popular cities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topLocations.map((location) => (
            <div
              key={location.id}
              className="group overflow-hidden rounded-2xl border border-default-200 bg-content1 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={location.image}
                  alt={location.city}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-5 left-5 text-white">
                  <div className="mb-2 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-primary" />
                    <h3 className="text-2xl font-bold">
                      {location.city}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-200">
                    {location.properties}+ Properties
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}