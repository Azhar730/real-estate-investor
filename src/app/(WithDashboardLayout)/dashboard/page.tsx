"use client"
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function DashboardPage() {

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Alert variant="destructive" className="max-w-md">
        <AlertDescription>
          Access Denied. Invalid role
          <br />
          Please contact support.
        </AlertDescription>
      </Alert>
    </div>
  );
}