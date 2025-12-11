module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/app/api/artworks/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
const ART_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "lib", "artworks-data.tsx");
const runtime = "nodejs";
const dynamic = "force-dynamic";
function loadArtworks() {
    try {
        const src = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].readFileSync(ART_PATH, "utf8");
        const start = src.indexOf("export const allArtworks");
        if (start === -1) return [];
        const bracketStart = src.indexOf("[", start);
        const sentinel = "]\n\nexport function getArtwork";
        const endIdx = src.indexOf(sentinel, bracketStart);
        if (bracketStart === -1 || endIdx === -1) return [];
        const arrayStr = src.slice(bracketStart, endIdx);
        // eslint-disable-next-line no-new-func
        const fn = new Function("return " + arrayStr);
        const arr = fn();
        return Array.isArray(arr) ? arr : [];
    } catch  {
        return [];
    }
}
function buildFileContent(items) {
    const header = `export interface Artwork {\n  id: number\n  src: string\n  title: string\n  artist: string\n  medium: string\n  year: string\n  size: string\n}\n\nexport const allArtworks: Artwork[] = [\n`;
    const entries = items.map((a)=>{
        return `  { id: ${a.id}, src: ${JSON.stringify(a.src)}, title: ${JSON.stringify(a.title)}, artist: ${JSON.stringify(a.artist)}, medium: ${JSON.stringify(a.medium)}, year: ${JSON.stringify(a.year)}, size: ${JSON.stringify(a.size)} },\n`;
    }).join("");
    const footer = `]\n\nexport function getArtwork(id: number): Artwork | undefined {\n  return allArtworks.find((a) => a.id === id)\n}\n`;
    return header + entries + footer;
}
async function GET() {
    const arr = loadArtworks();
    if (arr.length === 0) {
        try {
            const mod = await __turbopack_context__.A("[project]/lib/artworks-data.tsx [app-route] (ecmascript, async loader)");
            return Response.json(mod.allArtworks ?? []);
        } catch  {
            return Response.json([]);
        }
    }
    return Response.json(arr);
}
async function POST(req) {
    const isAdmin = req.cookies.get("admin")?.value === "1";
    if (!isAdmin) return new Response("Unauthorized", {
        status: 401
    });
    const body = await req.json();
    let items = loadArtworks().slice();
    if (!items.length) {
        try {
            const mod = await __turbopack_context__.A("[project]/lib/artworks-data.tsx [app-route] (ecmascript, async loader)");
            items = (mod.allArtworks ?? []).slice();
        } catch  {
            items = [];
        }
    }
    const nextId = items.length ? Math.max(...items.map((i)=>i.id)) + 1 : 1;
    const newItem = {
        id: nextId,
        src: String(body.src || "/placeholder.svg"),
        title: String(body.title || "Untitled"),
        artist: String(body.artist || ""),
        medium: String(body.medium || ""),
        year: String(body.year || ""),
        size: String(body.size || "")
    };
    const content = buildFileContent([
        newItem,
        ...items
    ]);
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].writeFileSync(ART_PATH, content, "utf8");
    return Response.json({
        ok: true,
        item: newItem
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__07eb6ee4._.js.map