'use client';

import PaymentOverview from '@/components/modules/dashboard/payment/PaymentOverview';
import PaymentMilestones from '@/components/modules/dashboard/payment/PaymentMilestones';
import PropertyDetails from '@/components/modules/dashboard/property/PropertyDetails';

export default function PaymentSchedulePage() {
    return (
        <div>
            <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-semibold">Off-plan Payment Schedule</h1>
                    <p className="text-gray-400 mt-1">Professional agent profile & verification</p>
                </div>

            <div className="bg-[#434141] mt-5 rounded-xl">
            <PaymentOverview />
            <div className="flex">
                <PaymentMilestones />
                <PropertyDetails />
            </div>
        </div>
        </div>
    );
}
