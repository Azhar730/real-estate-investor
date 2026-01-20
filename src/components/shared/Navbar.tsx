"use client";

import { useEffect, useRef, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Input } from "../ui/input";
import Image from "next/image";
import { Button } from "../ui/button";
import { toast } from "sonner";
import {
  MapPin,
  DollarSign,
  TrendingUp,
  Search,
  MapPinned,
  ShoppingCart,
} from "lucide-react";

// Category Buttons Data
const CATEGORY_BUTTONS = [
  { name: "All Properties", type: "primary" },
  { name: "Golden Visa", type: "secondary", icon: "/golden-visa.svg" },
  { name: "High Yield", type: "secondary", icon: "/high-yeld.svg" },
  { name: "Giga-Projects", type: "secondary", icon: "/giga-projects.svg" },
  { name: "KAFD Elite", type: "secondary", icon: "/kafd-elite.svg" },
];

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpened, setIsNavOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const isLoggedIn = false;

  // Scroll effect for shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside for dropdown & sidebar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setIsDropdownOpen(false);
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node))
        setIsNavOpened(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
    toast.success("Logout successful!");
  };

  // Desktop & Mobile Search (responsive)
  const SearchBar = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div
      className={cn(
        "flex items-center gap-3 bg-zinc-950/90 backdrop-blur-md rounded-full border border-white/10 px-3 py-2 transition-all",
        isMobile ? "w-full" : "w-full max-w-6xl",
        !isMobile && "hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] shadow-[0_15px_50px_rgba(0,0,0,0.6)]"
      )}
    >
      {/* Location */}
      <div className="flex items-center gap-2 flex-1 min-w-20 border-r border-zinc-700 pr-2">
        <MapPin className="w-4 h-4 text-emerald-400" />
        <Input
          type="text"
          placeholder="City, District, or Mega Project"
          className="border-0 bg-transparent text-sm text-white placeholder-zinc-500 focus-visible:ring-0 w-full"
        />
      </div>

      {/* Investment Goal (hide on small mobile) */}
      {!isMobile && (
        <div className="flex items-center gap-2 flex-1 border-r border-zinc-700 px-2">
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <Input
            type="text"
            placeholder="Rental income, capital growth, residency"
            className="border-0 bg-transparent text-sm text-white placeholder-zinc-500 focus-visible:ring-0 w-full"
          />
        </div>
      )}

      {/* Budget */}
      <div className="flex items-center gap-2 shrink-0 px-2">
        <DollarSign className="w-4 h-4 text-emerald-400" />
        <Input
          type="text"
          defaultValue="10.0M"
          className="border-0 bg-transparent text-sm text-white placeholder-zinc-500 focus-visible:ring-0 w-20"
        />
      </div>

      {/* Search Button */}
      <Button size="icon" className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-400 to-emerald-700 hover:from-emerald-500 hover:to-emerald-800">
        <Search className="w-4 h-4 text-white stroke-2" />
      </Button>
    </div>
  );

  // Category Pills
  const CategoryPills = () => (
    <div className="flex justify-center items-center gap-3 flex-wrap px-2 py-2">
      {CATEGORY_BUTTONS.map((cat, i) => (
        <Button
          key={i}
          variant={cat.type === "secondary" ? "secondary" : "default"}
          className={cn(
            "px-4 py-2.5 rounded-3xl text-sm md:text-base flex items-center gap-2",
            cat.type === "primary"
              ? "bg-linear-to-b from-green-400 to-green-800 text-white hover:from-green-600 hover:to-green-900"
              : "bg-zinc-700 text-white border border-neutral-400/50"
          )}
        >
          {cat.icon && <Image alt={cat.name} src={cat.icon} height={16} width={16} />}
          {cat.name}
        </Button>
      ))}
    </div>
  );

  return (
    <>
      {/* Navbar */}
      <nav
        className={cn(
          "top-0 left-0 right-0 z-50 bg-neutral-800 border-b border-zinc-500 flex flex-col items-center py-4 md:py-6 transition-all duration-300",
          { "backdrop-blur-md shadow-md": isScrolled || pathName !== "/" }
        )}
      >
        <div className="w-full max-w-full px-4 md:px-20 flex flex-col gap-4">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image alt="sakk" src="/sakk.png" width={100} height={100} className="h-14 md:h-24 w-auto" />
            </Link>

            {/* Desktop Search */}
            <div className="hidden md:flex flex-1 justify-center">
              <SearchBar />
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-6">
              {/* <Button variant="outline" className="h-9 px-3 rounded-[10px] border-white/10 text-gray-400 hover:bg-white/5">
                <MapPinned className="w-4 h-4 mr-2" />
                Location
              </Button> */}

              {!isLoggedIn ? (
                <Link href="/login" className="text-red-400 border border-red-400 px-4 py-1 rounded text-sm font-normal hover:text-red-300 transition">
                  Sign In
                </Link>
              ) : (
                <div className="relative" ref={dropdownRef}>
                  <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 p-1 rounded-full">
                    <FiUser className="w-5 h-5 text-white" />
                    <MdKeyboardArrowDown className="h-5 w-5 text-gray-400" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg py-4 z-20">
                      <div className="flex items-center gap-3 mx-3">
                        <Avatar size="large" icon={<UserOutlined />} />
                        <h3 className="font-medium text-black">Azhar Mahmud</h3>
                      </div>
                      <button onClick={() => router.push("/dashboard")} className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100">
                        <RxDashboard className="w-4 h-4 text-main" /> Dashboard
                      </button>
                      <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100">
                        <BiLogOut className="w-4 h-4 text-main" /> Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Hamburger */}
            <div className="flex lg:hidden">
              {isNavOpened ? (
                <IoClose className="text-white" onClick={() => setIsNavOpened(false)} size={28} />
              ) : (
                <IoMenu className="text-white" onClick={() => setIsNavOpened(true)} size={28} />
              )}
            </div>
          </div>

          {/* Category Pills */}
          <CategoryPills />

          {/* Mobile Search Bar */}
          <div className="md:hidden w-full px-2">
            <SearchBar isMobile />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={cn(
          "fixed top-0 left-0 h-screen w-[80%] max-w-xs bg-emerald-900 shadow-2xl z-40 transform transition-transform duration-500 ease-in-out",
          isNavOpened ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full text-white">
          <div className="flex items-center justify-between p-6 border-b border-zinc-700">
            <Link href="/" className="shrink-0">
              <Image alt="sakk" src="/sakk.png" width={100} height={100} className="h-14 md:h-24 w-auto" />
            </Link>
            <IoClose className="text-white" onClick={() => setIsNavOpened(false)} size={28} />
          </div>

          {/* Sidebar Content mirrors desktop */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {/* <Button variant="outline" className="w-full justify-start border-white/10 text-gray-300">
              <MapPinned className="w-5 h-5 mr-3" /> Location
            </Button> */}
            {!isLoggedIn ? (
              <Link href="/login" className="block w-full text-center py-3 text-red-400 border border-red-400 rounded-lg hover:bg-red-400/10">
                Sign In
              </Link>
            ) : (
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 py-2"><FiUser className="w-5 h-5" /> My Profile</button>
                <button className="w-full flex items-center gap-3 py-2"><RxDashboard className="w-5 h-5" /> Dashboard</button>
                <button onClick={handleLogout} className="w-full flex items-center gap-3 py-2 text-red-400"><BiLogOut className="w-5 h-5" /> Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isNavOpened && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsNavOpened(false)} />}
    </>
  );
};

export default Navbar;
