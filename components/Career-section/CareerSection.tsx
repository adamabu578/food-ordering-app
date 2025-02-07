import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CareerSection() {
  return (
    <div className="min-h-screen bg-[#e8f7f3]">
      {/* Top wave decoration */}
      <div className="relative w-full h-32">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            // backgroundImage:
            //   "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'%3E%3C/path%3E%3C/svg%3E\")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 pb-20">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 mx-auto mb-8">
            <Image
              src="/assets/hands.svg"
              alt="Handshake icon"
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Let&apos;s do it together</h1>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Rider Card */}
          <Card className="border-none shadow-lg bg-white">
            <CardHeader className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-8 border-[#00a082]">
                <Image
                  src="/assets/rider.png"
                  alt="Delivery rider"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-2xl mt-6">Become a rider</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6">
              <p className="text-gray-600">
                Enjoy flexibility, freedom and competitive earnings by delivering through Glovo.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center pb-8">
              <Button className="bg-[#00a082] hover:bg-[#008068] text-white rounded-full px-8">Register here</Button>
            </CardFooter>
          </Card>

          {/* Partner Card */}
          <Card className="border-none shadow-lg bg-white">
            <CardHeader className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-8 border-[#00a082]">
                <Image
                  src="/assets/partners.png"
                  alt="Restaurant partner"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-2xl mt-6">Become a partner</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6">
              <p className="text-gray-600">
                Grow with Glovo! Our technology and user base can help you boost sales and unlock new opportunities!
              </p>
            </CardContent>
            <CardFooter className="flex justify-center pb-8">
              <Button className="bg-[#00a082] hover:bg-[#008068] text-white rounded-full px-8">Register here</Button>
            </CardFooter>
          </Card>

          {/* Careers Card */}
          <Card className="border-none shadow-lg bg-white">
            <CardHeader className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-8 border-[#00a082]">
                <Image
                  src="/assets/career.png"
                  alt="Career opportunities"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-2xl mt-6">Careers</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6">
              <p className="text-gray-600">
                Ready for an exciting new challenge? If you&apos;re ambitious, humble, and love working with others,
                then we want to hear from you!
              </p>
            </CardContent>
            <CardFooter className="flex justify-center pb-8">
              <Button className="bg-[#00a082] hover:bg-[#008068] text-white rounded-full px-8">Register here</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="relative w-full h-32 mt-20">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            // backgroundImage:
            //   "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23000000' fill-opacity='1' d='M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </div>
    </div>
  )
}

