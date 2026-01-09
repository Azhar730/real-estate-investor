"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { toast } from "sonner";

export default function VerifyOTPClient() {
    const router = useRouter();
    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const pendingEmail = localStorage.getItem("pendingEmail") || "unknown@email.com";


    // OTP ইনপুট হ্যান্ডল করা
    const handleChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, index: number) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData("text").replace(/\D/g, "");
        if (pasteData.length > 0) {
            const newOtp = [...otp];
            for (let i = 0; i < pasteData.length && index + i < 6; i++) {
                newOtp[index + i] = pasteData[i];
            }
            setOtp(newOtp);
            const nextFocus = Math.min(index + pasteData.length, 5);
            inputRefs.current[nextFocus]?.focus();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredOtp = otp.join("");
        if (enteredOtp === "123456") {
            const userKey = `user_${pendingEmail}`;
            const user = JSON.parse(localStorage.getItem(userKey) || "{}");
            user.verified = true;
            localStorage.setItem(userKey, JSON.stringify(user));
            localStorage.removeItem("pendingEmail");

            if (user.verified) {
                router.push("/");
                toast.success("Login successfull!")
            } else {
                router.push("/login");
                toast.success("Verification successfull!")
            }
        } else {
            toast.error("Wrong OTP Try -- 123456")
        }
    };

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            <div className="relative hidden md:block">
                <Image
                    src="/signup.jpg"
                    alt="Saudi Vision 2030 Mega Projects"
                    fill
                    className="object-cover brightness-[0.85]"
                    priority
                    quality={85}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/45 to-transparent" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center text-white">
                    <p className="mb-4 text-lg font-medium tracking-wider text-orange-400 uppercase">
                        Investment Starts Here
                    </p>

                    <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                        The Future of Saudi
                        <br />
                        <span className="text-orange-400">Investment</span>
                        <br />
                        Starts Here
                    </h1>

                    <p className="mb-10 max-w-3xl text-lg text-gray-200">
                        Access exclusive <strong>Vision 2030</strong> mega-projects through a trusted,
                        <br className="hidden sm:inline" />
                        REGA-verified platform built for discerning investors and licensed professionals.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="flex items-center gap-3 rounded-full bg-white/15 px-6 py-3 backdrop-blur-md border border-white/10">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-800">
                                <ShieldCheck className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-sm font-semibold">Secured by 256-bit Encryption</span>
                        </div>

                        <div className="flex items-center gap-3 rounded-full bg-white/15 px-6 py-3 backdrop-blur-md border border-white/10">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-800">
                                <ShieldCheck className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-sm font-semibold">Verified by REGA Authority</span>
                        </div>
                    </div>
                </div>
            </div>

            {/*  OTP  */}
            <div className="flex items-center justify-center p-6 md:p-12 bg-neutral-950">
                <div className="w-full max-w-md space-y-8">
                    {/* Logo+title */}
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-800">
                                <Image src="/vision.svg" alt="VisionEstate" width={32} height={32} />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-white">Enter Your OTP</h2>
                        <p className="mt-3 text-gray-400">
                            A 6-digit code has been sent to <br />
                            <span className="text-white font-medium">{pendingEmail}</span>
                        </p>
                    </div>

                    {/* OTP input field */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex justify-center gap-3 md:gap-4">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    onPaste={(e) => handlePaste(e, index)}
                                    ref={(el) => {
                                        inputRefs.current[index] = el;
                                    }}
                                    className="h-14 w-14 text-center text-2xl font-bold bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                                />
                            ))}
                        </div>

                        {/* verify button */}
                        <Button
                            type="submit"
                            className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 text-base"
                            disabled={otp.join("").length !== 6}
                        >
                            Verify
                        </Button>

                        {/* resend option */}
                        <div className="text-center text-sm text-gray-400">
                            Didn&apos;t receive the code?{" "}
                            <button
                                type="button"
                                className="text-emerald-400 hover:underline"
                                onClick={() => console.log("Resend OTP requested")}
                            >
                                Resend Code
                            </button>
                        </div>
                    </form>

                    {/* footer */}
                    <div className="text-center text-xs text-gray-500 mt-8">
                        <p>Protected by advanced security measures</p>
                        <p className="mt-1">© 2025 VisionEstate. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}