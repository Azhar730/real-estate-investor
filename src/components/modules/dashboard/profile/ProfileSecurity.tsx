import { Button } from "@/components/ui/button";
import { Check, Shield, Calendar, Lock, CircleCheckBig } from "lucide-react";

export default function ProfileSecurity() {
  return (
    <div className="bg-[#2c2a2a] p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center bg-[#434141] p-4 rounded-md">
          <div className="flex items-center space-x-2 ">
            <Lock size={18} className="text-emerald-600" />
            <span>Two-Factor Authentication</span>
          </div>
          <Button variant="default" className="bg-emerald-600 hover:bg-emerald-700 text-white">Enabled</Button>
        </div>
        
        <div className="flex justify-between items-center bg-[#434141] p-4 rounded-md">
          <div className="flex items-center space-x-2">
            <Shield size={18} className="text-blue-400" />
            <span>Natfah Verification</span>
          </div>
          <div className="flex items-center space-x-2 text-emerald-500">
            <span>Connected & Verified</span>
            <CircleCheckBig size={16} />
          </div>
        </div>

        <div className="flex justify-between items-center bg-[#434141] p-4 rounded-md">
          <div className="flex items-center space-x-2">
            <Calendar size={18} className="text-emerald-600" />
            <span>Last Login</span>
          </div>
          <span className="text-gray-300">2024-12-27 09:30</span>
        </div>
        
        <div className="flex justify-center items-center">
          <Button className="text-white bg-[#434141] hover:bg-emerald-600 w-full">Change Password</Button>
        </div>
      </div>
    </div>
  );
}