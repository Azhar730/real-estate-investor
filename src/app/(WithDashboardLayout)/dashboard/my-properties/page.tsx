"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {  Users, Upload, TrendingUp, Shield } from "lucide-react";
import { properties } from "@/data/propertiesData";
import { StatCard } from "@/components/modules/dashboard/StateCard";
import AddPropertyModal from "@/components/modules/dashboard/modal/AddPropertyModal";
import { useState } from "react";
import { PropertyItem } from "@/components/PropertyItem";

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


