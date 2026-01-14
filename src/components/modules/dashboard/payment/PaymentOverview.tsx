import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, DollarSign, Hammer } from 'lucide-react';
import Image from 'next/image';
import { paymentData } from '@/data/paymentData';

export default function PaymentOverview() {
    return (
        <div className="w-full  space-y-6">
            {/* Header */}
            {paymentData.slice(0, 1).map((item, index) => (
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

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
                {/* Total Price */}
                <Card>
                    <CardContent className="p-5 space-y-1">
                        <p className=" flex items-center ">
                            {' '}
                            <DollarSign size={16} /> <span className="text-lg"> Total Price</span>
                        </p>
                        <p className="text-lg font-semibold">SAR 4,200,000</p>
                    </CardContent>
                </Card>

                {/* Verified Payments */}
                <Card className="border-[#006C35] bg-[#434141] border-2">
                    <CardContent className="p-5 space-y-2">
                        <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle size={18} className="text-[#006C35]" />
                            <p className="text-lg text-white">Verified Payments</p>
                        </div>
                        <p className="text-lg font-semibold text-[#006C35]">1/7</p>
                    </CardContent>
                </Card>

                {/* Pending Review */}
                <Card className="border-[#FFD700] border-2  bg-[#504C37]">
                    <CardContent className="p-5 space-y-2">
                        <div className="flex items-center gap-2 text-[#FFD700]">
                            <Clock size={18} />
                            <p className="text-lg text-white">Pending Review</p>
                        </div>
                        <p className="text-lg font-semibold text-[#FFD700]">1</p>
                    </CardContent>
                </Card>

                {/* Construction Progress */}
                <Card className="">
                    <CardContent className="p-5 space-y-2">
                        <div className="flex items-center gap-2 text-emerald-600">
                            <Hammer size={18} />
                            <p className="text-lg text-white">Construction Progress</p>
                        </div>
                        <p className="text-lg font-semibold">10%</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
