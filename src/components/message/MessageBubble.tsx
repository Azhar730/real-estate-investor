"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Trash2,
  Pencil,
  ZoomIn,
} from "lucide-react";
import { Message } from "@/types/message";
import Image from "next/image";

// ────────────────────────────────────────────────
// আলাদা MessageBubble কম্পোনেন্ট
// ────────────────────────────────────────────────
function MessageBubble({
  msg,
  onEdit,
  onDelete,
  onZoomImage,
}: {
  msg: Message;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onZoomImage: (url: string) => void;
}) {
  return (
    <div className={`flex ${msg.isYou ? "justify-end" : "justify-start"} group`}>
      <div className={`max-w-[80%] ${msg.isYou ? "ml-auto" : ""}`}>
        {!msg.isYou && (
          <p className="text-xs text-gray-400 mb-1 ml-2">{msg.sender}</p>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              className={`p-3 rounded-2xl text-[15px] leading-relaxed relative cursor-pointer ${
                msg.isYou
                  ? "bg-emerald-600 text-white rounded-br-none"
                  : "bg-gray-200/10 text-gray-100 rounded-bl-none"
              }`}
            >
              {msg.text && <p className="whitespace-pre-wrap">{msg.text}</p>}

              {msg.files && msg.files.length > 0 && (
                <div className="mt-2 space-y-2">
                  {msg.files.map((file, idx) => (
                    <div key={idx}>
                      {file.type === "image" ? (
                        <div
                          className="relative rounded-lg overflow-hidden cursor-zoom-in"
                          onClick={() => onZoomImage(file.url)}
                        >
                          <Image
                            src={file.url}
                            alt="attachment"
                            width={320}
                            height={240}
                            className="max-h-64 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                            <ZoomIn className="text-white" size={28} />
                          </div>
                        </div>
                      ) : (
                        <div className="bg-emerald-900 p-3 rounded-lg text-sm">
                          <p className="text-emerald-400 font-medium">PDF • {file.name}</p>
                          <p className="text-xs text-gray-400 mt-1">Tap to download</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-end gap-1.5 mt-1 text-xs text-gray-300/70">
                <span>{msg.time}</span>
                {msg.isYou && msg.status && (
                  <span>{msg.status === "read" ? "✓✓" : "✓"}</span>
                )}
              </div>
            </div>
          </DropdownMenuTrigger>

          {msg.isYou && (
            <DropdownMenuContent align="end" className="bg-gray-900 border-gray-700 text-gray-200">
              <DropdownMenuItem
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => onEdit(msg.id)}
              >
                <Pencil size={16} /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-2 text-red-400 cursor-pointer"
                onClick={() => onDelete(msg.id)}
              >
                <Trash2 size={16} /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      </div>
    </div>
  );
}

export default MessageBubble