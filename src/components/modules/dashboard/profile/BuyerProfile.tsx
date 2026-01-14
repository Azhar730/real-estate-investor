"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GiTrophyCup } from "react-icons/gi";
import { LayoutDashboard, Mail, Lock, Edit, Verified, CircleCheckBig, Trophy } from "lucide-react";
import ProfileOverview from "@/components/modules/dashboard/profile/ProfileOverview";
import ProfileContactInfo from "@/components/modules/dashboard/profile/ProfileContactInfo";
import ProfileSecurity from "@/components/modules/dashboard/profile/ProfileSecurity";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

export default function BuyerProfile() {
    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold">My Profile</h1>
            <p className="text-sm text-gray-300 mb-6">Professional agent profile & verification</p>

            <Tabs defaultValue="overview" className="grid grid-cols-6">
                {/* Left Sidebar Tabs */}
                <TabsList className="flex flex-col bg-[#2c2a2a] p-4 rounded-xl overflow-hidden w-56 min-w-56 h-fit shadow-sm">
                    <TabsTrigger
                        value="overview"
                        className="
                        group relative w-full justify-start gap-3 px-5 py-3.5 text-left
                        data-[state=inactive]:text-gray-400
                        data-[state=active]:bg-emerald-700 data-[state=active]:text-white
                        data-[state=active]:shadow-inner
                        hover:bg-emerald-700/50 transition-colors
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
                                    group relative w-full justify-start gap-3 px-5 py-3.5 text-left
                                    data-[state=inactive]:text-gray-400
                                    data-[state=active]:bg-emerald-700 data-[state=active]:text-white
                                    data-[state=active]:shadow-inner
                                    hover:bg-emerald-700/50 transition-colors
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
                                group relative w-full justify-start gap-3 px-5 py-3.5 text-left
                                data-[state=inactive]:text-gray-400
                                data-[state=active]:bg-emerald-700 data-[state=active]:text-white
                                data-[state=active]:shadow-inner
                                hover:bg-emerald-700/50 transition-colors
                                border-l-4 border-transparent
                                data-[state=active]:border-l-emerald-500
    "
                    >
                        <Lock size={18} className="shrink-0" />
                        <span className="font-medium">Security</span>
                    </TabsTrigger>
                </TabsList>

                {/* Right Content Area */}
                <div className="col-span-5">
                    {/* Common Profile Header - Always Visible */}
                    <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
                        {/* Top Profile Row */}
                        <div className="p-5 md:p-6 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                {/* Profile Photo */}
                                <div className="relative">
                                    <img
                                        src="/nayan-dhali.jpg" // replace with your actual path
                                        alt="Ahmed Al-Mansour"
                                        className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-emerald-500/40"
                                    />
                                    {/* Small camera icon overlay - optional */}
                                    <div className="absolute -bottom-1 -right-1 bg-emerald-900 p-1 rounded-full">
                                        <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold text-white">Ahmed Al-Mansour</h2>

                                    {/* Badges + ID + Location */}
                                    <div className="flex flex-wrap items-center gap-2.5 mt-1.5">
                                        <div className="flex items-center gap-1.5 text-sm">
                                            <span className="text-gray-400">National ID:</span>
                                            <span className="text-gray-200 font-medium">1234567890</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-900/60 text-blue-300 text-xs font-medium rounded-full border border-blue-700/40">
                                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                                </svg>
                                                Nafath Verified
                                            </button>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-center gap-1.5 mt-1 text-sm text-gray-400">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Saudi Arabia</span>
                                    </div>
                                </div>
                            </div>

                            {/* Edit Button */}
                            <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800/70 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                                Edit Profile
                            </button>
                        </div>

                        {/* Golden Visa Progress Section - attached image এর মতো gradient background + trophy + bar */}
                        <div className="bg-linear-to-r from-emerald-800/50 via-teal-950/60 to-yellow-950/40 px-5 md:px-6 py-4 border-t border-gray-800">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2.5">
                                    {/* Replaced GiTrophyCup with lucide-react Trophy */}
                                    <Trophy className="text-yellow-400 font-bold text-lg w-6 h-6" />
                                    <span className="font-medium text-white">Golden Visa Progress</span>
                                </div>
                                <span className="text-yellow-400 font-semibold">87.5%</span>
                            </div>

                            {/* Progress Bar - replaced custom div with Shadcn Progress */}
                            <Progress
                                value={87.5}
                                className="h-3 bg-gray-800/70 rounded-full overflow-hidden [&>div]:bg-linear-to-r [&>div]:from-emerald-500 [&>div]:via-lime-400 [&>div]:to-yellow-400"
                            />

                            {/* Eligibility Message */}
                            <div className="mt-2.5 flex items-center gap-2 text-sm">
                                {/* Re-using Trophy icon for consistency */}
                                <Trophy className="w-4 h-4 text-emerald-300" />
                                <span className="text-emerald-300 font-medium">Golden Visa Eligible!</span>
                            </div>
                        </div>
                    </div>

                    {/* Tab-Specific Content */}
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