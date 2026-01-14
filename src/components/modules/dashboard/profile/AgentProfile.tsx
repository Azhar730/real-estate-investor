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
                    <div className="bg-[#2c2a2a] p-6 rounded-lg ">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <Image
                                    src="/nayan-dhali.jpg"
                                    alt="Profile"
                                    height={48}
                                    width={48}
                                    className="rounded-full"
                                />
                                <div>
                                    <h2 className="font-semibold">Nayan Dhali</h2>
                                    <div className="flex items-center gap-4">
                                        <p className="text-sm text-gray-200 bg-gray-500/20 px-3 rounded-full">Agent ID: AGT-00542</p>
                                        <div className="flex space-x-2 mt-1">
                                            <Badge className="bg-emerald-700 text-white"> <Verified /> REGA Verified</Badge>
                                            <Badge className="bg-blue-600 text-white"> <CircleCheckBig /> Natfah Verified</Badge>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={'/vision.svg'}
                                            alt="vision"
                                            height={16}
                                            width={16}
                                        />
                                        <p>REGA Investment Partners</p>
                                    </div>
                                </div>

                            </div>
                            <Button variant={"outline"} className="text-white flex items-center space-x-2 bg-gray-500/20 border-none hover:bg-emerald-700 cursor-pointer">
                                <Edit size={16} /> <span>Edit Profile</span>
                            </Button>
                        </div>
                        <div className="bg-[#434141] p-3 rounded-lg mt-4 flex justify-between text-sm">
                            <div>
                                <p className="text-gray-300">FAL License</p>
                                <p>FAL-RYD-2023-1547</p>
                            </div>
                            <div>
                                <p className="flex justify-end text-gray-300">Expires</p>
                                <p> 2025-12-31</p>
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