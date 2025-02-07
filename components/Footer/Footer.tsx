import Link from "next/link"
import Image from "next/image"
import { MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-[#1d1d1d] text-white pt-20 pb-12">
      {/* Curved top border */}
      <div
        className="absolute top-0 left-0 right-0 h-12 bg-white"
        style={{
          borderRadius: "0 0 100% 100%/0 0 48px 48px",
        }}
      />

      <div className="container px-4 mx-auto">
        {/* Logo */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-2xl font-semibold">
            Glovo
            <MapPin className="w-6 h-6 ml-1 text-yellow-400" />
          </Link>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Let's do it together */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Let's do it together</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/careers" className="hover:text-gray-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-gray-300">
                  Glovo for Partners
                </Link>
              </li>
              <li>
                <Link href="/couriers" className="hover:text-gray-300">
                  Couriers
                </Link>
              </li>
              <li>
                <Link href="/business" className="hover:text-gray-300">
                  Glovo Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Links of interest */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Links of interest</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/prime" className="hover:text-gray-300">
                  Glovo Prime
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-gray-300">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://facebook.com" className="hover:text-gray-300">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" className="hover:text-gray-300">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" className="hover:text-gray-300">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* Download apps */}
          <div className="space-y-4">
            <Link href="https://apps.apple.com" className="block">
              <Image
                src="/assets/appstore.svg"
                alt="Download on the App Store"
                width={140}
                height={42}
                className="w-auto h-10"
              />
            </Link>
            <Link href="https://play.google.com" className="block">
              <Image
                src="/assets/googleplay.svg"
                alt="Get it on Google Play"
                width={140}
                height={42}
                className="w-auto h-10"
              />
            </Link>
            <div className="space-y-1 pt-4">
              <Link href="/terms" className="block text-sm hover:text-gray-300">
                TERMS & CONDITIONS
              </Link>
              <Link href="/privacy" className="block text-sm hover:text-gray-300">
                PRIVACY POLICY
              </Link>
              <Link href="/cookies" className="block text-sm hover:text-gray-300">
                COOKIES POLICY
              </Link>
              <Link href="/compliance" className="block text-sm hover:text-gray-300">
                COMPLIANCE
              </Link>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="border-t border-gray-700 pt-8">
          <h3 className="text-xl font-semibold mb-4">Top categories: Nigeria</h3>
          <div className="flex flex-wrap gap-4">
            {["Indian", "Healthy", "Pizza", "Sushi", "Burgers", "Breakfast", "Pastries", "Nigerian"].map((category) => (
              <Link
                key={category}
                href={`/category/${category.toLowerCase()}`}
                className="text-gray-300 hover:text-white"
              >
                {category}
              </Link>
            ))}
          </div>
          <Link href="/categories" className="inline-block mt-4 text-gray-300 hover:text-white">
            See all categories
          </Link>
        </div>
      </div>
    </footer>
  )
}

