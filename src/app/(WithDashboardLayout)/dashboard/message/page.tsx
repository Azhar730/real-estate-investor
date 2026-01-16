"use client";

import MessageBubble from "@/components/message/MessageBubble";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Message } from "@/types/message";
import { ArrowLeft, Paperclip, Search, Send, Shield, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

export default function MessagesPage() {

    const [selectedChatId, setSelectedChatId] = useState<number | null>(1);
    const [messageText, setMessageText] = useState("");
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [previewFiles, setPreviewFiles] = useState<
        { url: string; type: string; name: string }[]
    >([]);
    const [replyTo, setReplyTo] = useState<Message | null>(null);
    const [enlargeImage, setEnlargeImage] = useState<string | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const [chats] = useState([
        { id: 1, name: "Fatima Rashid", avatar: null, lastMsg: "The property viewing is confirm", time: "10:30 AM", unread: 2 },
        { id: 2, name: "Mohammed Al-Saud", avatar: null, lastMsg: "Beachfront Apartment", time: "Yesterday", unread: 0 },
        { id: 3, name: "Sarah Johnson", avatar: null, lastMsg: "Thank you for the information about...", time: "2 days ago", unread: 0 },
    ]);

    const [messages, setMessages] = useState<Message[]>([
        { id: 1, sender: "Fatima Rashid", text: "Good morning! Thank you for your interest in this property. I'd be happy to answer any questions.", time: "09:15 AM", isYou: false },
        { id: 2, sender: "System", text: "Agent Fatima has shared verified Title Deed PDF", files: [{ url: "/pdf-icon.png", type: "pdf", name: "Title_Deed_4301234567889.pdf" }], time: "09:18 AM", isYou: false },
        { id: 3, sender: "You", text: "Thank you! Could we schedule a viewing this week?", time: "09:20 AM", isYou: true },
        { id: 4, sender: "Fatima Rashid", text: "Absolutely! I have availability tomorrow at 2 PM or Thursday at 10 AM. Which works better for you?", time: "09:25 AM", isYou: false },
        { id: 5, sender: "You", text: "Tomorrow at 2 PM works perfectly. See you then!", time: "09:30 AM", isYou: true },
    ]);

    const currentChat = chats.find((c) => c.id === selectedChatId) || chats[0];

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, selectedChatId]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const files = Array.from(e.target.files);
        setSelectedFiles((prev) => [...prev, ...files]);

        const previews = files.map((file) => ({
            url: URL.createObjectURL(file),
            type: file.type.startsWith("image") ? "image" : "pdf",
            name: file.name,
        }));
        setPreviewFiles((prev) => [...prev, ...previews]);
    };

    const removePreview = (index: number) => {
        setPreviewFiles((prev) => prev.filter((_, i) => i !== index));
        setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const sendMessage = () => {
        if (!messageText.trim() && previewFiles.length === 0) return;

        const newMsg: Message = {
            id: messages.length + 1,
            sender: "You",
            text: messageText.trim() || undefined,
            files: previewFiles.length > 0 ? [...previewFiles] : undefined,
            time: format(new Date(), "h:mm a"),
            isYou: true,
            status: "sent",
        };

        setMessages((prev) => [...prev, newMsg]);
        setMessageText("");
        setPreviewFiles([]);
        setSelectedFiles([]);
        setReplyTo(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleDeleteMessage = (id: number) => {
        setMessages((prev) => prev.filter((m) => m.id !== id));
    };

    const handleEditMessage = (id: number) => {
        const msg = messages.find((m) => m.id === id);
        if (!msg || !msg.text) return;
        setMessageText(msg.text);
        // আসল এডিট ফিচার চাইলে এখানে editing state যোগ করতে পারেন
    };

    return (
        <div className="h-100dvh flex flex-col text-gray-100 overflow-hidden">
            {/* Enlarged Image Modal */}
            {enlargeImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    onClick={() => setEnlargeImage(null)}
                >
                    <div className="relative max-w-5xl max-h-[90vh] p-4">
                        <Image
                            src={enlargeImage}
                            alt="enlarged"
                            width={1600}
                            height={1200}
                            className="max-h-[85vh] object-contain"
                        />
                        <button className="absolute top-6 right-6 text-white bg-black/40 rounded-full p-3">
                            <X size={28} />
                        </button>
                    </div>
                </div>
            )}

            <div className="px-4 py-1">
                <h1 className="text-xl font-semibold">Messages</h1>
            </div>

            <div className="flex ">
                {/* Chat List */}
                <div
                    className={` mr-4 rounded-xl bg-stone-800/70 w-full lg:w-80  overflow-y-auto shrink-0 ${selectedChatId ? "hidden lg:block" : "block"
                        }`}
                >
                    <div className="relative w-full max-w-md my-2 px-4 border-b pb-4">
                        <Search
                            className="absolute left-7 top-5 transform -translate-y-1/2 text-gray-400 "
                            size={18}
                        />
                        <Input
                            placeholder="Search conversations..."
                            className="pl-10 bg-stone-900 text-gray-200 
                   placeholder:text-gray-400 focus-visible:ring-emerald-600/50
                   rounded-lg h-10"
                        />
                    </div>
                    {chats.map((chat) => (
                        <div
                            key={chat.id}
                            onClick={() => setSelectedChatId(chat.id)}
                            className={`p-3 flex items-center gap-3 border-b border-gray-400/40 hover:bg-emerald-900/20 cursor-pointer ${selectedChatId === chat.id ? "bg-emerald-950/40" : ""
                                }`}
                        >
                            <div className="relative">
                                <Avatar className="h-12 w-12">
                                    {chat.avatar && <AvatarImage src={chat.avatar} />}
                                    <AvatarFallback className="bg-emerald-800">
                                        {chat.name[0]}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-gray-950" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between">
                                    <p className="font-medium truncate">{chat.name}</p>
                                    <span className="text-xs text-gray-400">{chat.time}</span>
                                </div>
                                <p className="text-sm text-gray-400 truncate mt-0.5">{chat.lastMsg}</p>
                            </div>

                            {chat.unread > 0 && (
                                <div className="bg-emerald-600 text-white text-xs font-medium rounded-full px-2 py-0.5 min-w-[1.4rem] text-center">
                                    {chat.unread}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Chat Area */}
                <div
                    className={`rounded-xl border border-red-500  bg-stone-800/70 flex-1 flex flex-col ${selectedChatId ? "block" : "hidden lg:block"
                        }`}
                >
                    {selectedChatId ? (
                        <>
                            {/* Header */}
                            <div className="bg-emerald-900/60 p-3 flex items-center rounded-t-xl justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <Button
                                    variant="ghost"
                                    size="icon"
                                    className="lg:hidden bg-emerald-400/10 hover:bg-emerald-400/30 cursor-pointer"
                                    onClick={() => setSelectedChatId(null)}
                                >
                                    <ArrowLeft />
                                </Button>
                                    <Avatar className="h-10 w-10">
                                        <AvatarFallback className="bg-emerald-800">
                                            {currentChat.name[0]}
                                        </AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <h2 className="font-medium">{currentChat.name}</h2>
                                        <p className="text-xs text-emerald-400">online</p>
                                    </div>
                                </div>
                                <Badge className="bg-emerald-800/70"><Shield/> Verified</Badge>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-hidden">
                                <ScrollArea className="h-full p-4 scrollbar-hide">
                                    <div className="space-y-5 max-w-3xl mx-auto">
                                        {messages.map((msg) => (
                                            <MessageBubble
                                                key={msg.id}
                                                msg={msg}
                                                onEdit={handleEditMessage}
                                                onDelete={handleDeleteMessage}
                                                onZoomImage={setEnlargeImage}
                                            />
                                        ))}
                                        <div ref={messagesEndRef} />
                                    </div>
                                </ScrollArea>
                            </div>

                            {/* Input Area */}
                            <div className="shrink-0 p-3">
                                {previewFiles.length > 0 && (
                                    <div className="flex gap-3 mb-3 overflow-x-auto pb-2">
                                        {previewFiles.map((file, idx) => (
                                            <div key={idx} className="relative shrink-0">
                                                <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
                                                    {file.type === "image" ? (
                                                        <Image src={file.url} alt="preview" fill className="object-cover" />
                                                    ) : (
                                                        <div className="flex items-center justify-center h-full text-xs text-gray-400">
                                                            PDF
                                                        </div>
                                                    )}
                                                </div>
                                                <button
                                                    onClick={() => removePreview(idx)}
                                                    className="absolute -top-2 -right-2 bg-emerald-600 rounded-full p-1"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="flex items-center gap-2 bg-[#2A2A2A] rounded-full px-4 py-2">
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*,.pdf"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />

                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-full hover:bg-emerald-700"
                                        onClick={() => fileInputRef.current?.click()}
                                    >
                                        <Paperclip size={20} />
                                    </Button>

                                    <Input
                                        value={messageText}
                                        onChange={(e) => setMessageText(e.target.value)}
                                        placeholder="Type a message..."
                                        className="bg-transparent border-0 focus-visible:ring-0 text-base placeholder:text-gray-500"
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" && !e.shiftKey) {
                                                e.preventDefault();
                                                sendMessage();
                                            }
                                        }}
                                    />

                                    <Button
                                        size="icon"
                                        className="rounded-full bg-emerald-600 hover:bg-emerald-700"
                                        onClick={sendMessage}
                                        disabled={!messageText.trim() && previewFiles.length === 0}
                                    >
                                        <Send size={18} />
                                    </Button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-gray-400">
                            Select a conversation to start messaging
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}