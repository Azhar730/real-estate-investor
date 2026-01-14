import React from 'react';
import { Check, Clock, Lock, Calendar, FileText, Download, Upload } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PaymentMilestones = () => {
  const milestones = [
    {
      id: 1,
      status: 'completed',
      title: 'Booking Deposit (10%)',
      amount: '10% • SAR 400,000',
      condition: 'Condition: On Request',
      paidDate: '2024-11-15',
      verifiedBy: 'Verified By: Admin - Ahmad Al Saud',
      verifiedDate: '2024-11-16',
      showReceipt: true,
    },
    {
      id: 2,
      status: 'completed',
      title: '20% Construction Completion',
      amount: '20% • SAR 800,000',
      condition: 'Condition: 20% Work Completion',
      paidDate: '2025-01-10',
      verifiedBy: 'Verified By: Admin - Ahmad Al Saud',
      verifiedDate: '2025-01-11',
      showReceipt: true,
    },
    {
      id: 3,
      status: 'pending',
      title: '40% Construction Completion',
      amount: '30% • SAR 1,200,000',
      condition: 'Condition: 40% Required',
      dueDate: '2025-06-30',
      showUpload: true,
    },
    {
      id: 4,
      status: 'upcoming',
      title: '60% Construction Completion',
      amount: '20% • SAR 800,000',
      condition: 'Condition: 60% Required',
      dueDate: '2025-10-15',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="w-5 h-5 text-white" />
          </div>
        );
      case 'pending':
        return (
          <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
            <Clock className="w-5 h-5 text-white" />
          </div>
        );
      case 'upcoming':
        return (
          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
            <Lock className="w-5 h-5 text-white" />
          </div>
        );
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-600 hover:bg-green-700">Completed</Badge>;
      case 'pending':
        return (
          <Badge className="bg-yellow-600 hover:bg-yellow-700">Pending - Action Required</Badge>
        );
      case 'upcoming':
        return <Badge className="bg-blue-600 hover:bg-blue-700">Upcoming</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen  mt-6  p-6">
      <div className=" ">
        <h1 className="text-2xl font-bold text-white mb-6">Payment Milestones</h1>

        <div className="relative">
          <div className="space-y-6">
            {milestones.map(milestone => (
              <div key={milestone.id} className="relative pl-16 min-w-4xl">
                {/* Status icon */}
                <div
                  className="absolute left-4 top-0 bottom-0 w-0.5 mt-8 mb-8"
                  style={{
                    background:
                      'linear-gradient(to top, transparent 0%, #e7dcdc22 70%, #ffffff55 50%, #fafafa22 20%, transparent 100%)',
                  }}
                ></div>

                <div className="absolute left-0 top-6">{getStatusIcon(milestone.status)}</div>

                <Card className="bg-[#1E1E1E] border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{milestone.title}</h3>
                        <p className="text-sm text-gray-400 mb-1">{milestone.amount}</p>
                        <p className="text-xs text-gray-500">{milestone.condition}</p>
                      </div>
                      {getStatusBadge(milestone.status)}
                    </div>

                    {milestone.paidDate && (
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Paid on {milestone.paidDate}</span>
                      </div>
                    )}

                    {milestone.verifiedBy && (
                      <div className="flex items-center text-sm text-green-500 mb-4">
                        <Check className="w-4 h-4 mr-2" />
                        <span>{milestone.verifiedBy}</span>
                      </div>
                    )}

                    {milestone.verifiedDate && (
                      <div className="text-xs text-gray-500 mb-4">{milestone.verifiedDate}</div>
                    )}

                    {milestone.dueDate && (
                      <div className="flex items-center text-sm text-gray-400 mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Due Date: {milestone.dueDate}</span>
                      </div>
                    )}

                    {milestone.showReceipt && (
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="flex items-center gap-2 border-gray-600 text-gray-300 hover:bg-gray-700"
                        >
                          <FileText className="w-4 h-4" />
                          View Receipt
                        </Button>
                        <Button
                          variant="outline"
                          className="flex items-center gap-2 border-gray-600 text-gray-300 hover:bg-gray-700"
                        >
                          <Download className="w-4 h-4" />
                          Download Receipt
                        </Button>
                      </div>
                    )}

                    {milestone.showUpload && (
                      <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                        <Upload className="w-4 h-4" />
                        Upload Receipt
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMilestones;
