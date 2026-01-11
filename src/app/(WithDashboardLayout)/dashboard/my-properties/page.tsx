"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, MapPin, Users, Upload, TrendingUp, Award, CircleCheckBig, Shield } from "lucide-react";
import Image from "next/image";
import { properties } from "@/data/propertiesData";
import { StatCard } from "@/components/modules/dashboard/StateCard";
import StatBox from "@/components/modules/dashboard/StateBox";
import AddPropertyModal from "@/components/modules/dashboard/modal/AddPropertyModal";
import { useState } from "react";

export default function MyPropertiesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="max-w-full mx-auto space-y-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white">
            Welcome Back, <span className="text-emerald-500">Nayan Dhali</span>
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <div className="text-lg text-gray-300">
              Agent ID: <span className="font-semibold text-white">AGT-00542</span>
            </div>
            <Badge className="bg-emerald-700 hover:bg-emerald-600 px-4 py-1">
              <Shield />
              REGA Verified
            </Badge>
          </div>
        </div>

        {/* Upload Property */}
        <Button
          className="bg-emerald-600 hover:bg-emerald-500 gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          <Upload className="h-4 w-4" />
          Upload Property
        </Button>
        {isModalOpen && (
          <AddPropertyModal onClose={() => setIsModalOpen(false)} />
        )}
      </div>

      {/* Stats Overview */}
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

      {/* My Properties List */}
      <Card className="bg-stone-900/70 border-stone-800 backdrop-blur-sm">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-white mb-6">My Properties</h2>

          <div className="space-y-4">
            {properties.map((property) => (
              <PropertyItem key={property.id} {...property} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


function PropertyItem({
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