import { MenuIcon } from "lucide-react";
import type { FC } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar: FC = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold">EMBS</span>
            </div>

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
            <Button size="default" className="hidden md:inline-flex">
              Register
            </Button>

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
                  className="w-screen -ml-4 mt-0 rounded-none border-0 bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60"
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
