"use client";
import React from "react";
import { bestOnColor, hexToRgb, contrastRatio } from "@/lib/color";

type Props = { token: string; scale: Record<string, string>; crWhite: number; crBlack: number };
export default function AccessibilityPanel({ token, scale, crWhite, crBlack }: Props) {
    const white = { r: 255, g: 255, b: 255 };
    const c500 = hexToRgb(scale["500"]);
    return (
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4">
            <h2 className="text-sm font-semibold mb-3">Accessibility (contrast vs {token}-500)</h2>
            <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg border border-zinc-800" style={{ background: scale["500"], color: bestOnColor(scale["500"]) }}>
                    <div className="text-sm">On <strong>{token}-500</strong></div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs">White: {crWhite.toFixed(2)}:1</span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-600 text-white">AA</span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-200">AAA</span>
                    </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-zinc-800">
                    <div className="text-sm">On <strong>white</strong></div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs">{contrastRatio(c500, white).toFixed(2)}:1</span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-600 text-white">AA</span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-200">AAA</span>
                    </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-zinc-800 bg-zinc-50 text-zinc-900">
                    <div className="text-sm">On <strong>black</strong></div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs">{crBlack.toFixed(2)}:1</span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-600 text-white">AA</span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-200">AAA</span>
                    </div>
                </div>
            </div>
            <p className="text-xs text-zinc-400 mt-3">Tip: use <span className="font-mono">var(--on-{token})</span> for legible text on your base color.</p>
        </div>
    );
}
