"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Mail, Lock, Edit, Verified, CircleCheckBig } from "lucide-react";
import ProfileOverview from "@/components/modules/dashboard/profile/ProfileOverview";
import ProfileContactInfo from "@/components/modules/dashboard/profile/ProfileContactInfo";
import ProfileSecurity from "@/components/modules/dashboard/profile/ProfileSecurity";
import Image from "next/image";

export default function AgentProfile() {
  return (
    <div className="px-2 sm:px-4">
      <h1 className="text-xl font-semibold">My Profile</h1>
      <p className="text-sm text-gray-300 mb-6">
        Professional agent profile & verification
      </p>

      <Tabs
        defaultValue="overview"
        className="flex flex-col lg:grid lg:grid-cols-6 gap-6"
      >
        {/* Left Sidebar Tabs */}
        <TabsList
          className="
            flex lg:flex-col
            bg-[#2c2a2a]
            p-4
            rounded-xl
            overflow-x-auto lg:overflow-hidden
            w-full lg:w-56 lg:min-w-56
            h-fit
            shadow-sm
            gap-1
          "
        >
          <TabsTrigger
            value="overview"
            className="
              group relative
              w-full
              justify-start
              gap-3
              px-5 py-3.5
              text-left
              whitespace-nowrap
              data-[state=inactive]:text-gray-400
              data-[state=active]:bg-emerald-700
              data-[state=active]:text-white
              data-[state=active]:shadow-inner
              hover:bg-emerald-700/50
              transition-colors
              border-l-4 border-transparent
              data-[state=active]:border-l-emerald-500
            "
          >
            <LayoutDashboard size={18} className="shrink-0" />
            <span className="font-medium">Overview</span>
          </TabsTrigger>

          <TabsTrigger
            value="contact"
            className="
              group relative
              w-full
              justify-start
              gap-3
              px-5 py-3.5
              text-left
              whitespace-nowrap
              data-[state=inactive]:text-gray-400
              data-[state=active]:bg-emerald-700
              data-[state=active]:text-white
              data-[state=active]:shadow-inner
              hover:bg-emerald-700/50
              transition-colors
              border-l-4 border-transparent
              data-[state=active]:border-l-emerald-500
            "
          >
            <Mail size={18} className="shrink-0" />
            <span className="font-medium">Contact Info</span>
          </TabsTrigger>

          <TabsTrigger
            value="security"
            className="
              group relative
              w-full
              justify-start
              gap-3
              px-5 py-3.5
              text-left
              whitespace-nowrap
              data-[state=inactive]:text-gray-400
              data-[state=active]:bg-emerald-700
              data-[state=active]:text-white
              data-[state=active]:shadow-inner
              hover:bg-emerald-700/50
              transition-colors
              border-l-4 border-transparent
              data-[state=active]:border-l-emerald-500
            "
          >
            <Lock size={18} className="shrink-0" />
            <span className="font-medium">Security</span>
          </TabsTrigger>
        </TabsList>

        {/* Right Content Area */}
        <div className="lg:col-span-5 w-full">
          {/* Common Profile Header */}
          <div className="bg-[#2c2a2a] p-6 rounded-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src="/nayan-dhali.jpg"
                    alt="Ahmed Al-Mansour"
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-emerald-900 p-1 rounded-full">
                    <svg
                      className="w-4 h-4 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <h2 className="font-semibold">Nayan Dhali</h2>

                  <div className="flex flex-wrap gap-2 mt-1">
                    <p className="text-sm text-gray-200 bg-gray-500/20 px-3 rounded-full">
                      Agent ID: AGT-00542
                    </p>
                    <Badge className="bg-emerald-700 text-white">
                      <Verified /> REGA Verified
                    </Badge>
                    <Badge className="bg-blue-600 text-white">
                      <CircleCheckBig /> Natfah Verified
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <Image src="/vision.svg" alt="vision" height={16} width={16} />
                    <p>REGA Investment Partners</p>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                className="text-white flex items-center space-x-2 bg-gray-500/20 border-none hover:bg-emerald-700"
              >
                <Edit size={16} />
                <span>Edit Profile</span>
              </Button>
            </div>

            <div className="bg-[#434141] p-3 rounded-lg mt-4 flex flex-col sm:flex-row justify-between text-sm gap-2">
              <div>
                <p className="text-gray-300">FAL License</p>
                <p>FAL-RYD-2023-1547</p>
              </div>
              <div className="sm:text-right">
                <p className="text-gray-300">Expires</p>
                <p>2025-12-31</p>
              </div>
            </div>
          </div>

          {/* Tab Contents */}
          <TabsContent value="overview" className="mt-6">
            <ProfileOverview />
          </TabsContent>
          <TabsContent value="contact" className="mt-6">
            <ProfileContactInfo />
          </TabsContent>
          <TabsContent value="security" className="mt-6">
            <ProfileSecurity />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
