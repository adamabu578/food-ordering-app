import { Search } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StorePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Image
            src="/assets/Glovo-logo.png"
            alt="Glovo"
            width={100}
            height={40}
            className="h-8 w-auto"
          />
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Delivering to: Alhaji Bashiru Street, 11</span>
            <Button variant="default" size="sm">
              Login
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Store Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Fouani Store Small Appliances</h1>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★</span>
              <span>-</span>
            </div>
            <div>60-7'</div>
            <div>₦600.00</div>
            <div>Prime</div>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search in Fouani Store Small Appliances" className="pl-10" />
        </div>

        {/* Products */}
        <Tabs defaultValue="kitchen" className="mb-8">
          <TabsList>
            <TabsTrigger value="kitchen">Kitchen Appliances</TabsTrigger>
            <TabsTrigger value="other">Other Electronics</TabsTrigger>
          </TabsList>
          <TabsContent value="kitchen" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {kitchenAppliances.map((product) => (
                <Card key={product.id}>
                  <CardContent className="p-4">
                    <div className="aspect-square relative mb-3">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-sm font-medium mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">₦{product.price.toLocaleString()}</span>
                      <Button size="icon" variant="ghost">
                        +
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="other" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {otherElectronics.map((product) => (
                <Card key={product.id}>
                  <CardContent className="p-4">
                    <div className="aspect-square relative mb-3">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-sm font-medium mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">₦{product.price.toLocaleString()}</span>
                      <Button size="icon" variant="ghost">
                        +
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-xl font-semibold mb-6">Frequently asked questions</h2>
          <div className="grid gap-6 max-w-3xl">
            <div>
              <h3 className="font-medium mb-2">What can I order in Fouani Store Small Appliances in Lagos?</h3>
              <p className="text-sm text-muted-foreground">
                Fouani Store Small Appliances offers a lot of items you can order. Take a look at the product list and
                choose what you would like to order from Fouani Store Small Appliances.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">How much does Fouani Store Small Appliances delivery in Lagos cost?</h3>
              <p className="text-sm text-muted-foreground">
                In order to see how much the delivery from Fouani Store Small Appliances costs, you can see the delivery
                fee at the foot of the page. You will also be able to see it in the breakdown of costs before placing
                your order.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

const kitchenAppliances = [
  {
    id: 1,
    name: "MAXI Food Processor 1.5L",
    price: 30000,
    image: "/assets/fouani.png",
  },
  {
    id: 2,
    name: "Air Fryer 5.5L",
    price: 76300,
    image: "/assets/airfryer.jpg",
  },
  {
    id: 2,
    name: "Air Fryer 5.5L",
    price: 76300,
    image: "/assets/coffee.png",
  },
  {
    id: 2,
    name: "Air Fryer 5.5L",
    price: 76300,
    image: "/assets/hisense-ice.png",
  },
  {
    id: 2,
    name: "Air Fryer 5.5L",
    price: 76300,
    image: "/assets/hisfryer.png",
  },
  {
    id: 2,
    name: "Air Fryer 5.5L",
    price: 76300,
    image: "/assets/maxi-airfryer.png",
  },
  {
    id: 2,
    name: "Air Fryer 5.5L",
    price: 76300,
    image: "/assets/maxi-processor.png",
  },
  {
    id: 2,
    name: "Air Fryer 5.5L",
    price: 76300,
    image: "/assets/maxi-induction.png",
  },
  {
    id: 2,
    name: "Air Fryer 5.5L",
    price: 76300,
    image: "/assets/icemaker.jpg",
  },
  {
    id: 2,
    name: "Air Fryer 5.5L",
    price: 76300,
    image: "/assets/maxi-blender.jpg",
  },
  // Add more products as needed
]

const otherElectronics = [
  {
    id: 1,
    name: "MAXI Air Purifier",
    price: 68000,
    image: "/assets/fouani.png",
  },
  {
    id: 2,
    name: "MAXI Pressure Cooker 5.7L",
    price: 89000,
    image: "/assets/maxi-kettle.jpg",
  },
  {
    id: 2,
    name: "MAXI Pressure Cooker 5.7L",
    price: 89000,
    image: "/assets/maxi-pressure.jpg",
  },
  {
    id: 2,
    name: "MAXI Pressure Cooker 5.7L",
    price: 89000,
    image: "/assets/maxi-airpurifier.jpg",
  },
  // Add more products as needed
]

