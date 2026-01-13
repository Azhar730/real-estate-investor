import { cn } from "@/lib/utils";

interface Props {
  type?: "system";
  text: string;
  time: string;
  isAgent?: boolean;
}

export default function MessageBubble({ type, text, time, isAgent }: Props) {
  if (type === "system") {
    return (
      <div className="flex justify-center my-4">
        <div className="bg-muted/70 text-muted-foreground text-xs px-4 py-1.5 rounded-full">
          {text}
        </div>
      </div>
    );
  }

  const isRight = isAgent; // Agent messages on right (like WhatsApp agent side)

  return (
    <div className={cn("flex", isRight ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
          isRight
            ? "bg-primary text-primary-foreground rounded-br-none"
            : "bg-muted rounded-bl-none"
        )}
      >
        {text}
        <div
          className={cn(
            "text-xs mt-1 opacity-70 text-right",
            isRight ? "text-primary-foreground/80" : "text-muted-foreground"
          )}
        >
          {time}
        </div>
      </div>
    </div>
  );
}