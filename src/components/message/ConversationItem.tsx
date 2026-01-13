import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  time: string;
  message: string;
  unread?: number;
  active?: boolean;
}

export default function ConversationItem({
  name,
  time,
  message,
  unread = 0,
  active = false,
}: Props) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 px-4 py-3 hover:bg-muted/60 cursor-pointer transition-colors",
        active && "bg-muted"
      )}
    >
      <Avatar className="h-10 w-10">
        <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80" />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline">
          <p className="font-medium truncate">{name}</p>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
        <p className="text-sm text-muted-foreground truncate mt-0.5">
          {message}
        </p>
      </div>

      {unread > 0 && (
        <div className="ml-2 flex-shrink-0">
          <div className="bg-primary text-primary-foreground text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
            {unread}
          </div>
        </div>
      )}
    </div>
  );
}