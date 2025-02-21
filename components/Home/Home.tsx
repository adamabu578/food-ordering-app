
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const categories = [
    {
      name: "Food",
      src: "/assets/food.png", // Use relative path for public folder
      href: "/food",
    },
    {
      name: "Pharmacy & Beauty",
      src: "/assets/pharmacy.png",
      href: "/pharmacy",
    },
    {
      name: "shops",
      src: "/assets/shops-icon.png",
      href: "/shops",
    },
    {
      name: "groceries",
      src: "/assets/grocery.png",
      href: "/groceries",
    },
    {
      name: "package Delivery",
      src: "/assets/delivery-icon.png",
      href: "/package-Delivery",
    },
  ];

  return (
    <div className=" ">
      {/* Header */}
      <header className="flex items-center bg-[#ffc244] justify-between px-4 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-teal-600">Glovo</div>
          <MapPin className="h-5 w-5 text-teal-600" />
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 md:flex">
            <MapPin className="h-5 w-5" />
            <span>Delivering to Alhaji Bashiru Street, 12</span>
          </div>
          <Button className="bg-teal-500 hover:bg-teal-600">Login</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative bg-[#ffc244]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
          {/* Category Circles */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="flex flex-col items-center gap-4"
              >
                <div className="group relative h-32 w-32 cursor-pointer overflow-hidden rounded-full bg-white p-6 transition-transform hover:scale-105 md:h-40 md:w-40">
                  <Image
                    src={category.src}
                    alt={category.name}
                    width={80}
                    height={80}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-center font-semibold">{category.name}</span>
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative z-30 mx-auto mt-16 max-w-2xl">
            <div className="h-14 w-full bg-gray-200 rounded-full flex border items-center p-2 ">

              <Search className="h-5 w-5 text-gray-500" />
              <Input
                type="text"
                placeholder="What can we get you?"
                className="border-none text-lg bg-transparent text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Curved Bottom */}
        <div
          className="absolute -bottom-0 left-0 h-20 w-full bg-white"
          style={{
            borderTopLeftRadius: "50% 100%",
            borderTopRightRadius: "50% 100%",
          }}
        />
      </main>
    </div>
  );
}
