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
"[project]/app/api/news/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "PUT",
    ()=>PUT,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
const NEWS_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "lib", "news-data.tsx");
const runtime = "nodejs";
const dynamic = "force-dynamic";
function loadArticles() {
    try {
        const src = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].readFileSync(NEWS_PATH, "utf8");
        const start = src.indexOf("export const allNews");
        if (start === -1) return [];
        const bracketStart = src.indexOf("[", start);
        const sentinel = "]\n\nexport function getNewsArticle";
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
function buildNewsFileContent(articles) {
    const header = `export interface NewsArticle {\n  id: number\n  slug: string\n  title: string\n  excerpt: string\n  content: string\n  date: string\n  readTime: string\n  image: string\n  category: string\n  featured?: boolean\n  author: string\n  authorImage: string\n}\n\nexport const allNews: NewsArticle[] = [\n`;
    const items = articles.map((a)=>{
        return `  {\n    id: ${a.id},\n    slug: ${JSON.stringify(a.slug)},\n    title: ${JSON.stringify(a.title)},\n    excerpt: ${JSON.stringify(a.excerpt)},\n    content: ${JSON.stringify(a.content ?? "")},\n    date: ${JSON.stringify(a.date)},\n    readTime: ${JSON.stringify(a.readTime)},\n    image: ${JSON.stringify(a.image)},\n    category: ${JSON.stringify(a.category)},\n    ${a.featured ? "featured: true,\n    " : ""}author: ${JSON.stringify(a.author ?? "")},\n    authorImage: ${JSON.stringify(a.authorImage ?? "")},\n  },\n`;
    }).join("");
    const footer = `]\n\nexport function getNewsArticle(slug: string): NewsArticle | undefined {\n  return allNews.find((article) => article.slug === slug)\n}\n\nexport function getRelatedArticles(currentSlug: string, limit = 3): NewsArticle[] {\n  const current = allNews.find((article) => article.slug === currentSlug)\n  if (!current) return allNews.slice(0, limit)\n\n  return allNews\n    .filter((article) => article.slug !== currentSlug)\n    .sort((a, b) => {\n      if (a.category === current.category && b.category !== current.category) return -1\n      if (b.category === current.category && a.category !== current.category) return 1\n      return 0\n    })\n    .slice(0, limit)\n}\n`;
    return header + items + footer;
}
function normalizeContent(raw) {
    let html = String(raw || "");
    const styles = [];
    html = html.replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, (m)=>{
        styles.push(m);
        return "";
    });
    html = html.replace(/<!DOCTYPE[\s\S]*?>/i, "");
    html = html.replace(/<\/?html[\s\S]*?>/gi, "");
    html = html.replace(/<\/?head[\s\S]*?>/gi, "");
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    const bodyInner = bodyMatch ? bodyMatch[1] : html.replace(/<\/?body[^>]*>/gi, "");
    return (styles.join("\n") + "\n" + bodyInner).trim();
}
async function PUT(req, context) {
    const isAdmin = req.cookies.get("admin")?.value === "1";
    if (!isAdmin) return new Response("Unauthorized", {
        status: 401
    });
    const p = await context.params;
    const idParam = p?.id;
    const maybeId = Number(idParam);
    const body = await req.json();
    const newsPath = NEWS_PATH;
    let articles = loadArticles().slice();
    if (!articles.length) {
        try {
            const mod = await __turbopack_context__.A("[project]/lib/news-data.tsx [app-route] (ecmascript, async loader)");
            articles = (mod.allNews ?? []).slice();
        } catch  {
            articles = [];
        }
    }
    let idx = !Number.isNaN(maybeId) ? articles.findIndex((a)=>a.id === maybeId) : -1;
    if (idx === -1 && body?.slug) {
        idx = articles.findIndex((a)=>a.slug === String(body.slug));
    }
    if (idx === -1) return new Response("Not found", {
        status: 404
    });
    const target = articles[idx];
    const updated = {
        ...target,
        ...body,
        id: target.id
    };
    // prevent author fields from being reintroduced if omitted
    updated.author = body.author ?? "";
    updated.authorImage = body.authorImage ?? "";
    updated.content = normalizeContent(String(updated.content || ""));
    if (updated.featured) {
        for(let i = 0; i < articles.length; i++){
            if (i !== idx) {
                const a = articles[i];
                if (a.featured) {
                    articles[i] = {
                        ...a,
                        featured: false
                    };
                }
            }
        }
    }
    articles[idx] = updated;
    const content = buildNewsFileContent(articles);
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].writeFileSync(newsPath, content, "utf8");
    return Response.json({
        ok: true,
        article: updated
    });
}
async function DELETE(req, context) {
    const isAdmin = req.cookies.get("admin")?.value === "1";
    if (!isAdmin) return new Response("Unauthorized", {
        status: 401
    });
    const p = await context.params;
    const idParam = p?.id;
    const maybeId = Number(idParam);
    const newsPath = NEWS_PATH;
    let articles = loadArticles().slice();
    if (!articles.length) {
        try {
            const mod = await __turbopack_context__.A("[project]/lib/news-data.tsx [app-route] (ecmascript, async loader)");
            articles = (mod.allNews ?? []).slice();
        } catch  {
            articles = [];
        }
    }
    if (!Number.isNaN(maybeId)) {
        articles = articles.filter((a)=>a.id !== maybeId);
    } else if (typeof idParam === "string") {
        articles = articles.filter((a)=>a.slug !== idParam);
    }
    const content = buildNewsFileContent(articles);
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].writeFileSync(newsPath, content, "utf8");
    return Response.json({
        ok: true
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__406b67fb._.js.map