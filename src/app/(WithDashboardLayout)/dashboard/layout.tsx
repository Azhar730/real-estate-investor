"use client";

import { ReactNode } from "react";

import { outfit } from "@/app/(WithCommonLayout)/layout";


const DashboardLayout = ({ children }: { children: ReactNode }) => {

  return (
    <div>
      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Page Content */}
        <div className={outfit.variable}>
          <main className="py-4 px-6 lg:px-8 mt-16">
            {children}
          </main>
        </div>
      </div>

    </div>
  );
};

export default DashboardLayout;