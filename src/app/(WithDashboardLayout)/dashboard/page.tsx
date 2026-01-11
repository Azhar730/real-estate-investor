"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, MapPin, Users, TrendingUp } from "lucide-react";
import Image from "next/image";
import { StatCard } from "@/components/modules/dashboard/StateCard";

export default function DashboardHomePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-full mx-auto space-y-10">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white">
              Welcome Back, <span className="text-emerald-500">Nayan Dhali</span>
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <Badge variant="outline" className="text-emerald-400 border-emerald-600 bg-emerald-950/50">
                Agent ID: AGT-00542
              </Badge>
              <Badge className="bg-emerald-700 hover:bg-emerald-600">
                <span className="mr-1.5">○</span> REGA Verified
              </Badge>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Listings"
            value="8"
            icon={<Users className="h-6 w-6 text-emerald-500" />}
          />
          <StatCard
            title="Active Listings"
            value="6"
            icon={<TrendingUp className="h-6 w-6 text-emerald-500" />}
          />
          <StatCard
            title="Total Leads"
            value="24"
            icon={<Users className="h-6 w-6 text-emerald-500" />}
          />
          <StatCard
            title="Conversion Rate"
            value="18.5%"
            icon={<TrendingUp className="h-6 w-6 text-emerald-500" />}
          />
        </div>

        {/* Property Performance Section */}
        <Card className="bg-stone-900/70 border-stone-800 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Property Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <PropertyCard
                key={index}
                status={index === 0 ? "Active" : index === 1 ? "Pending" : "Sold Out"}
                price="SAR 4,200,000"
                title="Elite 3BR Villa - Al Malqa"
                views={342}
                interactions={89}
                leads={7}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Stat Card Component


// Property Performance Card Component
function PropertyCard({
  title,
  price,
  status,
  views,
  interactions,
  leads,
}: {
  title: string;
  price: string;
  status: "Active" | "Pending" | "Sold Out";
  views: number;
  interactions: number;
  leads: number;
}) {
  const statusColor = {
    Active: "bg-emerald-700 text-white",
    Pending: "bg-amber-600 text-white",
    "Sold Out": "bg-red-700 text-white",
  }[status];

  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-stone-950/50 border border-stone-800 rounded-xl p-4 hover:border-emerald-800 transition-colors">
      {/* Property Image */}
      <div className="relative w-full sm:w-48 h-36 sm:h-32 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src="/br-villa.png"
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-emerald-400 font-medium">{price}</p>
          </div>
          <Badge className={`${statusColor} px-4 py-1 text-xs`}>{status}</Badge>
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-gray-400" />
            <span>{views} Views</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gray-400" />
            <span>{interactions} Map Interactions</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-gray-400" />
            <span>{leads} Leads</span>
          </div>
        </div>
      </div>
    </div>
  );
}