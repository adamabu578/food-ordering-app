"use client"

import { ShoppingCart } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function Cart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="fixed right-4 top-20 z-50">
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your order</SheetTitle>
        </SheetHeader>
        <div className="mt-8 text-center">
          <div className="mb-4">
            <Image
              src="/assets/biggs.png"
              alt="Empty cart"
              width={150}
              height={150}
              className="mx-auto opacity-50"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            You've not added any products yet. When you do, you'll see them here!
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}

