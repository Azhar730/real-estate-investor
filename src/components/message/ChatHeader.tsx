import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Verified } from "lucide-react";

interface Props {
  name: string;
  avatar?: string;
  verified?: boolean;
  price?: string;
}

export default function ChatHeader({ name, avatar, verified, price }: Props) {
  return (
    <div className="border-b border-border p-4 flex items-center gap-3 bg-muted/30">
      <Avatar className="h-11 w-11">
        <AvatarImage src={avatar} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold">{name}</h2>
          {verified && (
            <Badge variant="outline" className="gap-1 text-xs">
              <Verified className="h-3.5 w-3.5 fill-blue-500 text-blue-500" />
              Verified
            </Badge>
          )}
        </div>
        {price && (
          <p className="text-sm text-muted-foreground mt-0.5">{price}</p>
        )}
      </div>
    </div>
  );
}