import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Upload from "antd/es/upload/Upload";
import { CarFront, CircleCheckBig, Dock, DockIcon, DollarSign, FileText, Mail, Phone, UploadIcon } from "lucide-react";
import { BsPassport } from "react-icons/bs";

export default function BuyerProfileKYCDocuments() {
    return (
        <div>
            <div className="bg-[#2c2a2a] p-4 rounded-lg mt-4">
                <h3 className="text-lg font-semibold mb-2">KYC Documents</h3>
                <div className="flex items-center space-x-2 bg-[#383636] p-3 rounded justify-between">
                    <div className="flex items-center gap-1">
                        <FileText size={16} className="text-emerald-500" />
                        <span>National Id</span>
                    </div>
                    <div className="flex items-center text-sm rounded-full gap-1 bg-green-600 px-2 py-0.5">
                        <CircleCheckBig size={12} className="" />
                        Verified
                    </div>
                </div>

                <div className="flex items-center space-x-2 bg-[#383636] p-3 rounded mt-4 justify-between">
                    <div className="flex items-center gap-1">
                        <BsPassport size={16} className="text-emerald-500" />
                        <span>Passport</span>
                    </div>
                    <div className="flex items-center text-sm rounded-full gap-1 bg-green-600 px-2 py-0.5">
                        <CircleCheckBig size={12} className="" />
                        Verified
                    </div>
                </div>
                <div className="flex items-center space-x-2 bg-[#383636] p-3 rounded mt-4 justify-between">
                    <div className="flex items-center gap-1">
                        <CarFront size={16} className="text-emerald-500" />
                        <span>Driving License</span>
                    </div>
                    <div className="flex items-center text-sm rounded-full gap-1 bg-green-600 px-2 py-0.5">
                        <CircleCheckBig size={12} className="" />
                        Verified
                    </div>
                </div>
                <div className="flex items-center space-x-2 bg-[#383636] p-3 rounded mt-4 justify-between">
                    <div className="flex items-center gap-1">
                        <DollarSign size={16} className="text-emerald-500" />
                        <span>Proof of Funds</span>
                    </div>
                    <div className="flex items-center text-sm rounded-full gap-1 bg-yellow-600 px-2 py-0.5">
                        Pending Verification
                    </div>
                </div>
                <div className="bg-[#383636] p-3 rounded mt-4">
                    <div className="flex items-center space-x-2  justify-between">
                        <div className="flex items-center gap-1">
                            <FileText size={16} className="text-emerald-500" />
                            <span>Bank Statement</span>
                        </div>
                        <div className="flex items-center text-sm rounded-full gap-1 bg-gray-600 px-2 py-0.5">
                            Not Uploaded
                        </div>
                    </div>
                        <Button className="bg-emerald-800 w-full mt-2"> <UploadIcon/> Upload Document</Button>
                    <div className="">
                    </div>
                </div>

            </div>
        </div>
    );
}