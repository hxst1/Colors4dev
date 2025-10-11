"use client";
import React from "react";

type Props = {
    base: string;
    setBase: (v: string) => void;
    token: string;
    setToken: (v: string) => void;
    baseHex: string;
};

export default function Controls({ base, setBase, token, setToken, baseHex }: Props) {
    return (
        <section className="grid md:grid-cols-3 gap-6 mb-2">
            <div className="md:col-span-2 bg-zinc-900/60 backdrop-blur border border-zinc-800 rounded-2xl p-4">
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2">Base color (HEX)</label>
                <div className="flex items-center gap-3">
                    <input type="color" value={baseHex} onChange={e => setBase(e.target.value)} className="h-10 w-14 cursor-pointer bg-transparent rounded-lg" />
                    <input value={base} onChange={e => setBase(e.target.value)} placeholder="#826EE7" className="flex-1 bg-zinc-950/50 border border-zinc-800 rounded-lg px-3 py-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-zinc-600" />
                </div>
            </div>

            <div className="bg-zinc-900/60 backdrop-blur border border-zinc-800 rounded-2xl p-4">
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2">Token name</label>
                <input value={token} onChange={e => setToken(e.target.value.replace(/\s+/g, '-').toLowerCase())} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-3 py-2 font-mono text-sm" />
                <p className="text-xs text-zinc-400 mt-1">e.g. <span className="font-mono">brand</span>, <span className="font-mono">primary</span>, <span className="font-mono">accent</span></p>
            </div>
        </section>
    );
}
