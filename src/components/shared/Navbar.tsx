"use client";
import { useEffect, useRef, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { BiLogOut } from "react-icons/bi";
import { toast } from "sonner";
import { LogOut, Pill, ShoppingCart, User } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Input } from "../ui/input";


const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpened, setIsNavOpened] = useState(false);
  const isLoggedIn= false

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsNavOpened(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
const handleLogout =()=>{
    console.log("Logged out")
}
  return (
    <nav
      className={cn(
        "flex justify-between items-center py-4 md:py-8 mx-auto z-100 bg-[#868686] opacity-60 fixed top-0 w-full md:h-[100px] text-white",
        {
          "bg-blue-900 shadow-md":
            isScrolled || (pathName !== "/" && pathName !== "/about"),
        }
      )}
    >
      <div className="w-[90%] md:w-[88%] mx-auto flex justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-x-2 text-xl font-semibold text-blue-400">
          <h1>Sakk</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12 font-questrial text-[14px] font-normal bg-[#181316] px-12 py-3 rounded-full transition-transform duration-300">
          <Input type="email" placeholder="Email" />
        </div>
        {/* Desktop User/Login */}
        <div className="hidden lg:flex items-center gap-8">
          {!isLoggedIn ? (
            <Link
              href="/login"
              className="text-para hover:text-primary transition-all duration-300"
            >
              Login
            </Link>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 p-1 cursor-pointer rounded-full transition-colors"
              >
                <User className="w-6 h-6" />
                <MdKeyboardArrowDown className="h-5 w-5 text-gray-600" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg py-4 z-20">
                  <div className="flex items-center gap-3 mx-3">
                    <Avatar size="large" icon={<UserOutlined />} />
                    <h3 className="font-medium text-black">Azhar Mahmud</h3>
                  </div>
                  <button
                    onClick={() => router.push("/dashboard/my-profile")}
                    className="w-full flex items-center hover:bg-blue-50 gap-3 px-4 py-2 mt-2 text-sm text-black"
                  >
                    <FiUser className="h-4 w-4 text-main" />
                    My Profile
                  </button>
                  <button
                    onClick={() => router.push("/dashboard")}
                    className="w-full flex items-center hover:bg-blue-50 gap-3 px-4 py-2 text-sm text-black"
                  >
                    <RxDashboard className="h-4 w-4 text-main" />
                    Dashboard
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center hover:bg-blue-50 gap-3 px-4 py-2 text-sm text-black"
                  >
                    <BiLogOut className="h-4 w-4 text-main" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
          <Link href="cart" className="relative">
            <ShoppingCart className="cursor-pointer text-2xl" />
            <span className="absolute -top-2 -right-5 bg-red-500 text-white text-xs px-1.5 rounded-full">
              3
            </span>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex lg:hidden items-center">
          {isNavOpened ? (
            <IoClose
              className="text-primary"
              onClick={() => setIsNavOpened(false)}
              size={32}
            />
          ) : (
            <IoMenu
              className="text-primary"
              onClick={() => setIsNavOpened(true)}
              size={32}
            />
          )}
        </div>

        {/* Mobile Menu Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed top-0 left-0 h-screen bg-gray-800 shadow-lg z-40 transform transition-all duration-500 ease-in-out ${
            isNavOpened ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ width: "70%" }}
        >
          <div className="flex flex-col items-start gap-6 px-6 py-5">
            <div className="flex items-center justify-between w-full">
              <Link href="/" className="font-semibold text-white text-xl">
                Medi Mart
              </Link>
              <Link href="cart" className="relative">
                <ShoppingCart className="cursor-pointer text-2xl" />
                <span className="absolute -top-2 -right-5 bg-red-500 text-white text-xs px-1.5 rounded-full">
                  3
                </span>
              </Link>
            </div>
            <div className="mt-2 md:mt-8 flex flex-col gap-4">
              <Input type="email" placeholder="Email" />
              {!isLoggedIn ? (
                <Link href="/login" className="w-full text-white">
                  Login
                </Link>
              ) : (
                <div className="flex flex-col gap-4">
                  <Link href="/dashboard" className="w-full text-white">
                    Dashboard
                  </Link>
                  <Link href="cart" className="relative">
                    <ShoppingCart className="cursor-pointer text-2xl" />
                    <span className="absolute -top-2 right-20 bg-red-500 text-white text-xs px-1.5 rounded-full">
                      3
                    </span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center px-4 py-3 text-sm rounded-lg bg-gray-100 text-gray-700 hover:bg-blue-50 w-full"
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;