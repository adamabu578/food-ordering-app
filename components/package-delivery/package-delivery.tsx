import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function WelcomeDialog() {
  return (
    <Dialog defaultOpen>
      <DialogContent className="sm:max-w-[425px]">
        <Button variant="ghost" size="icon" className="absolute right-4 top-4" >
          <X className="h-4 w-4" />
        </Button>

        <div className="space-y-6 py-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Welcome</h2>
            <p className="text-muted-foreground">Let's start with your phone number</p>
          </div>

          <div className="flex gap-2">
            <Select defaultValue="NG">
              <SelectTrigger className="w-[110px]">
                <SelectValue placeholder="Prefix" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="NG">NG+234</SelectItem>
                {/* Add more country codes as needed */}
              </SelectContent>
            </Select>
            <Input type="tel" placeholder="Phone number" className="flex-1" />
          </div>

          <div className="grid gap-4">
            <Button variant="outline" className="bg-[#F4FBF9] text-[#00A082] hover:bg-[#E5F7F3]">
              SMS
            </Button>
            <Button className="bg-[#00A082] hover:bg-[#008F73]">WhatsApp</Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">or with</span>
            </div>
          </div>

          <div className="grid gap-4">
            <Button variant="outline" className="gap-2">
              <img src="/assets/Google.png" alt="Google" className="h-5 w-5" />
              Google
            </Button>
            <Button variant="outline" className="gap-2">
              <img src="/assets/Facebook.png" alt="Facebook" className="h-5 w-5" />
              Facebook
            </Button>
            <Button variant="outline" className="gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            By creating an account, you automatically accept our{" "}
            <a href="#" className="underline">
              Terms of service
            </a>
            ,{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Cookies Policy
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

