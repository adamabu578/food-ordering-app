import { ThumbsUp, Search, MapPin, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const stores = [
  {
    name: "HealthPlus",
    category: "Beauty",
    rating: "74",
    reviews: "11",
    price: "NGN 890.00",
    time: "20-30 min",
    image: "/assets/nett-pharmacy.jpg",
  },
  {
    name: "Medplus Pharmacy",
    category: "Beauty",
    rating: "74",
    reviews: "11",
    price: "NGN 550.00",
    time: "20-30 min",
    image: "/assets/medplus.png",
  },
  {
    name: "Allure Beauty Store",
    category: "Beauty",
    rating: "-",
    reviews: "",
    price: "NGN 1,500.00",
    time: "25-35 min",
    image: "/assets/beauty.jpg",
  },
  {
    name: "Nett Pharmacy",
    category: "Services",
    rating: "93",
    reviews: "29",
    price: "NGN 1,200.00",
    time: "20-30 min",
    image: "/assets/net-pharm.png",
  },
  {
    name: "Flexipharma(a mutti pharma)",
    category: "Pharmacy",
    rating: "-",
    reviews: "",
    price: "NGN 890.00",
    time: "20-30 min",
    image: "/assets/flexi-pharmacy.png",
  },
]

const filters = [
  { icon: MapPin, label: "Near me" },
  { icon: ThumbsUp, label: "Ratings" },
  { icon: MapPin, label: "Delivery fee" },
]

const popularFilters = [
  { label: "Beauty", count: 42 },
  { label: "Snacks", count: 28 },
  { label: "Wellness", count: 15 },
]

const moreFilters = [
  { label: "Pharmacy", count: 32 },
  { label: "Services", count: 18 },
  { label: "Supermarket", count: 24 },
]

export default function PharmacyStore() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-emerald-500 font-bold text-2xl">Glovo</div>
            <div className="flex items-center gap-2 flex-1 max-w-xs mx-4">
              <MapPin className="w-5 h-5 text-emerald-500" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Alhaji Bashiru Street, 11" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="address1">Alhaji Bashiru Street, 11</SelectItem>
                  <SelectItem value="address2">Victoria Island</SelectItem>
                  <SelectItem value="address3">Lekki Phase 1</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="default" className="bg-emerald-500 hover:bg-emerald-600">
              <User className="w-5 h-5 mr-2" />
              Login
            </Button>
          </div>
          <div className="mt-4 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pl-10 w-full" placeholder="What can we get you?" type="search" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">Sort by</h3>
              <div className="space-y-2">
                {filters.map((filter) => (
                  <Button key={filter.label} variant="ghost" className="w-full justify-start">
                    <filter.icon className="w-5 h-5 mr-2" />
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Popular filters</h3>
              <div className="space-y-2">
                {popularFilters.map((filter) => (
                  <Button key={filter.label} variant="ghost" className="w-full justify-between">
                    {filter.label}
                    <span className="text-gray-400 text-sm">{filter.count}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">More filters</h3>
              <div className="space-y-2">
                {moreFilters.map((filter) => (
                  <Button key={filter.label} variant="ghost" className="w-full justify-between">
                    {filter.label}
                    <span className="text-gray-400 text-sm">{filter.count}</span>
                  </Button>
                ))}
              </div>
            </div>
          </aside>

          <div className="md:col-span-3">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span>Lagos</span>
              <span>›</span>
              <span>Groceries</span>
            </div>

            <h1 className="text-2xl font-bold mb-6">Groceries delivery in Lagos</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stores.map((store) => (
                <Card key={store.name} className="overflow-hidden">
                  <div className="relative aspect-video">
                    <img
                      src={store.image || "/placeholder.svg"}
                      alt={store.name}
                      className="object-cover w-full h-full"
                    />
                    {store.rating !== "-" && (
                      <div className="absolute bottom-2 right-2 bg-white rounded-md px-2 py-1 flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{store.rating}%</span>
                        {store.reviews && <span className="text-gray-400 text-sm">({store.reviews})</span>}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold">{store.name}</h3>
                        <Badge variant="secondary" className="mt-1">
                          {store.category}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{store.price}</div>
                        <div className="text-sm text-gray-500">{store.time}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

