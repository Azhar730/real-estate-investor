"use client";
import PropertyMap from "@/components/main/PropertyMap";
import Banner from "@/components/modules/home/Banner";
import DeveloperProjects from "@/components/modules/home/DeveloperProjects";
import FeaturedProperties from "@/components/modules/home/FeaturedProperties";
import Footer from "@/components/modules/home/Footer";
import GigaProjects from "@/components/modules/home/GigaProjects";
import Services from "@/components/modules/home/Services";
import Subscribe from "@/components/modules/home/Subscribe";
import Verify from "@/components/modules/home/Verify";
import Navbar from "@/components/shared/Navbar";
import { propertyData } from "@/data/propertyData";
import { useState } from "react";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Properties");

  // ফিল্টার করা প্রপার্টি
  const filteredProperties =
    selectedCategory === "All Properties"
      ? propertyData
      : propertyData.filter(
          (property) => property.category === selectedCategory,
        );
  return (
    <div className="">
      <Navbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Banner
      selectedCategory={selectedCategory}
      properties={filteredProperties} />
      <Services />
      <FeaturedProperties />
      <GigaProjects />
      <DeveloperProjects />
      <Verify />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default HomePage;
