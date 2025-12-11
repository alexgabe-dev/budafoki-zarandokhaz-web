module.exports = [
"[project]/Documents/git/budafoki-zarandokhaz-web/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Documents/git/budafoki-zarandokhaz-web/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const navItems = [
    {
        href: "/",
        label: "Főoldal"
    },
    {
        href: "/rolunk",
        label: "Rólunk"
    },
    {
        href: "/szolgaltatasok",
        label: "Szolgáltatások"
    },
    {
        href: "/galeria",
        label: "Galéria"
    },
    {
        href: "/hirek",
        label: "Hírek"
    },
    {
        href: "/kapcsolat",
        label: "Kapcsolat"
    }
];
function Header() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [brandAnimated, setBrandAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setBrandAnimated(true);
    }, []);
    // Close mobile menu on route change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsOpen(false);
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out", scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-background/10" : "bg-transparent"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16 md:h-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-3 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo/bfhz-logo-w.png",
                                    alt: "Budafoki Zarándokház",
                                    width: 200,
                                    height: 56,
                                    sizes: "(max-width: 640px) 120px, (max-width: 768px) 140px, 180px",
                                    className: "h-6 sm:h-7 md:h-10 w-auto",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline font-serif text-lg md:text-xl font-bold text-foreground relative",
                                    children: [
                                        "Zarándokház",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute left-0 right-0 -bottom-0.5 h-0.5 bg-primary transition-transform duration-700 ease-out origin-left", brandAnimated ? "scale-x-100" : "scale-x-0")
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden lg:flex items-center gap-1",
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-lg", pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground"),
                                    children: [
                                        item.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute bottom-0 left-4 right-4 h-0.5 bg-primary transition-transform duration-500 ease-out origin-left", pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100")
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.href, true, {
                                    fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                size: "sm",
                                className: "bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500 ease-out hover:scale-105 hover:shadow-lg hover:shadow-primary/25",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/kapcsolat",
                                    children: "Foglalás"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsOpen(!isOpen),
                            className: "lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-300",
                            "aria-label": isOpen ? "Menü bezárása" : "Menü megnyitása",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-6 h-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-6 w-6 absolute inset-0 transition-all duration-300", isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100")
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-6 w-6 absolute inset-0 transition-all duration-300", isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0")
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("lg:hidden fixed inset-0 top-16 bg-background transition-all duration-500 ease-out z-40", isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "container mx-auto px-4 py-6 flex flex-col gap-1",
                    children: [
                        navItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("py-4 text-lg font-medium border-b border-border/30 transition-all duration-300", pathname === item.href ? "text-primary border-primary/50" : "text-foreground hover:text-primary hover:border-primary/50", isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"),
                                style: {
                                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms"
                                },
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-6 transition-all duration-500", isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"),
                            style: {
                                transitionDelay: isOpen ? `${navItems.length * 50}ms` : "0ms"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                size: "lg",
                                className: "w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/kapcsolat",
                                    children: "Foglalás"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/header.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/git/budafoki-zarandokhaz-web/components/back-to-top.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackToTop",
    ()=>BackToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function BackToTop() {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setIsVisible(window.scrollY > 800);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: scrollToTop,
        "aria-label": "Vissza az elejére",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed bottom-20 lg:bottom-8 right-4 z-30 p-3 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:scale-110", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/back-to-top.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/back-to-top.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleContent",
    ()=>ArticleContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/lucide-react/dist/esm/icons/facebook.js [app-ssr] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/lucide-react/dist/esm/icons/twitter.js [app-ssr] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/lucide-react/dist/esm/icons/link-2.js [app-ssr] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wine$3e$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/lucide-react/dist/esm/icons/wine.js [app-ssr] (ecmascript) <export default as Wine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function ArticleContent({ article }) {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, {
            threshold: 0.1
        });
        if (contentRef.current) {
            observer.observe(contentRef.current);
        }
        return ()=>observer.disconnect();
    }, []);
    const shareUrl = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "";
    const shareText = `${article.title} - Budafoki Zarándokház`;
    const shareToFacebook = ()=>{
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank", "width=600,height=400");
    };
    const shareToTwitter = ()=>{
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, "_blank", "width=600,height=400");
    };
    const shareToLinkedin = ()=>{
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank", "width=600,height=400");
    };
    const shareViaEmail = ()=>{
        window.location.href = `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(`Olvasd el ezt a cikket: ${shareUrl}`)}`;
    };
    const copyLink = async ()=>{
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy link");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: contentRef,
        className: "py-12 md:py-16 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("max-w-3xl mx-auto transition-all duration-700 ease-out", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 font-serif italic border-l-4 border-primary pl-6",
                        children: article.excerpt
                    }, void 0, false, {
                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prose prose-lg prose-invert max-w-none prose-headings:font-serif prose-headings:text-foreground prose-headings:font-bold prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6 prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground prose-blockquote:bg-card prose-blockquote:py-4 prose-blockquote:pr-6 prose-blockquote:rounded-r-lg prose-blockquote:my-8 prose-strong:text-foreground prose-strong:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
                        dangerouslySetInnerHTML: {
                            __html: article.content
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-16 transition-all duration-700 delay-200", isVisible ? "opacity-100" : "opacity-0"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground uppercase tracking-widest",
                                        children: "Megosztás"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: shareToFacebook,
                                        className: "group relative w-12 h-12 rounded-full bg-card/50 border border-border/50 flex items-center justify-center transition-all duration-300 hover:bg-card hover:border-primary/30 hover:scale-110 hover:-translate-y-1",
                                        "aria-label": "Megosztás Facebookon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                            className: "h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: shareToTwitter,
                                        className: "group relative w-12 h-12 rounded-full bg-card/50 border border-border/50 flex items-center justify-center transition-all duration-300 hover:bg-card hover:border-primary/30 hover:scale-110 hover:-translate-y-1",
                                        "aria-label": "Megosztás Twitteren",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                            className: "h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                            lineNumber: 125,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: shareToLinkedin,
                                        className: "group relative w-12 h-12 rounded-full bg-card/50 border border-border/50 flex items-center justify-center transition-all duration-300 hover:bg-card hover:border-primary/30 hover:scale-110 hover:-translate-y-1",
                                        "aria-label": "Megosztás LinkedInen",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                            className: "h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: shareViaEmail,
                                        className: "group relative w-12 h-12 rounded-full bg-card/50 border border-border/50 flex items-center justify-center transition-all duration-300 hover:bg-card hover:border-primary/30 hover:scale-110 hover:-translate-y-1",
                                        "aria-label": "Megosztás emailben",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            className: "h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: copyLink,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group relative w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1", copied ? "bg-green-600/20 border-green-500/50" : "bg-card/50 border-border/50 hover:bg-card hover:border-primary/30"),
                                        "aria-label": "Link másolása",
                                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-5 w-5 text-green-500 animate-in zoom-in duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                            lineNumber: 155,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                            className: "h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                            lineNumber: 157,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-16 relative overflow-hidden rounded-2xl transition-all duration-700 delay-300", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-secondary/10"
                            }, void 0, false, {
                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 right-4 w-24 h-24 rounded-full bg-secondary/10 blur-2xl"
                            }, void 0, false, {
                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-4 left-4 w-32 h-32 rounded-full bg-primary/10 blur-2xl"
                            }, void 0, false, {
                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative p-8 md:p-12 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wine$3e$__["Wine"], {
                                            className: "w-8 h-8 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl md:text-3xl font-serif font-bold text-foreground mb-4",
                                        children: "Látogass el hozzánk!"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed",
                                        children: "Tapasztald meg személyesen a Zarándokház egyedi hangulatát. Foglalj szállást, vagy gyere el egy pohár miseborra a barátaiddal."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/kapcsolat",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "lg",
                                                    className: "group bg-primary hover:bg-primary/90 text-primary-foreground px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            className: "w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-y-0.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Foglalás"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/szolgaltatasok",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "lg",
                                                    className: "group border-border/50 bg-card/50 hover:bg-card hover:border-primary/30 px-8 transition-all duration-300 hover:scale-105",
                                                    children: "Szolgáltatásaink"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                                lineNumber: 200,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-content.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/git/budafoki-zarandokhaz-web/components/article-header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleHeader",
    ()=>ArticleHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ArticleHeader({ article }) {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsVisible(true);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[50vh] md:h-[60vh] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: article.image || "/placeholder.svg",
                        alt: article.title,
                        fill: true,
                        priority: true,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("object-cover transition-all duration-1000 ease-out", isVisible ? "scale-100" : "scale-110")
                    }, void 0, false, {
                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-header.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-header.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-6 left-4 md:left-8 z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            asChild: true,
                            variant: "outline",
                            size: "sm",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-background/80 backdrop-blur-sm border-border hover:bg-background transition-all duration-500", isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/hirek",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "mr-2 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-header.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    "Vissza a hírekhez"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-header.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-header.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-header.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-header.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 -mt-32 md:-mt-40 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 mb-4 transition-all duration-500 delay-100", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full",
                                    children: article.category
                                }, void 0, false, {
                                    fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-header.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                article.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1.5 rounded-full",
                                    children: "Kiemelt"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-header.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-header.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight transition-all duration-700 delay-200", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"),
                            children: article.title
                        }, void 0, false, {
                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-header.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground transition-all duration-700 delay-300", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-header.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this),
                                        article.date
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-header.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-header.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        article.readTime,
                                        " olvasás"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-header.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-header.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-header.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-header.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/article-header.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/git/budafoki-zarandokhaz-web/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Documents/git/budafoki-zarandokhaz-web/lib/news-data.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allNews",
    ()=>allNews,
    "getNewsArticle",
    ()=>getNewsArticle,
    "getRelatedArticles",
    ()=>getRelatedArticles
]);
const allNews = [
    {
        id: 9,
        slug: "teszt",
        title: "Teszt",
        excerpt: "Ez egy teszt szöveg teszt szövege",
        content: "<h1 style=\"text-align:center; font-size: 2.5em; color:#7b1e1e; text-shadow: 1px 1px 2px #ccc;\">\n            Advent a Zarándokházban\n        </h1>\n    \n\n    <section style=\"max-width: 800px; margin: 0 auto;\">\n        <p>\n            Az advent a várakozás és az elcsendesedés időszaka, és mi a \n            <strong style=\"font-style: italic; text-decoration: underline;\">Zarándokházban különleges módon</strong> \n            szeretnénk megünnepelni ezt az időszakot veletek.\n        </p>\n\n        <hr style=\"border:0; height:1px; background:linear-gradient(to right, transparent, #b85c5c, transparent); margin:30px 0;\">\n\n        <h2 style=\"color:#8d2f2f; text-shadow: 1px 1px 1px #eee;\">Adventi Estek Programja</h2>\n\n        <p>\n            December minden hétvégéjén, péntektől vasárnapig, különleges adventi esteket szervezünk. \n            A program minden este 18:00-kor kezdődik és éjfélig tart.\n        </p>\n\n        <p>\n            A hangulatos gyertyafényes estéken házi készítésű forralt borral és punccsal várunk benneteket. \n            Konyhánk \n            <strong style=\"font-style: italic; text-decoration: underline;\">különleges adventi finomságokat</strong> \n            készít: mézeskalács, fahéjas alma pite és más téli csemegék kerülnek az asztalra.\n        </p>\n\n        <h2 style=\"color:#8d2f2f; margin-top:30px; text-shadow: 1px 1px 1px #eee;\">Élő Zene</h2>\n\n        <p>\n            Minden szombat este élő zenével fokozzuk a hangulatot. \n            Helyi művészek jazz és akusztikus feldolgozásokban adják elő a legszebb adventi dalokat, \n            de nem maradnak el a klasszikus magyar népdalok sem.\n        </p>\n\n        <blockquote style=\"font-style:italic; margin:25px; padding:15px 25px; background:#faf4f4; border-left:4px solid #b85c5c; box-shadow:0 0 6px #eee;\">\n            „Az advent a Zarándokházban nem csak egy esemény, hanem egy közösségi élmény, \n            ahol barátok és idegenek találkoznak a meleg fényben.”\n        </blockquote>\n\n        <h2 style=\"color:#8d2f2f; margin-top:30px; text-shadow: 1px 1px 1px #eee;\">Foglalás és Információk</h2>\n\n        <p>\n            Az adventi estékre nem szükséges előzetes foglalás, de a szállás foglalásához kérjük, \n            vegyétek fel velünk a kapcsolatot. A teljes adventi időszakban \n            <strong style=\"font-style: italic; text-decoration: underline;\">10% kedvezményt</strong> \n            biztosítunk a szobafoglalásokra.\n        </p>\n\n        <p style=\"font-weight:bold;\">\n            Várunk szeretettel minden zarándokot, aki a karácsony előtti hetekben egy kis békességre vágyik!\n        </p>\n\n    </section>",
        date: "2025. december 11.",
        readTime: "15 perc",
        image: "https://cdn01.dailycaller.com/wp-content/uploads/2019/06/Test-Shutterstock.jpg",
        category: "Esemény",
        featured: true,
        author: "",
        authorImage: ""
    },
    {
        id: 1,
        slug: "advent-a-zarandokhazban",
        title: "Advent a Zarándokházban",
        excerpt: "December minden hétvégéjén különleges adventi estek forralt borral és élő zenével. Csatlakozz hozzánk a várakozás idején!",
        content: "<p>Az advent a várakozás és az elcsendesedés időszaka, és mi a Zarándokházban különleges módon szeretnénk megünnepelni ezt az időszakot veletek.</p>\n      \n      <h2>Adventi Estek Programja</h2>\n      \n      <p>December minden hétvégéjén, péntektől vasárnapig, különleges adventi esteket szervezünk. A program minden este 18:00-kor kezdődik és éjfélig tart.</p>\n      \n      <p>A hangulatos gyertyafényes estéken házi készítésű forralt borral és punccsal várunk benneteket. Konyhánk különleges adventi finomságokat készít: mézeskalács, fahéjas alma pite és más téli csemegék kerülnek az asztalra.</p>\n      \n      <h2>Élő Zene</h2>\n      \n      <p>Minden szombat este élő zenével fokozzuk a hangulatot. Helyi művészek jazz és akusztikus feldolgozásokban adják elő a legszebb adventi dalokat, de nem maradnak el a klasszikus magyar népdalok sem.</p>\n      \n      <blockquote>\"Az advent a Zarándokházban nem csak egy esemény, hanem egy közösségi élmény, ahol barátok és idegenek találkoznak a meleg fényben.\"</blockquote>\n      \n      <h2>Foglalás és Információk</h2>\n      \n      <p>Az adventi estékre nem szükséges előzetes foglalás, de a szállás foglalásához kérjük, vegyétek fel velünk a kapcsolatot. A teljes adventi időszakban 10% kedvezményt biztosítunk a szobafoglalásokra.</p>\n      \n      <p>Várunk szeretettel minden zarándokot, aki a karácsony előtti hetekben egy kis békességre vágyik!</p>",
        date: "2025. december 1.",
        readTime: "4 perc",
        image: "/cozy-advent-candles-wine-bar-dark-atmosphere-chris.jpg",
        category: "Esemény",
        author: "Kovács Márton",
        authorImage: "/friendly-hungarian-man-portrait.jpg"
    },
    {
        id: 2,
        slug: "uj-teli-menunk-erkezett",
        title: "Új téli menünk érkezett",
        excerpt: "Meleg levesek, laktató főételek és bűnös desszertek – konyhánk téli kínálata megérkezett.",
        content: "\n\n      <p>A hideg idő beköszöntével konyhánk séfje, Tóth Bence, elkészítette az idei téli menüt, amely a hagyományos magyar ízeket modern köntösben tálalva kínálja.</p>\n      \n      <h2>Előételek és Levesek</h2>\n      \n      <p>A hideg estéken nincs is jobb, mint egy forró leves. Kínálatunkban megtalálható a klasszikus gulyásleves, a füstölt csülkös bableves és az újdonságunk, a sütőtök krémleves pirított tökmaggal.</p>\n      \n      <h2>Főételek</h2>\n      \n      <p>A főételek között szerepel a lassú tűzön főtt marhapörkölt házi nokedlivel, a ropogós kacsacomb párolt káposztával és a vegetáriánus töltött paprika.</p>\n      \n      <blockquote>\"A téli menü minden fogása a magyar konyha tiszteletére készült, de nem félünk újítani sem.\" - Tóth Bence, séf</blockquote>\n      \n      <h2>Desszertek</h2>\n      \n      <p>Desszertjeink között megtalálható a klasszikus somlói galuska, a meleg almás pite vaníliasodóval és az új kedvencünk, a sós karamellás palacsinta.</p>\n      \n      <p>A téli menü december 1-től március végéig érhető el. Asztalfoglaláshoz hívjatok minket vagy használjátok online foglalási rendszerünket!</p>\n    \n    ",
        date: "2025. november 28.",
        readTime: "3 perc",
        image: "/hungarian-winter-food-soup-hearty-meal-dark-restau.jpg",
        category: "Gasztronómia",
        author: "Nagy Eszter",
        authorImage: "/friendly-hungarian-woman-portrait-chef.jpg"
    },
    {
        id: 3,
        slug: "szilveszteri-vigilia",
        title: "Szilveszteri Vigília",
        excerpt: "Az év utolsó éjszakáját töltsd nálunk! Élő zene, tombola és éjféli pezsgő várja a zarándokokat.",
        content: "\n\n      <p>Búcsúztassuk együtt az óévet és köszöntsük az újat a Zarándokház különleges szilveszteri mulatságán!</p>\n      \n      <h2>Program</h2>\n      \n      <p>Az este 19:00-kor kezdődik üdvözlő koktéllal és könnyű harapnivalókkal. 20:00-tól ünnepi vacsora következik, majd 22:00-tól élő zene és tánc.</p>\n      \n      <h2>Tombola és Meglepetések</h2>\n      \n      <p>Éjfél előtt nagy tombolát tartunk, melynek főnyereménye egy hétvégi wellness csomag két főre! De lesz sok más nyeremény is: borok, ajándékkosarak és éttermi utalványok.</p>\n      \n      <h2>Éjféli Pezsgő</h2>\n      \n      <p>Éjfélkor pezsgővel koccintunk az új évre, közös visszaszámlálással és tűzijátékkal a teraszon (időjárás függvényében).</p>\n      \n      <p>A szilveszteri est ára: 35.000 Ft/fő, amely tartalmazza a vacsorát, a korlátlan italfogyasztást és a tombolajegyet. Szállásfoglalással kombinálva 10% kedvezmény!</p>\n      \n      <p>Helyek száma korlátozott, foglalj időben!</p>\n    \n    ",
        date: "2025. november 25.",
        readTime: "3 perc",
        image: "/new-years-eve-party-champagne-celebration-dark-ele.jpg",
        category: "Esemény",
        author: "Kovács Márton",
        authorImage: "/friendly-hungarian-man-portrait.jpg"
    },
    {
        id: 4,
        slug: "pincetura-a-borvideken",
        title: "Pincetúra a borvidéken",
        excerpt: "Csatlakozz exkluzív pincetúránkhoz! Fedezd fel a Budafoki borvidék rejtett kincseit szakértő vezetéssel.",
        content: "\n\n      <p>A Budafoki borvidék Magyarország egyik legrégebbi és legjelentősebb bortermelő területe. Most lehetőséged nyílik felfedezni a föld alatti pincerendszert és megkóstolni a régió legjobb borait.</p>\n      \n      <h2>A Túra Programja</h2>\n      \n      <p>A pincetúra minden hónap első szombatján indul a Zarándokháztól 14:00-kor. A mintegy 3 órás program során 3 pincét látogatunk meg, mindegyikben 3-4 bort kóstolunk.</p>\n      \n      <h2>Mit Láthatsz?</h2>\n      \n      <p>A Budafoki pincerendszer évszázados története során több mint 100 kilométernyi járatot vágtak a mészkőbe. Némelyik pince a török időkből származik! A túra során betekintést nyersz a hagyományos borászati módszerekbe és a modern technológiákba egyaránt.</p>\n      \n      <blockquote>\"A budafoki pincék nem csak a borok otthona, hanem Budapest rejtett kincsei is.\" - Szabó János, borszakértő</blockquote>\n      \n      <h2>Részvételi Díj</h2>\n      \n      <p>A túra ára 12.000 Ft/fő, amely tartalmazza a vezetést, a borkóstolót (10-12 bor) és egy kis hideg tálat. A Zarándokház vendégeinek 15% kedvezmény!</p>\n      \n      <p>Jelentkezés a recepción vagy online. Minimum létszám: 6 fő, maximum: 15 fő.</p>\n    \n    ",
        date: "2025. november 20.",
        readTime: "4 perc",
        image: "/wine-cellar-tour-barrels-candlelight-dark-moody.jpg",
        category: "Kirándulás",
        author: "Szabó János",
        authorImage: "/hungarian-wine-expert-man-portrait.jpg"
    },
    {
        id: 5,
        slug: "uj-kiallitas-a-galeriaban",
        title: "Új kiállítás a galériában",
        excerpt: "Kovács Anna 'Fények és Árnyékok' című kiállítása december elsejétől látható galériánkban.",
        content: "\n\n      <p>Örömmel jelentjük be, hogy december 1-jétől új kiállítás nyílik galériánkban! Kovács Anna fiatal magyar festőművész \"Fények és Árnyékok\" című tárlata január végéig tekinthető meg.</p>\n      \n      <h2>A Kiállításról</h2>\n      \n      <p>Kovács Anna munkái a fény és árnyék játékát vizsgálják különböző városi és természeti környezetben. Olajfestményei és akvarelljei egyaránt megtalálhatók a kiállításon, összesen 24 alkotás.</p>\n      \n      <h2>A Művészről</h2>\n      \n      <p>Kovács Anna 1992-ben született Budapesten. A Magyar Képzőművészeti Egyetemen végzett 2016-ban. Azóta számos hazai és nemzetközi kiállításon szerepelt munkáival. Ez az első önálló tárlata a Zarándokházban.</p>\n      \n      <blockquote>\"A fény és árnyék számomra az élet metaforája – a kettő egymás nélkül nem létezhet, és együtt teremtik meg a harmóniát.\" - Kovács Anna</blockquote>\n      \n      <h2>Megnyitó</h2>\n      \n      <p>A kiállítás ünnepélyes megnyitója december 1-jén, szombaton 17:00-kor lesz. A megnyitón a művész személyesen is jelen lesz, és rövid tárlatvezetést tart. A megnyitó után borkóstolóval és könnyű vacsorával várjuk a vendégeket.</p>\n      \n      <p>A kiállítás megtekintése ingyenes, a megnyitó eseményre regisztráció szükséges.</p>\n    \n    ",
        date: "2025. november 15.",
        readTime: "3 perc",
        image: "/art-gallery-opening-exhibition-paintings-dark-eleg.jpg",
        category: "Kultúra",
        author: "Fekete Adrienn",
        authorImage: "/hungarian-art-curator-woman-portrait.jpg"
    },
    {
        id: 6,
        slug: "borkostoloi-tanfolyam-indul",
        title: "Borkóstolói tanfolyam indul",
        excerpt: "Januárban elindul 6 részes borkóstolói tanfolyamunk kezdők és haladók számára egyaránt.",
        content: "\n\n      <p>Szeretnéd jobban megérteni a borok világát? Januártól 6 részes borkóstolói tanfolyamot indítunk, ahol az alapoktól a haladó technikákig mindent megtudhatsz!</p>\n      \n      <h2>A Tanfolyam Felépítése</h2>\n      \n      <p>A tanfolyam 6 alkalomból áll, minden csütörtökön 18:00-20:30 között. Az első három alkalom a kezdőknek szól, a második három a haladóknak – de természetesen mindenkit várunk a teljes sorozatra!</p>\n      \n      <h2>Tematika</h2>\n      \n      <p><strong>1. alkalom:</strong> A borkóstolás alapjai, a szőlőfajták<br/>\n      <strong>2. alkalom:</strong> Magyar borvidékek fehérborai<br/>\n      <strong>3. alkalom:</strong> Magyar borvidékek vörösborai<br/>\n      <strong>4. alkalom:</strong> Nemzetközi borok, összehasonlítás<br/>\n      <strong>5. alkalom:</strong> Étel-bor párosítás<br/>\n      <strong>6. alkalom:</strong> Vizsga és záró borkóstoló</p>\n      \n      <h2>Árak és Jelentkezés</h2>\n      \n      <p>A teljes tanfolyam ára: 85.000 Ft/fő (6 alkalom, alkalmanként 6-8 bor kóstolása, jegyzet). Egyéni alkalmak: 16.000 Ft/fő. A Zarándokház vendégeinek 10% kedvezmény!</p>\n      \n      <p>Jelentkezési határidő: december 20. Minimum létszám: 8 fő, maximum: 16 fő.</p>\n    \n    ",
        date: "2025. november 10.",
        readTime: "3 perc",
        image: "/wine-tasting-class-sommelier-dark-bar-elegant.jpg",
        category: "Tanfolyam",
        author: "Szabó János",
        authorImage: "/hungarian-wine-expert-man-portrait.jpg"
    },
    {
        id: 7,
        slug: "wellness-hetvege-akcio",
        title: "Wellness hétvége akció",
        excerpt: "December első hétvégéjén 20% kedvezmény a wellness szolgáltatásainkra! Foglalj most!",
        content: "\n\n      <p>December első hétvégéjén (december 6-8.) különleges wellness akcióval várunk! Minden wellness szolgáltatásunkra 20% kedvezményt biztosítunk.</p>\n      \n      <h2>Elérhető Szolgáltatások</h2>\n      \n      <p>A kedvezmény vonatkozik a szaunára, a gőzfürdőre, a masszázsokra és a pipatórium használatára is. A kedvezmény szállásfoglalás nélkül is igénybe vehető!</p>\n      \n      <h2>Masszázs Menü</h2>\n      \n      <p><strong>Relaxáló masszázs (60 perc):</strong> 12.000 Ft helyett 9.600 Ft<br/>\n      <strong>Aromaterápiás masszázs (75 perc):</strong> 15.000 Ft helyett 12.000 Ft<br/>\n      <strong>Páros masszázs (60 perc):</strong> 22.000 Ft helyett 17.600 Ft</p>\n      \n      <h2>Wellness Belépő</h2>\n      \n      <p>A wellness részleg belépő ára 6.000 Ft helyett 4.800 Ft, amely tartalmazza a szauna, gőzfürdő és pihenő használatát 3 órán keresztül.</p>\n      \n      <p>Az akció nem kombinálható más kedvezményekkel. Előzetes foglalás szükséges!</p>\n    \n    ",
        date: "2025. november 5.",
        readTime: "2 perc",
        image: "/spa-wellness-sauna-relaxation-dark-moody.jpg",
        category: "Akció",
        author: "Kiss Virág",
        authorImage: "/hungarian-wellness-therapist-woman-portrait.jpg"
    },
    {
        id: 8,
        slug: "csapatepito-programok-cegeknek",
        title: "Csapatépítő programok cégeknek",
        excerpt: "Egyedi csapatépítő programokat kínálunk cégek számára – borkóstoló, főzőtanfolyam és wellness.",
        content: "\n\n      <p>A Zarándokház nem csak magánszemélyeknek, hanem cégeknek is ideális helyszín! Egyedi csapatépítő programjainkat igényeitek szerint állítjuk össze.</p>\n      \n      <h2>Programjaink</h2>\n      \n      <p><strong>Borkóstoló verseny:</strong> Csapatok versengenek a borok felismerésében és párosításában. Szórakoztató és tanulságos egyszerre!</p>\n      \n      <p><strong>Főzőtanfolyam:</strong> Csapatokban főztök tradicionális magyar ételeket séfünk vezetésével. A végén közösen megkóstoljátok az alkotásokat!</p>\n      \n      <p><strong>Wellness & Wine:</strong> Relaxáló wellness program borkóstolóval kombinálva. Tökéletes év végi jutalom a csapatnak!</p>\n      \n      <h2>Helyszín</h2>\n      \n      <p>A programok a Zarándokház rendezvénytermében és éttermi részlegében zajlanak. Maximum 50 fő fogadására vagyunk felkészülve.</p>\n      \n      <h2>Árajánlat</h2>\n      \n      <p>Az árak a létszámtól és a választott programtól függenek. Kérjetek egyedi ajánlatot a sales@zarandokhaz.hu címen vagy hívjatok minket!</p>\n      \n      <p>Foglaljatok időben, különösen a karácsonyi időszakra!</p>\n    \n    ",
        date: "2025. november 1.",
        readTime: "4 perc",
        image: "/corporate-team-building-event-wine-tasting-group.jpg",
        category: "Üzleti",
        author: "Kovács Márton",
        authorImage: "/friendly-hungarian-man-portrait.jpg"
    }
];
function getNewsArticle(slug) {
    return allNews.find((article)=>article.slug === slug);
}
function getRelatedArticles(currentSlug, limit = 3) {
    const current = allNews.find((article)=>article.slug === currentSlug);
    if (!current) return allNews.slice(0, limit);
    return allNews.filter((article)=>article.slug !== currentSlug).sort((a, b)=>{
        if (a.category === current.category && b.category !== current.category) return -1;
        if (b.category === current.category && a.category !== current.category) return 1;
        return 0;
    }).slice(0, limit);
}
}),
"[project]/Documents/git/budafoki-zarandokhaz-web/components/related-articles.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RelatedArticles",
    ()=>RelatedArticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$news$2d$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/git/budafoki-zarandokhaz-web/lib/news-data.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function RelatedArticles({ currentSlug }) {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredId, setHoveredId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const relatedArticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$news$2d$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelatedArticles"])(currentSlug, 3);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, {
            threshold: 0.1
        });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "py-16 md:py-24 bg-card",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ease-out", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-secondary text-sm tracking-widest uppercase mb-3 block font-medium",
                            children: "További olvasnivaló"
                        }, void 0, false, {
                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/related-articles.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-serif text-3xl md:text-4xl font-bold text-foreground",
                            children: "Kapcsolódó hírek"
                        }, void 0, false, {
                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/related-articles.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/related-articles.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-6",
                    children: relatedArticles.map((article, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/hirek/${article.slug}`,
                            className: "block group",
                            onMouseEnter: ()=>setHoveredId(article.id),
                            onMouseLeave: ()=>setHoveredId(null),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-background border-border overflow-hidden h-full transition-all duration-700 ease-out hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"),
                                style: {
                                    transitionDelay: `${index * 150}ms`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-video overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: article.image || "/placeholder.svg",
                                                alt: article.title,
                                                fill: true,
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("object-cover transition-all duration-700 ease-out", hoveredId === article.id ? "scale-110" : "scale-100")
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/related-articles.tsx",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/related-articles.tsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-3 left-3 bg-muted/90 text-foreground text-xs font-medium px-2 py-1 rounded-full",
                                                children: article.category
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/related-articles.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/related-articles.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-xs text-muted-foreground mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/related-articles.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 21
                                                    }, this),
                                                    article.date
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/related-articles.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-3",
                                                children: article.title
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/related-articles.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground text-sm line-clamp-2 mb-4",
                                                children: article.excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/related-articles.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center text-primary text-sm font-medium group-hover:underline",
                                                children: [
                                                    "Elolvasom",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$git$2f$budafoki$2d$zarandokhaz$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/related-articles.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/related-articles.tsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/related-articles.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/related-articles.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this)
                        }, article.id, false, {
                            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/related-articles.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/related-articles.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/related-articles.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/git/budafoki-zarandokhaz-web/components/related-articles.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Documents_git_budafoki-zarandokhaz-web_0a488995._.js.map