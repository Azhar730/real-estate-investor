export type Message = {
    id: number;
    sender: string;
    text?: string;
    files?: { url: string; type: string; name?: string }[];
    time: string;
    isYou: boolean;
    status?: "sent" | "delivered" | "read";
};