"use client";
import { useEffect, useRef, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { BiLogOut } from "react-icons/bi";
import { DollarSign, MapPin, Search, ShoppingCart, User, MapPinned, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Input } from "../ui/input";
import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpened, setIsNavOpened] = useState(false);
  const isLoggedIn = true;

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsNavOpened(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    console.log("Logged out");
  };

  return (
      <>
      <nav
        className={cn(
          "top-0 left-0 right-0 z-50 bg-neutral-800 border-b border-zinc-500 max-w-full mx-auto",
          "flex flex-col items-center py-4 md:py-6 lg:py-8",
          {
            "backdrop-blur-md shadow-md": isScrolled || (pathName !== "/" && pathName !== "/about"),
          }
        )}
      >
        <div className="w-full px-4 md:px-8 lg:w-[88%] max-w-7xl mx-auto flex flex-col gap-6 md:gap-8">
          {/* ===== টপ রো: লোগো + সার্চ বার + রাইট সাইড ===== */}
          <div className="flex items-center justify-between gap-4">
            {/* লোগো */}
            <Link href="/" className="shrink-0">
              <Image
                alt="sakk"
                src="/sakk.png"
                height={109}
                width={100}
                className="h-20 w-auto md:h-24 lg:h-28" // মোবাইলে ছোট, ডেস্কটপে বড়
              />
            </Link>

            {/* সার্চ বার - মোবাইলে হাইড, ট্যাবলেট+ দেখাবে */}
            <div className="hidden md:flex flex-1 max-w-5xl">
              <div className="h-16 px-6 bg-gray-950 rounded-full shadow-2xl border border-white/10 flex items-center gap-4 w-full">
                {/* Where */}
                <div className="h-full py-4 flex items-center border-r border-zinc-500 pr-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 stroke-[1.5]" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 font-normal">Where</span>
                      <Input
                        type="text"
                        placeholder="City, District, or Giga-project"
                        className="border-0 bg-transparent p-0 h-auto text-sm text-gray-400 placeholder-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 w-48 lg:w-64"
                      />
                    </div>
                  </div>
                </div>

                {/* Goal */}
                <div className="flex-1 h-full py-4 flex items-center border-r border-zinc-500 px-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-5 text-gray-400 stroke-[1.5]" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 font-normal">Goal</span>
                      <Input
                        type="text"
                        placeholder=""
                        className="border-0 bg-transparent p-0 h-auto text-sm text-gray-400 placeholder-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Budget */}
                <div className="h-full py-4 flex items-center px-4">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-gray-400 stroke-[1.5]" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 font-normal">Budget (SAR)</span>
                      <Input
                        type="text"
                        defaultValue="10.0M"
                        className="border-0 bg-transparent p-0 h-auto text-sm text-white font-normal focus-visible:ring-0 focus-visible:ring-offset-0 w-20"
                      />
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <Button
                  size="icon"
                  className="w-12 h-12 rounded-full bg-linear-to-b from-green-400 to-green-800 hover:from-green-600 hover:to-green-900 shadow-lg"
                >
                  <Search className="w-5 h-5 text-white stroke-2" />
                </Button>
              </div>
            </div>

            {/* রাইট সাইড: Location + Sign In (ডেস্কটপ) */}
            <div className="hidden lg:flex items-center gap-6">
              <Button variant="outline" className="h-9 px-3 rounded-[10px] border-white/10 bg-transparent text-gray-400 hover:bg-white/5">
                <MapPinned className="w-4 h-4 mr-2" />
                Location
              </Button>

              {!isLoggedIn ? (
                <Link href="/login" className="text-red-400 text-sm font-normal hover:text-red-300 transition">
                  Sign In
                </Link>
              ) : (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 p-1 cursor-pointer rounded-full transition-colors"
                  >
                    <User className="w-6 h-6 text-white" />
                    <MdKeyboardArrowDown className="h-5 w-5 text-gray-400" />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg py-4 z-20">
                      <div className="flex items-center gap-3 mx-3">
                        <Avatar size="large" icon={<UserOutlined />} />
                        <h3 className="font-medium text-black">Azhar Mahmud</h3>
                      </div>
                      <button onClick={() => router.push("/dashboard/my-profile")} className="w-full flex items-center hover:bg-blue-50 gap-3 px-4 py-2 mt-2 text-sm text-black">
                        <FiUser className="h-4 w-4 text-main" /> My Profile
                      </button>
                      <button onClick={() => router.push("/dashboard")} className="w-full flex items-center hover:bg-blue-50 gap-3 px-4 py-2 text-sm text-black">
                        <RxDashboard className="h-4 w-4 text-main" /> Dashboard
                      </button>
                      <button onClick={handleLogout} className="w-full flex items-center hover:bg-blue-50 gap-3 px-4 py-2 text-sm text-black">
                        <BiLogOut className="h-4 w-4 text-main" /> Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* মোবাইল টগল বাটন */}
            <div className="flex lg:hidden">
              {isNavOpened ? (
                <IoClose className="text-white" onClick={() => setIsNavOpened(false)} size={32} />
              ) : (
                <IoMenu className="text-white" onClick={() => setIsNavOpened(true)} size={32} />
              )}
            </div>
          </div>

          {/* ===== ক্যাটাগরি পিলস (সব ডিভাইসে দেখাবে) ===== */}
          <div className="flex justify-center items-center gap-3 flex-wrap px-2">
            <Button className="px-4 py-2.5 bg-linear-to-b from-green-400 to-green-800 rounded-3xl text-white text-sm md:text-base hover:from-green-600 hover:to-green-900">
              All Properties
            </Button>

            <Button variant="secondary" className="px-4 py-2.5 bg-zinc-700 rounded-3xl text-white border border-neutral-400/50 flex items-center gap-2 text-sm md:text-base">
              <Image alt="golden-visa" src="/golden-visa.svg" height={20} width={16} />
              Golden Visa
            </Button>

            <Button variant="secondary" className="px-4 py-2.5 bg-zinc-700 rounded-3xl text-white border border-neutral-400/50 flex items-center gap-2 text-sm md:text-base">
              <Image alt="high-yield" src="/high-yeld.svg" height={20} width={16} />
              High Yield
            </Button>

            <Button variant="secondary" className="px-4 py-2.5 bg-zinc-700 rounded-3xl text-white border border-neutral-400/50 flex items-center gap-2 text-sm md:text-base">
              <Image alt="giga-projects" src="/giga-projects.svg" height={20} width={12} />
              Giga-Projects
            </Button>

            <Button variant="secondary" className="px-4 py-2.5 bg-zinc-700 rounded-3xl text-white border border-neutral-400/50 flex items-center gap-2 text-sm md:text-base">
              <Image alt="kafd-elite" src="/kafd-elite.svg" height={20} width={16} />
              KAFD Elite
            </Button>
          </div>

          {/* ===== মোবাইলে সার্চ বার (যখন মেনু ওপেন থাকবে) ===== */}
          <div className={cn("md:hidden w-full transition-all duration-300", isNavOpened ? "block" : "hidden")}>
            <div className="h-16 px-4 bg-gray-950 rounded-full shadow-2xl border border-white/10 flex items-center gap-3">
              <Search className="w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search properties..."
                className="border-0 bg-transparent p-0 h-auto text-sm text-gray-300 placeholder-gray-500 focus-visible:ring-0 flex-1"
              />
              <Button size="icon" className="w-10 h-10 rounded-full bg-linear-to-b from-emerald-500 to-emerald-900">
                <Search className="w-4 h-4 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* ===== মোবাইল সাইডবার মেনু ===== */}
      <div
        ref={sidebarRef}
        className={cn(
          "fixed top-0 left-0 h-screen w-[75%] max-w-sm bg-gray-900 shadow-2xl z-40 transform transition-transform duration-500 ease-in-out",
          isNavOpened ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full text-white">
          <div className="flex items-center justify-between p-6 border-b border-zinc-700">
            <Link href="/" className="text-2xl font-bold">Sakk</Link>
            <IoClose className="text-white" onClick={() => setIsNavOpened(false)} size={32} />
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Location & Sign In মোবাইলে এখানে */}
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start border-white/10 text-gray-300">
                <MapPinned className="w-5 h-5 mr-3" />
                Location
              </Button>

              {!isLoggedIn ? (
                <Link href="/login" className="block w-full text-center py-3 text-red-400 border border-red-400/30 rounded-lg hover:bg-red-400/10">
                  Sign In
                </Link>
              ) : (
                <div className="space-y-3">
                  <button className="w-full text-left flex items-center gap-3 py-2">
                    <FiUser className="w-5 h-5" /> My Profile
                  </button>
                  <button className="w-full text-left flex items-center gap-3 py-2">
                    <RxDashboard className="w-5 h-5" /> Dashboard
                  </button>
                  <button onClick={handleLogout} className="w-full text-left flex items-center gap-3 py-2 text-red-400">
                    <BiLogOut className="w-5 h-5" /> Logout
                  </button>
                </div>
              )}
            </div>

            <div className="pt-6">
              <Link href="/cart" className="flex items-center gap-3">
                <ShoppingCart className="w-6 h-6" />
                <span>Cart</span>
                <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ওভারলে যখন মোবাইল মেনু ওপেন */}
      {isNavOpened && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsNavOpened(false)}
        />
      )}
    </>
  );
};

export default Navbar;