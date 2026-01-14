import Image from "next/image";
import { Badge } from "./ui/badge";
import { Award, CircleCheckBig } from "lucide-react";
import StatBox from "./modules/dashboard/StateBox";

export function PropertyItem({
  title,
  price,
  status,
  visaEligible,
  highYield,
  gigaProject,
  views,
  interactions,
  leads,
  sakNumber,
  listedDate,
  verification,
  image,
}: {
  title: string;
  price: string;
  status: string;
  visaEligible?: boolean;
  highYield?: boolean;
  gigaProject?: boolean;
  views: number;
  interactions: number;
  leads: number;
  sakNumber: string;
  listedDate: string;
  verification: string;
  image: string;
}) {
  const statusColor = {
    Active: "bg-emerald-700 text-white",
    Pending: "bg-amber-600 text-white",
  }[status] || "bg-gray-700 text-white";

  return (
    <div className="border rounded-xl bg-[#3D3D3D]/60 p-4 hover:border-emerald-800 transition-colors">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src={image} alt={title} height={40} width={90} className="object-cover rounded-md" />
            <div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="text-emerald-400 font-medium mt-1">{price}</p>
            </div>
          </div>
          <Badge className={`${statusColor} px-4 py-1`}>{status}</Badge>
        </div>
        {visaEligible && (
          <Badge variant="secondary" className="bg-amber-600/80 text-amber-100">
            <Award />
            Golden Visa Eligible
          </Badge>
        )}
        <div className="flex flex-wrap gap-2">


          {highYield && (
            <Badge variant="secondary" className="bg-emerald-800/80 text-emerald-50">
              High Yield
            </Badge>
          )}
          {gigaProject && (
            <Badge variant="secondary" className="bg-purple-700/80 text-purple-100">
              Giga-Projects
            </Badge>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatBox label="Views" value={views} />
          <StatBox label="Map Interactions" value={interactions} />
          <StatBox label="Leads" value={leads} highlight />
          <StatBox label="Sak Number" value={sakNumber} />
        </div>

        {/* Footer Info */}
        <div className="flex flex-wrap justify-between items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-x-2">
            <div className="flex items-center gap-x-2">
              <div
                className={`flex items-center gap-x-1 ${verification === "REGA Verified" ? "text-emerald-400" : "text-yellow-400"
                  }`}
              >
                <CircleCheckBig />
                {verification}
              </div>
            </div>
            <div>
              Listed: {listedDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}