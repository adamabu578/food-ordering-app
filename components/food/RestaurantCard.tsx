import { Search, Clock, ThumbsUp, ChevronDown, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FoodDeliveryApp = () => {
  const promotions = [
    {
      name: "Cold Stone Creamery",
      category: "Desserts",
      discount: "-40%",
      rating: "98%",
      reviews: "109",
      price: "NGN 950.00",
      time: "45-55 min",
      image: "/assets/coldStone-cream.png"
    },
    {
      name: "The Place",
      category: "Chicken",
      discount: "-20%",
      rating: "95%",
      reviews: "500+",
      price: "NGN 850.00",
      time: "55-65 min",
      image: "/assets/place.jpeg"
    },
    {
      name: "Sweet Sensation",
      category: "Burgers",
      discount: "-20%",
      rating: "93%",
      reviews: "126",
      price: "NGN 950.00",
      time: "65-75 min",
      image: "/assets/sensation-Rice.png"
    },
    {
      name: "Burger King",
      category: "Burgers",
      discount: "-20%",
      rating: "93%",
      reviews: "126",
      price: "NGN 950.00",
      time: "65-75 min",
      image: "/assets/burgerking.png"
    },
    {
      name: "Sweet Sensation",
      category: "Burgers",
      discount: "-20%",
      rating: "93%",
      reviews: "126",
      price: "NGN 950.00",
      time: "65-75 min",
      image: "/assets/chicken.jpg"
    },
    {
      name: "Nelson Grillz and Buffeteria",
      category: "Burgers",
      discount: "-20%",
      rating: "93%",
      reviews: "126",
      price: "NGN 950.00",
      time: "65-75 min",
      image: "/assets/grilz.png"
    },
    {
      name: "Domino's pizza",
      category: "Burgers",
      discount: "-20%",
      rating: "93%",
      reviews: "126",
      price: "NGN 950.00",
      time: "65-75 min",
      image: "/assets/domino-pizza.png"
    },
    {
      name: "Debonairs Pizza",
      category: "Burgers",
      discount: "-20%",
      rating: "93%",
      reviews: "126",
      price: "NGN 950.00",
      time: "65-75 min",
      image: "/assets/debopizza.png"
    },
    {
      name: "Dodo Pizza",
      category: "Burgers",
      discount: "-20%",
      rating: "93%",
      reviews: "126",
      price: "NGN 950.00",
      time: "65-75 min",
      image: "/assets/dodo.png"
    },
    {
      name: "Blackbell restaurant",
      category: "Burgers",
      discount: "-20%",
      rating: "93%",
      reviews: "126",
      price: "NGN 950.00",
      time: "65-75 min",
      image: "/assets/blackbell.png"
    },
    {
      name: "Tastee Fried chicken",
      category: "Burgers",
      discount: "-20%",
      rating: "93%",
      reviews: "126",
      price: "NGN 950.00",
      time: "65-75 min",
      image: "/assets/fried-rice.png"
    },
    {
      name: "Mr Bigg's",
      category: "Burgers",
      discount: "-20%",
      rating: "93%",
      reviews: "126",
      price: "NGN 950.00",
      time: "65-75 min",
      image: "/assets/biggs.png"
    },
    
    
  ];

  const filters = [
    { name: "Chicken", icon: "🍗" },
    { name: "Jollof", icon: "🍚" },
    { name: "Local food", icon: "🥘" },
    { name: "Bakery and Pastry", icon: "🥖" },
    { name: "Breakfast", icon: "🍳" },
    { name: "Burgers", icon: "🍔" },
    { name: "Butcher's", icon: "🥩" }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <img src="/assets/Glovo-logo.png" alt="Glovo" className="h-8" />
        <div className="flex items-center gap-2">
          <span className="text-sm">Delivering to</span>
          <Button variant="ghost" className="font-medium flex items-center gap-1">
            Alhaji Bashiru Street, 11
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="default" className="bg-emerald-500 hover:bg-emerald-600">
          Login
        </Button>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input
          placeholder="What can we get you?"
          className="pl-10 py-6 text-lg"
        />
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-6">
        <span className="text-gray-600">Lagos</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600">Food</span>
      </div>

      {/* Main content */}
      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-64">
          <div className="mb-6">
            <h3 className="font-medium mb-3">Sort by</h3>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Clock className="h-4 w-4" />
              Near me
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <ThumbsUp className="h-4 w-4" />
              Ratings
            </Button>
          </div>

          <div>
            <h3 className="font-medium mb-3">Popular filters</h3>
            {filters.map((filter) => (
              <Button
                key={filter.name}
                variant="ghost"
                className="w-full justify-start gap-2 mb-1"
              >
                <span>{filter.icon}</span>
                {filter.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">Food delivery in Lagos</h1>

          {/* Promotions */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <h2 className="text-xl font-bold">Promotions</h2>
              </div>
              <Button variant="link" className="text-emerald-500">
                See all
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {promotions.map((promo) => (
                <Card key={promo.name} className="overflow-hidden">
                  <div className="relative">
                    <img
                      src={promo.image}
                      alt={promo.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                      {promo.discount}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold">{promo.name}</h3>
                      <span className="text-sm text-gray-500">
                        {promo.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <ThumbsUp className="h-4 w-4" />
                      {promo.rating} ({promo.reviews})
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4" />
                      {promo.time} · {promo.price}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDeliveryApp;