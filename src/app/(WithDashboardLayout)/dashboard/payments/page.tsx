"use client";

import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { paymentData } from "@/data/paymentData";
import Link from "next/link";

export default function PaymentSchedulePage() {
    return (
        <div className="text-gray-100">
            <div className="max-w-full mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-semibold">Off-plan Payment Schedule</h1>
                    <p className="text-gray-400 mt-1">Professional agent profile & verification</p>
                </div>

                {/* Payment Cards */}
                <Link href={'/dashboard/payments/1'} className="flex flex-col gap-4">
                    {paymentData.map((item, index) => (
                        <Card
                            key={index}
                            className="bg-[#434141]"
                        >
                            <CardContent className="px-4">
                                {/* Left - Image */}
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        height={40}
                                        width={80}
                                        className="rounded-md"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <span className="text-sm font-medium text-gray-300">
                                            ID: {item.id}
                                        </span>
                                    </div>
                                </div>

                                {/* Right - Payment Info */}
                                <div className="flex-1 p-4 flex flex-col justify-between">
                                    <div>

                                            <div>
                                                <div className="flex justify-between text-sm">
                                                    <p className="text-gray-400">Transfer Your Vault Account</p>
                                                    <div>
                                                        <p className="flex justify-end text-gray-300">Total Paid</p>
                                                        <p className="font-semibold text-lg text-yellow-400">
                                                        SAR {item.paid.toLocaleString()}
                                                        <span className="text-gray-400 text-sm">/SAR {item.total}</span>
                                                    </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="ml-2">{item.percentage}%</p>
                                            <Progress
                                                value={item.percentage}
                                                className="h-5 bg-[#8ABBA2] *:bg-[#006C35]"
                                            />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </Link>
            </div>
        </div>
    );
}