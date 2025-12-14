"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CommandBlockProps {
  command: string;
  prompt?: string;
}

export function CommandBlock({ command, prompt = "$" }: CommandBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative flex items-center gap-3 border border-border bg-white px-4 py-3">
      <span className="text-muted-foreground select-none">{prompt}</span>
      <code className="flex-1">{command}</code>
      <button
        onClick={copyToClipboard}
        className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Copy command"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  );
}
