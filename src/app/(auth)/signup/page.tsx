"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lock, Mail, User, Building2, ShieldCheck, ArrowRight, Eye, EyeOff, Globe, Briefcase } from "lucide-react";
import Image from "next/image";

type FormData = {
    mode: "signin" | "signup";
    role: "buyer" | "agent";
    fullName?: string;
    email: string;
    password: string;
    nationality?: string;
    investmentInterest?: string;
    falLicense?: string;
    regaId?: string;
    agencyName?: string;
    terms?: boolean;
    rememberMe?: boolean;
};

export default function AuthPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [mode, setMode] = useState<"signin" | "signup">("signup");
    const [role, setRole] = useState<"buyer" | "agent">("agent");

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Submitted Data:", data);
        // এখানে API কল করতে পারো
    };

    return (
        <div className="w-full">
            <div className="container mx-auto px-4 lg:px-6 xl:px-10 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-x-12 py-10">

                <Image
                    src={'/signup.jpg'}
                    alt="signup"
                    width={500}
                    height={900}
                    className="hidden lg:block max-w-[380px] xl:max-w-[450px] 2xl:max-w-[500px]"

                />
                <div>
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-linear-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center">
                                <ShieldCheck className="w-7 h-7 text-white" />
                            </div>
                            <h1 className="text-3xl font-light text-white">VisionEstate</h1>
                        </div>
                        <p className="text-gray-300 text-base">
                            Exclusive access to Saudi Arabia's premier properties
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Main Tabs: Sign In / Sign Up — এখানে পরিবর্তন করো */}
                        <Tabs value={mode} onValueChange={(v) => { setMode(v as "signin" | "signup"); reset(); }} className="w-full mb-8">
                            <TabsList className="grid w-full grid-cols-2 h-12 bg-neutral-800 rounded-xl p-1">
                                <TabsTrigger
                                    value="signin"
                                    className="data-[state=active]:bg-emerald-800 data-[state=active]:text-white rounded-lg"
                                >
                                    Sign In
                                </TabsTrigger>
                                <TabsTrigger
                                    value="signup"
                                    className="data-[state=active]:bg-emerald-800 data-[state=active]:text-white rounded-lg"
                                >
                                    Sign Up
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>

                        {/* Role Tabs: Investor/Buyer vs Licensed Agent — এখানে পরিবর্তন করো */}
                        <Tabs value={role} onValueChange={(v) => setRole(v as "buyer" | "agent")} className="w-full">
                            <TabsList className="grid w-full grid-cols-2 bg-gray-100 h-14 rounded-xl p-1">
                                <TabsTrigger
                                    value="buyer"
                                    className="data-[state=active]:bg-emerald-800 data-[state=active]:text-white rounded-lg"
                                >
                                    Investor/Buyer
                                </TabsTrigger>
                                <TabsTrigger
                                    value="agent"
                                    className="data-[state=active]:bg-emerald-800 data-[state=active]:text-white rounded-lg"
                                >
                                    Licensed Agent
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>

                        {/* Conditional Fields Based on Mode + Role */}
                        {mode === "signup" && (
                            <>
                                {/* Full Name - Only in Signup */}
                                <div className="space-y-2">
                                    <Label className="text-white">Full Name</Label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                        <Input
                                            placeholder="Enter your full name"
                                            className="pl-12 bg-transparent border-white/50 text-white placeholder:text-gray-400 rounded-xl h-12"
                                            {...register("fullName", { required: "Full name is required" })}
                                        />
                                    </div>
                                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
                                </div>

                                {/* Buyer Specific Fields */}
                                {role === "buyer" && (
                                    <>
                                        <div className="space-y-2">
                                            <Label className="text-white">Nationality/Residency</Label>
                                            <div className="relative">
                                                <Globe className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                                <Select>
                                                    <SelectTrigger className="pl-12 bg-transparent border-white/50">
                                                        <SelectValue placeholder="Select your Nationality" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="saudi">Saudi Arabia</SelectItem>
                                                        <SelectItem value="gcc">GCC Resident</SelectItem>
                                                        <SelectItem value="international">International</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="text-white">Investment Interest</Label>
                                            <div className="relative">
                                                <Briefcase className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                                <Select>
                                                    <SelectTrigger className="pl-12 bg-transparent border-white/50 text-white rounded-xl h-12">
                                                        <SelectValue placeholder="Select investment type" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="residential">Residential</SelectItem>
                                                        <SelectItem value="commercial">Commercial</SelectItem>
                                                        <SelectItem value="offplan">Off-Plan Projects</SelectItem>
                                                        <SelectItem value="vision2030">Vision 2030 Mega Projects</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Agent Specific Fields */}
                                {role === "agent" && (
                                    <>
                                        <div className="space-y-2">
                                            <Label className="text-white">FAL License Number</Label>
                                            <div className="relative">
                                                <ShieldCheck className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                                <Input placeholder="FAL-KSA-XXXX-XXXX" className="pl-12 bg-transparent border-white/50 text-white placeholder:text-gray-400 rounded-xl h-12" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="text-white">REGA ID</Label>
                                            <div className="relative">
                                                <ShieldCheck className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                                <Input placeholder="REGA-XXXX-XXXX" className="pl-12 bg-transparent border-white/50 text-white placeholder:text-gray-400 rounded-xl h-12" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="text-white">Agency Name</Label>
                                            <div className="relative">
                                                <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                                <Input placeholder="Your real estate firm" className="pl-12 bg-transparent border-white/50 text-white placeholder:text-gray-400 rounded-xl h-12" />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                        )}

                        {/* Email */}
                        <div className="space-y-2">
                            <Label className="text-white">{mode === "signin" ? "Email Address" : "Email Address"}</Label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                <Input
                                    type="email"
                                    placeholder={mode === "signin" ? "Enter your email" : "your@email.com"}
                                    className="pl-12 bg-transparent border-white/50 text-white placeholder:text-gray-400 rounded-xl h-12"
                                    {...register("email", { required: "Email is required" })}
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <Label className="text-white">Password</Label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a strong password"
                                    className="pl-12 pr-12 bg-transparent border-white/50 text-white placeholder:text-gray-400 rounded-xl h-12"
                                    {...register("password", { required: "Password is required" })}
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-3.5 text-gray-400">
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Sign In Extra Options */}
                        {mode === "signin" && (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Checkbox id="remember" />
                                    <label htmlFor="remember" className="text-sm text-white">Remember me</label>
                                </div>
                                <a href="#" className="text-sm text-orange-400 hover:underline">Forgot password?</a>
                            </div>
                        )}

                        {/* Terms - Only in Signup */}
                        {mode === "signup" && (
                            <>
                                <div className="flex items-start gap-3">
                                    <Checkbox id="terms" {...register("terms", { required: "You must agree to the terms" })} />
                                    <label htmlFor="terms" className="text-sm text-white leading-tight">
                                        I agree to the <a href="#" className="text-emerald-600 hover:underline">Terms of Service</a> and <a href="#" className="text-emerald-600 hover:underline">Privacy Policy</a>
                                    </label>
                                </div>
                                {errors.terms && <p className="text-red-500 text-sm">{errors.terms.message}</p>}
                            </>
                        )}

                        {/* Security Card */}
                        <Card className="bg-neutral-800 border-0 p-6">
                            <div className="flex gap-4">
                                <ShieldCheck className="w-8 h-8 text-emerald-600 mt-1" />
                                <div>
                                    <p className="text-white text-sm mb-2">Your data is protected with:</p>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• 256-bit SSL Encryption</li>
                                        <li>• Two-Factor Authentication (2FA)</li>
                                        <li>• REGA Authority Verification</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        {/* Submit Button */}
                        <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 h-12 text-base">
                            {mode === "signin" ? "Sign In" : "Create Account"}
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>

                        {/* Divider */}
                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-neutral-500"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-stone-950 px-4 text-gray-400">
                                    {mode === "signin" ? "Or continue with" : "Or sign up with"}
                                </span>
                            </div>
                        </div>

                        {/* Nafath SSO */}
                        <Button variant="outline" className="w-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white h-12">
                            <ShieldCheck className="mr-3 w-5 h-5" />
                            Nafath - Saudi Single Sign-On
                            {mode === "signin" && <span className="ml-2 bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded">Recommended</span>}
                        </Button>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 text-center text-sm text-gray-400">
                        <p>Protected by advanced security measures</p>
                        <p className="mt-1">© 2025 VisionEstate. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}