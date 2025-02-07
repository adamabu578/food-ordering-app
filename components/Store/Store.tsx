import { Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Store {
  name: string
  rating: number
  reviews: string
  category: string
  discount?: number
  verified?: boolean
  image: string
}

const stores: Store[] = [
  {
    name: "The Place",
    rating: 96,
    reviews: "500+",
    category: "Chicken",
    discount: 25,
    verified: true,
    image: "/assets/rice.png",
  },
  {
    name: "Burger King",
    rating: 85,
    reviews: "330",
    category: "Burgers",
    discount: 25,
    verified: true,
    image: "/assets/burgerking.png",
  },
  {
    name: "Sweet Sensation",
    rating: 92,
    reviews: "500+",
    category: "Local food",
    discount: 25,
    verified: true,
    image: "/assets/sensation.png",
  },
  {
    name: "Dodo Pizza",
    rating: 91,
    reviews: "132",
    category: "Burgers",
    discount: 20,
    verified: true,
    image: "/assets/dodo-pizza.jpg",
  },
  {
    name: "Cold Stone Creamery",
    rating: 75,
    reviews: "55",
    category: "Burgers",
    discount: 35,
    verified: true,
    image: "/assets/coldstone.png",
  },
  {
    name: "SPAR Market",
    rating: 86,
    reviews: "36",
    category: "Desserts",
    discount: 40,
    verified: true,
    image: "/assets/spar.png",
  },
  {
    name: "Debonairs Pizza",
    rating: 87,
    reviews: "500+",
    category: "Supermarket",
    verified: true,
    image: "/assets/debonair.png",
  },
  {
    name: "Mr Bigg's",
    rating: 88,
    reviews: "25",
    category: "Pizza",
    discount: 15,
    verified: true,
    image: "/assets/mrbig.jpg",
  },
]

export default function StoreRecommendations() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-6 h-6 text-orange-500" />
        <h2 className="text-xl font-bold">Stores you might like</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stores.map((store, index) => (
          <Card key={index} className="overflow-hidden group cursor-pointer">
            <div className="relative aspect-[4/3]">
              <Image
                src={store.image || "/placeholder.svg"}
                alt={store.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-black/50 text-white">
                  {store.category}
                </Badge>
              </div>
              {store.discount && (
                <div className="absolute top-4 right-4">
                  <Badge variant="destructive" className="bg-yellow-500 text-black font-bold">
                    -{store.discount}%
                  </Badge>
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-lg">{store.name}</h3>
                {store.verified && (
                  <Badge variant="secondary" className="bg-blue-500/10 text-blue-500">
                    ✓
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <span className="text-green-600">👍 {store.rating}%</span>
                <span>({store.reviews})</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}



