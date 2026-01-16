'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Landmark, CheckCircle2, Copy, User, ShieldCheck, Lock, Shield } from 'lucide-react';

export default function PropertyDetails() {
  return (
    <div className="max-w-md mx-auto space-y-4">
      {/* Seller Bank Details */}
      <Card className="bg-zinc-900 text-white border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Landmark className="text-emerald-500" size={18} />
            <CardTitle className="text-sm font-medium">Seller Bank Details</CardTitle>
          </div>

          <Badge variant="outline" className="border-emerald-500 bg-emerald-400/20 text-emerald-500 text-xs">
            <Shield />
            REGA Verified
          </Badge>
        </CardHeader>

        <CardContent className="space-y-3 text-sm">
          <Info label="Bank Name" value="Al Rajhi Bank" />
          <Info label="Account Holder" value="REGA Investment Properties LLC" />

          {/* IBAN */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs text-zinc-400">IBAN</p>
              <p className="font-mono tracking-wide">SA44 8000 0000 6080 1016 7519</p>
            </div>
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 bg-[#006C35] hover:bg-green-700"
            >
              <Copy size={14} />
            </Button>
          </div>

          <Info label="SWIFT Code" value="RJHISARI" />
          <Info label="Branch" value="Riyadh Main Branch" />
        </CardContent>
      </Card>

      {/* Investor Information */}
      <Card className="bg-zinc-900 text-white border-zinc-800">
        <CardHeader>Investor Information</CardHeader>
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full 
bg-linear-to-br from-emerald-400 to-emerald-600/40">
              <User size={18} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-medium">Ahmed Al-Farsi</p>
              <p className="text-xs text-zinc-400">ID: inv-001</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-md bg-emerald-900/30 px-3 py-3 text-emerald-400 text-xs">
            <Shield size={14} />
            Verified
          </div>
        </CardContent>
      </Card>

      {/* Escrow Protection */}
      <Card className="bg-zinc-900 text-white border-zinc-800">
        <CardContent className="p-4 flex gap-3">
          <Shield className="text-yellow-500 mt-0.5" size={40} />
          <div>
            <p className="text-sm font-medium">Escrow Protection Coming Soon</p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Your payments will be secured in escrow until construction milestones are verified by
              REGA.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Digital Title Deed */}
      <Card className="bg-zinc-900 text-white border-zinc-800">
        <CardContent className="p-4 flex gap-3">
          <div className='bg-gray-600/40 p-2 rounded-full'>
            <Lock className="text-zinc-400 mt-0.5" size={20} />
          </div>
          <div>
            <p className="text-sm font-medium">Digital Title Deed</p>
            <p className="text-xs text-zinc-400">
              Title Deed will unlock at 100% payment completion
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* Helper Component */
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-zinc-400">{label}</p>
      <p className="text-sm">{value}</p>
    </div>
  );
}
