import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-default-200 bg-content1 mt-25">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side */}
          <div className="max-w-md">
            <Link href="/" className="block hover:no-underline">
              <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950">
                Quick<span className="text-emerald-600">Rent</span>
              </h1>
            </Link>

            <p className="mt-5 leading-7 text-default-500">
              QuickRent is your trusted rental platform for discovering quality
              properties with ease. We connect property owners and tenants
              through a secure, fast, and hassle-free rental experience.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {/* Quick Links */}
            <div>
              <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

              <div className="space-y-3 text-default-500">
                <p className="cursor-pointer transition hover:text-primary">
                  Home
                </p>

                <p className="cursor-pointer transition hover:text-primary">
                  All Properties
                </p>

                <p className="cursor-pointer transition hover:text-primary">
                  Dashboard
                </p>

                <p className="cursor-pointer transition hover:text-primary">
                  Contact
                </p>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-5 text-lg font-semibold">Company</h3>

              <div className="space-y-3 text-default-500">
                <p className="cursor-pointer transition hover:text-primary">
                  About Us
                </p>

                <p className="cursor-pointer transition hover:text-primary">
                  FAQ
                </p>

                <p className="cursor-pointer transition hover:text-primary">
                  Privacy Policy
                </p>

                <p className="cursor-pointer transition hover:text-primary">
                  Terms & Conditions
                </p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-5 text-lg font-semibold">Contact</h3>

              <div className="space-y-3 text-default-500">
                <p>support@quickrent.com</p>

                <p>+880 1712-345678</p>

                <p>Sylhet, Bangladesh</p>

                <p>Available 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-default-200 pt-6 text-center text-sm text-default-500">
          <p>© 2026 QuickRent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}