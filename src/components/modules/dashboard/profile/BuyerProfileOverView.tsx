import { CircleCheckBig, Mail, Phone } from "lucide-react";

export default function BuyerProfileOverview() {
  return (
    <div>
      {/* Performance Statistics */}
      <div className="bg-[#2c2a2a] p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Buyer Performance Statistics</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-200/20 p-3 rounded">
            <p className="text-sm text-gray-400">Properties Viewed</p>
            <p className="text-2xl font-bold">45</p>
          </div>
          <div className="bg-gray-200/20 p-3 rounded">
            <p className="text-sm text-gray-400">Properties Saved</p>
            <p className="text-2xl font-bold text-emerald-600">8</p>
          </div>
          <div className="bg-gray-200/20 p-3 rounded">
            <p className="text-sm text-gray-400">Properties Owned</p>
            <p className="text-2xl font-bold">2</p>
          </div>
        </div>
      </div>

      {/* Specialization & Bio */}
      <div className="bg-[#2c2a2a] p-4 rounded-lg mt-4">
        <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
        <div className="flex items-center space-x-2 bg-[#383636] p-3 rounded justify-between">
          <div className="flex items-center gap-1">
            <Phone size={16} className="text-emerald-500" />
            <span>+966 55 123 4567</span>
          </div>
          <CircleCheckBig size={16} className="text-emerald-500" />
        </div>

        <div className="flex items-center space-x-2 bg-[#383636] p-3 rounded mt-4 justify-between">
          <div className="flex items-center gap-1">
            <Mail size={16} className="text-emerald-500" />
          <span>fatima.alrashid@rega-investment.sa</span>
          </div>
          <CircleCheckBig size={16} className="text-emerald-500" />
        </div>
      </div>
    </div>
  );
}