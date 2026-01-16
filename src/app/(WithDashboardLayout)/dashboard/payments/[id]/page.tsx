'use client';

import PaymentOverview from '@/components/modules/dashboard/payment/PaymentOverview';
import PaymentMilestones from '@/components/modules/dashboard/payment/PaymentMilestones';
import PropertyDetails from '@/components/modules/dashboard/property/PropertyDetails';

export default function PaymentSchedulePage() {
  return (
    <div className="">
      
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          Off-plan Payment Schedule
        </h1>
        <p className="text-gray-400 mt-1 text-sm sm:text-base">
          Professional agent profile & verification
        </p>
      </div>

      {/* Content Card */}
      <div className="bg-[#434141] rounded-xl p-4 sm:p-6 space-y-6">
        
        {/* Overview */}
        <PaymentOverview />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left */}
          <div className="w-full lg:w-2/3">
            <PaymentMilestones />
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/3">
            <PropertyDetails />
          </div>

        </div>
      </div>
    </div>
  );
}

