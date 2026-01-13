import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";

export default function MessageInput() {
  return (
    <div className="border-t border-border p-4 bg-background">
      <form className="relative flex items-center">
        <Input
          placeholder="Type a message..."
          className="pr-12 py-6 bg-muted/50 border-none focus-visible:ring-1"
        />
        <Button
          size="icon"
          className="absolute right-2 h-9 w-9 rounded-full"
          type="submit"
        >
          <SendHorizontal className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
}