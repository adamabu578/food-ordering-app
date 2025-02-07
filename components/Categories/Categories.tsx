import { Button } from "@/components/ui/button"
import Image from "next/image"

const categories = [
  "Chicken",
  "Local food",
  "Snacks",
  "Healthy",
  "Burgers",
  "Traditional",
  "Pastries",
  "Pasta",
  "Shawarma",
  "Desserts",
]

export default function CategoriesSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center space-y-8">
        {/* Building Icon */}
        <div className="relative w-24 h-24">
          <Image
            src="/assets/cities.svg"
            alt="Building icon"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">Top Categories in Lagos</h2>

        {/* Categories Grid */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
          {categories.map((category) => (
            <Button key={category} variant="ghost" className="bg-[#FFF8EE] hover:bg-[#FFE8CC] text-black rounded-full">
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

