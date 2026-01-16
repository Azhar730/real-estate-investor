"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lock, Mail, User, Building2, ShieldCheck, ArrowRight, Eye, EyeOff, Globe, Briefcase } from "lucide-react";
import Image from "next/image";
import { LicenseInput } from "@/components/modules/auth/LicenseInput";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

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

function LoginPAge() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [mode, setMode] = useState<"signin" | "signup">("signup");
    const [role, setRole] = useState<"buyer" | "agent">("agent");

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<FormData>({
    defaultValues: { mode, role },
  });

  useEffect(() => {
    reset({ ...watch(), mode, role });
  }, [mode, role, reset, watch]);

    const onSubmit = (data: FormData) => {
        console.log("Submitted Data:", data);
        if (mode === "signup") {
      const user = {
        ...data,
        verified: false,
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem(`user_${data.email}`, JSON.stringify(user));
      localStorage.setItem("pendingEmail", data.email);
      toast.success("User register successfull!")
      router.push("/verify-otp");
    } else {
      // Sign In
      const savedUser = localStorage.getItem(`user_${data.email}`);
      if (savedUser) {
        const user = JSON.parse(savedUser);
        if (user.password === data.password) {
          if (user.verified) {
            localStorage.setItem("currentUser", data.email);
            router.push("/");
            toast.success("User Login successfull!")
          } else {
            localStorage.setItem("pendingEmail", data.email);
            router.push("/verify-otp");
          }
        } else {
          toast.error("Wrong Password!");
        }
      } else {
        toast.error("User doesn't exists!");
      }
    }
    };
    return (<>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 p-4">
            <div className="relative h-full overflow-hidden rounded-2xl">
                {/* Background Image*/}
                <Image
                    src="/signup.jpg"
                    alt="Saudi Vision 2030 Mega Projects Luxury Architecture"
                    fill
                    className="object-cover brightness-[0.85]"
                    priority
                    quality={85}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/45 to-transparent" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
                    {/* Small tagline */}
                    <p className="mb-4 text-lg font-medium tracking-wider text-orange-400 uppercase md:text-xl">
                        Investment Starts Here
                    </p>

                    {/* Main Heading */}
                    <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                        The Future of Saudi
                        <br className="sm:hidden" />
                        <span className="text-orange-400"> Investment</span>
                        <br />
                        Starts Here
                    </h1>

                    {/* Description */}
                    <p className="mb-4 max-w-3xl text-base leading-relaxed text-gray-200 md:text-lg lg:text-xl">
                        Access exclusive <strong>Vision 2030</strong> mega-projects through a trusted,
                        <br className="hidden sm:inline" />
                        REGA-verified platform built for discerning investors and licensed professionals.
                    </p>

                    {/* Security Badges - glassmorphism + shadcn-like style */}
                    <div className="flex flex-col gap-4 md:flex-row sm:gap-6">
                        <div className="flex items-center gap-3 rounded-full bg-white/15 px-6 py-3 backdrop-blur-md border border-white/10 shadow-sm">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-800">
                                <Image
                                    src={'/verify.svg'}
                                    alt="derify"
                                    height={20}
                                    width={20}
                                />
                            </div>
                            <span className="text-sm font-semibold md:text-base">
                                Secured by 256-bit Encryption
                            </span>
                        </div>

                        <div className="flex items-center gap-3 rounded-full bg-white/15 px-6 py-3 backdrop-blur-md border border-white/10 shadow-sm">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-800">
                                <Image
                                    src={'/verify-2.svg'}
                                    alt="derify"
                                    height={20}
                                    width={20}
                                />
                            </div>
                            <span className="text-sm font-semibold md:text-base">
                                Verified by REGA Authority
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 border p-4 rounded-2xl">
                <div>
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-800">
                                <Image
                                    src={'/vision.svg'}
                                    alt="derify"
                                    height={20}
                                    width={20}
                                />
                            </div>
                            <h1 className="text-3xl font-light text-white">VisionEstate</h1>
                        </div>
                        <p className="text-gray-300 text-base">
                            Exclusive access to Saudi Arabia's premier properties
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Main Tabs: Sign In / Sign Up*/}
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

                        {/* Role Tabs: Investor/Buyer vs Licensed Agent */}
                        <Tabs value={role} onValueChange={(v) => setRole(v as "buyer" | "agent")} className="w-full">
                            <TabsList className="grid w-full grid-cols-2 bg-neutral-800 h-14 rounded-xl p-1">
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

                        {/*Sign Up + Licensed Agent */}
                        {mode === "signup" && role === "agent" && (
                            <div className="mt-3 flex items-center justify-center gap-2 text-sm text-emerald-400/90">
                                <ShieldCheck className="h-4 w-4" />
                                <span>REGA verification required for licensed agents</span>
                            </div>
                        )}

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
                                        <div className="space-y-2 w-full">
                                            <Label className="text-white">Nationality/Residency</Label>

                                            <div className="relative w-full">
                                                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                                                <Select>
                                                    <SelectTrigger className="w-full pl-12 bg-transparent border-white/50 text-white rounded-xl h-12">
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

                                        <div className="space-y-2 w-full">
                                            <Label className="text-white">Investment Interest</Label>

                                            <div className="relative w-full">
                                                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                                                <Select>
                                                    <SelectTrigger className="w-full pl-12 bg-transparent border-white/50 text-white rounded-xl h-12">
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
                                        {/* FAL License Number*/}
                                        <LicenseInput
                                            label="FAL License Number"
                                            placeholder="FAL-KSA-XXXX-XXXX"
                                            register={register("falLicense", {
                                                required: "FAL License Number is required",
                                            })}
                                            error={errors.falLicense?.message}
                                            icon={
                                                <ShieldCheck className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                            }
                                        />

                                        {/* REGA ID */}
                                        <LicenseInput
                                            label="REGA ID"
                                            placeholder="REGA-XXXX-XXXX"
                                            register={register("regaId", {
                                                required: "REGA ID is required",
                                            })}
                                            error={errors.regaId?.message}
                                            icon={
                                                <ShieldCheck className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                            }
                                        />
                                        <div className="space-y-2">
                                            <Label className="text-white">Agency Name</Label>
                                            <div className="relative">
                                                <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                                <Input
                                                    placeholder="Your real estate firm"
                                                    className="pl-12 bg-transparent border-white/50 text-white placeholder:text-gray-400 rounded-xl h-12"
                                                />
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
                                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
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
                                <Lock className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
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
                                    <Checkbox id="remember" className="text-emerald-700" />
                                    <label htmlFor="remember" className="text-sm text-white">Remember me</label>
                                </div>
                                <Link href="/forgot-password" className="text-sm text-orange-400 hover:underline">Forgot password?</Link>
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
                                <span className="bg-emerald-950 rounded-xl px-4 text-white/80">
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
    </>);
}

export default LoginPAge;