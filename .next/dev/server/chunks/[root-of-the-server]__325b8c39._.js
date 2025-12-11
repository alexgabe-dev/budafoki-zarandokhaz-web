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
"[project]/app/api/exhibitions/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
const EXH_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "lib", "gallery-data.tsx");
const runtime = "nodejs";
const dynamic = "force-dynamic";
function loadExhibitions() {
    try {
        const src = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].readFileSync(EXH_PATH, "utf8");
        const start = src.indexOf("export const allExhibitions");
        if (start === -1) return [];
        const bracketStart = src.indexOf("[", start);
        const sentinel = "]\n\nexport function getExhibition";
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
    const header = `export interface ExhibitionDetail {\n  paintedWhen: string\n  paintedWhere: string\n  technique: string\n  dimensions: string\n  curatorNote: string\n}\n\nexport interface Exhibition {\n  id: number\n  slug: string\n  title: string\n  artist: string\n  description: string\n  image: string\n  dateRange: string\n  location: string\n  status: \"current\" | \"upcoming\"\n  details?: ExhibitionDetail\n}\n\nexport const allExhibitions: Exhibition[] = [\n`;
    const entries = items.map((e)=>{
        const details = e.details ? `details: {\n      paintedWhen: ${JSON.stringify(details.paintedWhen)},\n      paintedWhere: ${JSON.stringify(details.paintedWhere)},\n      technique: ${JSON.stringify(details.technique)},\n      dimensions: ${JSON.stringify(details.dimensions)},\n      curatorNote: ${JSON.stringify(details.curatorNote)},\n    },\n` : "";
        return `  {\n    id: ${e.id},\n    slug: ${JSON.stringify(e.slug)},\n    title: ${JSON.stringify(e.title)},\n    artist: ${JSON.stringify(e.artist)},\n    description: ${JSON.stringify(e.description)},\n    image: ${JSON.stringify(e.image)},\n    dateRange: ${JSON.stringify(e.dateRange)},\n    location: ${JSON.stringify(e.location)},\n    status: ${JSON.stringify(e.status)},\n    ${details}}\n`;
    }).join("");
    const footer = `]\n\nexport function getExhibition(slug: string): Exhibition | undefined {\n  return allExhibitions.find((e) => e.slug === slug)\n}\n`;
    return header + entries + footer;
}
function slugify(input) {
    return input.toLowerCase().replace(/[^a-z0-9áéíóöőúüű\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
}
async function GET() {
    const arr = loadExhibitions();
    if (arr.length === 0) {
        try {
            const mod = await __turbopack_context__.A("[project]/lib/gallery-data.tsx [app-route] (ecmascript, async loader)");
            return Response.json(mod.allExhibitions ?? []);
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
    let items = loadExhibitions().slice();
    if (!items.length) {
        try {
            const mod = await __turbopack_context__.A("[project]/lib/gallery-data.tsx [app-route] (ecmascript, async loader)");
            items = (mod.allExhibitions ?? []).slice();
        } catch  {
            items = [];
        }
    }
    const nextId = items.length ? Math.max(...items.map((i)=>i.id)) + 1 : 1;
    const slug = body.slug ? String(body.slug) : slugify(String(body.title));
    const newItem = {
        id: nextId,
        slug,
        title: String(body.title || "Untitled"),
        artist: String(body.artist || ""),
        description: String(body.description || ""),
        image: String(body.image || "/placeholder.svg"),
        dateRange: String(body.dateRange || ""),
        location: String(body.location || ""),
        status: body.status === "current" ? "current" : "upcoming",
        details: body.details || undefined
    };
    const content = buildFileContent([
        newItem,
        ...items
    ]);
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].writeFileSync(EXH_PATH, content, "utf8");
    return Response.json({
        ok: true,
        item: newItem
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__325b8c39._.js.map