"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Home,
  Settings,
  BarChart3,
  User,
  Users,
  LogOut,
  BriefcaseMedical,
  User2,
  LucideMove,
  Heart,
  Banknote,
} from "lucide-react";
import { IoAdd } from "react-icons/io5";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { AnimatePresence, motion } from "framer-motion";
import { user } from "@/data/user";


const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);


  const handleLogout = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log out!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("accessToken");
        router.push("/login");
        toast.success("Logged out successfully");
        Swal.fire("Successful!", "You have been logged out.", "success");
      }
    });
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        dropdownRef.current && !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems =
    user?.role === "agent"
      ? [
        { icon: Home, text: "Dashboard", path: "/dashboard" },
        { icon: BarChart3, text: "My Properties", path: "/dashboard/my-properties" },
        { icon: Settings, text: "Messages", path: "/dashboard/message" },
        { icon: User, text: "Profile & Settings", path: "/dashboard/profile-settings" },
        { icon: User, text: "Payments", path: "/dashboard/payments" },
      ]
      : [
        { icon: Home, text: "Dashboard", path: "/dashboard" },
        { icon: User, text: "Profile & Settings", path: "/dashboard/profile-settings" },
        { icon: Settings, text: "Messages", path: "/dashboard/message" },
        { icon: Heart, text: "Save", path: "/dashboard/save" },
        { icon: Banknote, text: "Payments", path: "/dashboard/save" },

      ];

  return (
    <div>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#252525] border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <Link
            href="/"
            className="flex items-center gap-x-2 text-xl font-semibold text-emerald-400"
          >
            <h1>Sakk</h1>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-md lg:hidden hover:bg-emerald-500"
          >
            <X className="w-5 h-5 text-emerald-500" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {menuItems.map((item, index) => {
            const isActive =
              item.path === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.path);

            return (
              <Link
                key={index}
                href={item.path}
                className={`flex items-center px-4 py-3 text-sm rounded-lg transition-all duration-300 ${isActive
                  ? "bg-emerald-800 text-white"
                  : "text-white hover:bg-emerald-800 hover:text-white"
                  }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.text}
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-4 fixed bottom-2 w-full">
          <button
            onClick={handleLogout}
            className="flex cursor-pointer items-center px-4 py-3 text-sm rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 w-full"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Navigation */}
        <header className="fixed top-0 right-0 left-0 lg:left-64 bg-[#252525] border-b z-40">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-md lg:hidden hover:bg-emerald-500"
            >
              <Menu className="w-5 h-5 text-gray-500" />
            </button>

            {/* Right Section */}
            <div className="ml-auto flex items-center gap-4 relative" ref={dropdownRef}>

              {/* Profile Dropdown */}
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center gap-2 px-2 py-1 hover:bg-emerald-700 rounded-full transition"
              >
                <User2 />
              </button>
              <AnimatePresence>
                {isProfileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-14 w-60 bg-white border border-gray-200 rounded-xl shadow-xl z-50"
                  >
                    <div className="p-4 border-b">
                      <p className="text-sm font-semibold">{"User Name"}</p>
                      <p className="text-xs text-gray-500">{"user@email.com"}</p>
                    </div>
                    <div className="py-2">
                      <Link
                        href="/dashboard/my-profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        My Profile
                      </Link>
                      <Link
                        href="/dashboard/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        Logout
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="py-4 px-6 lg:px-2 mt-12 bg-[#0D0D0D]">{children}</main>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;