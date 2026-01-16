import { Lock, Calendar, FileText, Download, Upload, CircleAlert, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { milestones } from '@/data/milestoneData';

const PaymentMilestones = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <Image
            src="/verified-badge.svg"
            alt="verified svg"
            width={45}
            height={45}
          />
        );
      case 'pending':
        return (
          <div className="w-8 h-8 rounded-full bg-yellow-500 shadow-2xl flex items-center justify-center">
            <CircleAlert className="w-5 h-5 text-black" />
          </div>
        );
      case 'upcoming':
        return (
          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center p-2">
            <Lock className="w-5 h-5 text-gray-300" />
          </div>
        );
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-emerald-400/20 hover:bg-emerald-400/40">Completed</Badge>;
      case 'pending':
        return (
          <Badge className="bg-yellow-400/15 hover:bg-yellow-400/20 text-yellow-400 flex items-center gap-1">
            <CircleAlert className="w-3 h-3" /> Pending Your Review
          </Badge>
        );
      case 'upcoming':
        return <Badge className="bg-blue-600/60 hover:bg-blue-700">Upcoming</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="mt-6 px-2 sm:px-4 lg:px-6">
      <h1 className="text-2xl font-bold text-white mb-6">Payment Milestones</h1>

      <div className="relative space-y-6">
        {milestones.map((milestone) => (
          <div
            key={milestone.id}
            className="relative pl-12 sm:pl-16"
          >
            {/* Timeline line */}
            <div
              className="absolute left-3 sm:left-4 top-0 bottom-0 w-px"
              style={{
                background:
                  'linear-gradient(to top, transparent 0%, #e7dcdc22 70%, #ffffff55 50%, #fafafa22 20%, transparent 100%)',
              }}
            />

            {/* Status icon */}
            <div className="absolute left-0 top-6">{getStatusIcon(milestone.status)}</div>

            <Card className={milestone.status === 'pending' ? "bg-yellow-300/10 border-2 border-yellow-400/70" : "bg-[#1E1E1E]"}>
              <CardContent className="px-4 sm:px-6 py-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
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
                  <div className="border border-emerald-400/40 rounded-md p-2 my-4 bg-emerald-400/10">
                    <div className="flex items-center text-sm text-green-500">
                      <Shield className="w-4 h-4 mr-2" />
                      <span>{milestone.verifiedBy}</span>
                    </div>
                    {milestone.verifiedDate && (
                      <div className="text-xs text-gray-400 mt-1">{milestone.verifiedDate}</div>
                    )}
                  </div>
                )}

                {milestone.dueDate && (
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Due Date: {milestone.dueDate}</span>
                  </div>
                )}

                {milestone.showReceipt && (
                  <div className="flex flex-wrap gap-3 mb-2">
                    <Button variant="outline" className="flex items-center gap-2 bg-[#D1D5DC]/10 hover:bg-[#D1D5DC]/20 cursor-pointer text-gray-300 border-none">
                      <FileText className="w-4 h-4" /> View Receipt
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2 bg-[#D1D5DC]/10 hover:bg-[#D1D5DC]/20 cursor-pointer text-gray-300 border-none">
                      <Download className="w-4 h-4" /> Download Receipt
                    </Button>
                  </div>
                )}

                {milestone.showUpload && (
                  <div className="flex flex-wrap gap-4">
                    <Button className="flex items-center gap-2 border-yellow-400/80 border bg-yellow-600/20 hover:bg-yellow-600/40">
                      <Upload className="w-4 h-4 text-yellow-400" /> Upload Receipt
                      <CircleAlert className="text-yellow-400" />
                    </Button>
                    <Button className="flex items-center gap-2 border-emerald-400/80 border bg-emerald-600/20 hover:bg-green-700">
                      <FileText className="w-4 h-4 text-emerald-400" /> Mark as Received
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMilestones;
