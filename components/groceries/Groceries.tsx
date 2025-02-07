import { Search, Clock, ThumbsUp, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function GroceryDelivery() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-[#00A082] text-2xl font-bold">
            Glovo
          </Link>

          <div className="flex items-center gap-2 text-sm">
            <Truck className="h-4 w-4" />
            <span>Delivering to</span>
            <span className="font-semibold">Alhaji Bashiru Street, 11</span>
          </div>

          <Button variant="default" className="bg-[#00A082] hover:bg-[#008068]">
            Login
          </Button>
        </div>
      </header>

      {/* Search Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="text" placeholder="What can we get you?" className="pl-10 w-full" />
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4">
        <nav className="text-sm mb-6">
          <Link href="/lagos" className="text-muted-foreground hover:text-foreground">
            Lagos
          </Link>
          <span className="mx-2">›</span>
          <span className="font-medium">Groceries</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 hidden md:block">
            <div className="mb-8">
              <h2 className="font-semibold mb-4">Sort by</h2>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Clock className="mr-2 h-4 w-4" />
                  Near me
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Ratings
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Truck className="mr-2 h-4 w-4" />
                  Delivery fee
                </Button>
              </div>
            </div>

            <div>
              <h2 className="font-semibold mb-4">Popular filters</h2>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  Alcohol
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Local Market
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Supermarket
                </Button>
              </div>
            </div>
          </aside>

          {/* Store Grid */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-6">Groceries delivery in Lagos</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Store Card 1 */}
              <div className="rounded-lg overflow-hidden border bg-card">
                <div className="relative h-48">
                  <Image
                    src="/assets/mile2.jpg"
                    alt="Mile 12 Market"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-white rounded-full px-2 py-1 text-sm">★ -</div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">Mile12Market Woman</h3>
                      <p className="text-sm text-muted-foreground">Local Market</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Truck className="h-4 w-4 mr-1" />
                    <span>NGN 3,500.00 • 45-55 min</span>
                  </div>
                </div>
              </div>

              {/* Store Card 2 */}
              <div className="rounded-lg overflow-hidden border bg-card">
                <div className="relative h-48">
                  <Image
                    src="/assets/spar-img.png"
                    alt="SPAR Market"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-white rounded-full px-2 py-1 text-sm">★ 86% (500+)</div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">SPAR Market</h3>
                      <p className="text-sm text-muted-foreground">Supermarket</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Truck className="h-4 w-4 mr-1" />
                    <span>NGN 1,500.00 • 80-90 min</span>
                  </div>
                </div>
              </div>

              {/* Store Card 3 */}
              <div className="rounded-lg overflow-hidden border bg-card">
                <div className="relative h-48">
                  <Image
                    src="/assets/liquor.png"
                    alt="Naija Liquors"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-white rounded-full px-2 py-1 text-sm">★ 99% (63)</div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">Naija Liquors</h3>
                      <p className="text-sm text-muted-foreground">Alcohol</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Truck className="h-4 w-4 mr-1" />
                    <span>NGN 890.00 • 70-80 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

