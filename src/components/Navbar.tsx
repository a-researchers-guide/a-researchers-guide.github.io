import { MenuIcon } from "lucide-react";
import type { FC } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { REGISTRATION_LINK } from "@/consts/event";

const Navbar: FC = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-end gap-2">
              <div className="">
                <img
                  src="./a_researchers_guide.png"
                  alt="Scholarverse"
                  width={150}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div className="">
                <img
                  src="./EMBS_UoM_Color.png"
                  alt="EMBS Logo"
                  width={80}
                  height={30}
                  className="object-cover saturate-0 invert"
                />
              </div>
            </div>

            <div className="flex gap-10">
              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#speakers"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Speakers
                </a>
                <a
                  href="#venue"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Venue
                </a>
              </div>
              {/* Register Button */}
              <Button size="default" asChild className="hidden md:inline-flex">
                <a href={REGISTRATION_LINK}>Register</a>
              </Button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" aria-label="Toggle menu">
                    <MenuIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-screen -ml-4 mt-4 rounded-none border-0 bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60"
                  sideOffset={0}
                >
                  <div className="container mx-auto px-4 py-4 space-y-2 text-white">
                    <DropdownMenuItem asChild>
                      <a
                        href="#speakers"
                        className="w-full cursor-pointer block px-3 py-3 rounded-md text-base font-medium"
                      >
                        Speakers
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a
                        href="#venue"
                        className="w-full cursor-pointer block px-3 py-3 rounded-md text-base font-medium"
                      >
                        Venue
                      </a>
                    </DropdownMenuItem>
                    <div className="px-3 py-2">
                      <Button size="lg" className="w-full">
                        Register
                      </Button>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
