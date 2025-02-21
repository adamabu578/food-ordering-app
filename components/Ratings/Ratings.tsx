import Image from "next/image"
import { Clock, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ChickenDelivery() {
  const restaurants = [
    {
      name: "Relish & More Foods",
      image: "/assets/ralish.jpg",
      price: "NGN 490.00",
      time: "20-30 min",
      isNew: true,
      category: "Chicken",
    },
    {
      name: "Cafe DC",
      image: "/assets/cafe-dc.png",
      price: "NGN 890.00",
      time: "65-75 min",
      isNew: true,
      category: "Chicken",
    },
    {
      name: "Quick Chow",
      image: "/assets/quick-chow.jpg",
      price: "NGN 690.00",
      time: "20-30 min",
      rating: 4.5,
      category: "Chicken",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Chicken delivery in Lagos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {restaurants.map((restaurant, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="p-0 relative">
              <Image
                src={restaurant.image || "/placeholder.svg"}
                alt={restaurant.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              {restaurant.isNew && (
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">New</Badge>
              )}
              {restaurant.rating && (
                <Badge className="absolute top-4 right-4 bg-background">
                  <Star className="w-4 h-4 fill-primary mr-1" />
                  {restaurant.rating}
                </Badge>
              )}
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold">{restaurant.name}</h2>
                <Badge variant="secondary">{restaurant.category}</Badge>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                <span className="text-sm">{restaurant.time}</span>
                <span className="mx-2">•</span>
                <span className="text-sm">{restaurant.price}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="space-y-8 max-w-3xl">
        <div>
          <h2 className="text-2xl font-bold mb-4">Order chicken in Lagos</h2>
          <p className="text-muted-foreground">
            Are you looking for chicken delivery in Lagos? Then check out Glovo! You can choose from chicken dishes from
            different types of cuisines and manners of preparation. So whether you would like to have some fried chicken
            or spicy wings or even masala butter chicken, we've got you covered!
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">How can I order chicken delivery in Lagos with Glovo?</h2>
          <p className="text-muted-foreground">
            Whenever you feel like eating some delicious chicken, just open Glovo's app or website and enter your
            delivery address. You will then be able to browse different categories of food we deliver and choose
            "Chicken". Then, just select the restaurant from which you want to order your chicken delivery and add your
            desired products to your order.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">The best chicken restaurants in Lagos with delivery</h2>
          <p className="text-muted-foreground">
            In Lagos there numerous restaurants from which you can order chicken delivery. What is more, they are very
            diverse when it comes to the way they prepare their chicken dishes, the spices they use or tastes they
            offer.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Where to order chicken delivery in Nigeria</h2>
          <p className="text-muted-foreground">
            You can treat yourself with some delicious chicken in Lagos, but also in other cities of Nigeria.
          </p>
        </div>
      </section>
    </div>
  )
}

