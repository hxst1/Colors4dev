"use client";
import React from "react";
export default function Swatch({ name, hex }: { name: string; hex: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg border border-black/5 shadow-sm" style={{ background: hex }} />
            <div>
                <div className="text-sm font-medium text-zinc-100">{name}</div>
                <div className="text-xs text-zinc-400 font-mono">{hex}</div>
            </div>
        </div>
    );
}
