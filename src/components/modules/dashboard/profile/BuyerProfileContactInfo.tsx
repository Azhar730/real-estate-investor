import { Mail, Phone, Building, CircleCheckBig } from "lucide-react";

export default function BuyerProfileContactInfo() {
  return (
    <div className="bg-[#2c2a2a] p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Buyer Contact Info</h3>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-300 mb-1">Phone Number</p>
          <div className="flex items-center space-x-2 bg-[#434141] p-3 rounded">
            <Phone size={16} className="text-emerald-500" />
            <span>+966 55 123 4567</span>
            <CircleCheckBig size={16} className="text-emerald-500" />
          </div>
        </div>
        
        <div>
          <p className="text-sm text-gray-300 mb-1">Email Address</p>
          <div className="flex items-center space-x-2 bg-[#434141] p-3 rounded">
            <Mail size={16} className="text-emerald-500" />
            <span>fatima.alrashid@rega-investment.sa</span>
            <CircleCheckBig size={16} className="text-emerald-500" />
          </div>
        </div>
        
        <div>
          <p className="text-sm text-gray-300 mb-1">Company/Agency</p>
          <div className="flex items-center space-x-2 bg-[#434141] p-3 rounded">
            <Building size={16} className="text-emerald-500" />
            <span>REGA Investment Partners</span>
          </div>
        </div>
      </div>
    </div>
  );
}