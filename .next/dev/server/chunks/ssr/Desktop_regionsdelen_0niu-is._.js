module.exports = [
"[project]/Desktop/regionsdelen/lib/supabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase,
    "supabaseAdmin",
    ()=>supabaseAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/regionsdelen/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const url = ("TURBOPACK compile-time value", "https://ymqbimerrvycbknstsai.supabase.co");
const anon = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltcWJpbWVycnZ5Y2JrbnN0c2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NDQ5NzQsImV4cCI6MjA4OTQyMDk3NH0.Mr6CwgIStko7EhGT8NUIArelJn3P208PB7zYO1uuXlg");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(url, anon);
const supabaseAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(url, anon);
}),
"[project]/Desktop/regionsdelen/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/regionsdelen/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/regionsdelen/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/regionsdelen/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/regionsdelen/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function HomePage() {
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [companies, setCompanies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const PAGE_SIZE = 50;
    const search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (q, p)=>{
        setLoading(true);
        let req = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('aesamtable').select('kundid,namn,firma,orgnummer,postort,lan,branschid,webb,infotext', {
            count: 'exact'
        }).range(p * PAGE_SIZE, p * PAGE_SIZE + PAGE_SIZE - 1).order('namn', {
            ascending: true
        });
        if (q.trim()) {
            req = req.or(`namn.ilike.%${q}%,firma.ilike.%${q}%,orgnummer.ilike.%${q}%,postort.ilike.%${q}%`);
        }
        const { data, count, error } = await req;
        if (!error) {
            setCompanies(data || []);
            setTotal(count);
        }
        setLoading(false);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = setTimeout(()=>{
            setPage(0);
            search(query, 0);
        }, 300);
        return ()=>clearTimeout(t);
    }, [
        query,
        search
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        search(query, page);
    }, [
        page
    ]);
    const name = (c)=>c.namn || c.firma || '(inget namn)';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            background: 'var(--bg)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    background: 'var(--surface)',
                    borderBottom: '1px solid var(--border)',
                    padding: '0 24px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1200,
                        margin: '0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: 60
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 32,
                                        height: 32,
                                        background: 'var(--accent)',
                                        borderRadius: 8,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#fff',
                                            fontWeight: 700,
                                            fontSize: 14
                                        },
                                        children: "R"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontWeight: 600,
                                        fontSize: 16
                                    },
                                    children: "Regionsdelen"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin",
                            style: {
                                background: 'var(--accent)',
                                color: '#fff',
                                padding: '8px 16px',
                                borderRadius: 8,
                                fontSize: 14,
                                fontWeight: 500,
                                textDecoration: 'none'
                            },
                            children: "CRM Admin →"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'var(--surface)',
                    borderBottom: '1px solid var(--border)',
                    padding: '40px 24px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 700,
                        margin: '0 auto',
                        textAlign: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: 32,
                                fontWeight: 600,
                                marginBottom: 8
                            },
                            children: "Företagskatalog"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: 'var(--muted)',
                                marginBottom: 24
                            },
                            children: total !== null ? `${total.toLocaleString('sv-SE')} företag` : 'Laddar...'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Sök på företagsnamn, orgnummer, ort...",
                            value: query,
                            onChange: (e)=>setQuery(e.target.value),
                            style: {
                                width: '100%',
                                padding: '14px 20px',
                                fontSize: 16,
                                border: '2px solid var(--border)',
                                borderRadius: 12,
                                outline: 'none',
                                fontFamily: 'inherit',
                                boxSizing: 'border-box'
                            },
                            onFocus: (e)=>e.target.style.borderColor = 'var(--accent)',
                            onBlur: (e)=>e.target.style.borderColor = 'var(--border)'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1200,
                    margin: '0 auto',
                    padding: '24px'
                },
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        padding: 60,
                        color: 'var(--muted)'
                    },
                    children: "Laddar..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                    lineNumber: 76,
                    columnNumber: 20
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))',
                                gap: 16
                            },
                            children: companies.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/admin?id=${c.kundid}`,
                                    style: {
                                        textDecoration: 'none'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'var(--surface)',
                                            border: '1px solid var(--border)',
                                            borderRadius: 12,
                                            padding: 20,
                                            cursor: 'pointer'
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.borderColor = 'var(--accent)';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.borderColor = 'var(--border)';
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 44,
                                                            height: 44,
                                                            borderRadius: 10,
                                                            background: 'var(--accent-light)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            flexShrink: 0,
                                                            fontSize: 18,
                                                            fontWeight: 600,
                                                            color: 'var(--accent)'
                                                        },
                                                        children: name(c).charAt(0).toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            flex: 1,
                                                            minWidth: 0
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: 600,
                                                                    fontSize: 15,
                                                                    marginBottom: 2,
                                                                    whiteSpace: 'nowrap',
                                                                    overflow: 'hidden',
                                                                    textOverflow: 'ellipsis'
                                                                },
                                                                children: name(c)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                                                                lineNumber: 89,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 13,
                                                                    color: 'var(--muted)'
                                                                },
                                                                children: [
                                                                    c.postort,
                                                                    c.lan
                                                                ].filter(Boolean).join(' · ')
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                                                                lineNumber: 90,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginTop: 12,
                                                    display: 'flex',
                                                    gap: 8,
                                                    flexWrap: 'wrap'
                                                },
                                                children: [
                                                    c.orgnummer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 12,
                                                            background: 'var(--bg)',
                                                            border: '1px solid var(--border)',
                                                            borderRadius: 6,
                                                            padding: '2px 8px',
                                                            color: 'var(--muted)'
                                                        },
                                                        children: c.orgnummer
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 39
                                                    }, this),
                                                    c.branschid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 12,
                                                            background: 'var(--accent-light)',
                                                            border: '1px solid #bfdbfe',
                                                            borderRadius: 6,
                                                            padding: '2px 8px',
                                                            color: 'var(--accent)'
                                                        },
                                                        children: [
                                                            "SNI ",
                                                            c.branschid
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 39
                                                    }, this),
                                                    c.webb && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 12,
                                                            background: '#f0fdf4',
                                                            border: '1px solid #bbf7d0',
                                                            borderRadius: 6,
                                                            padding: '2px 8px',
                                                            color: '#15803d'
                                                        },
                                                        children: "Webb"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 34
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 21
                                            }, this),
                                            c.infotext && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    marginTop: 10,
                                                    fontSize: 13,
                                                    color: 'var(--muted)',
                                                    lineHeight: 1.5,
                                                    overflow: 'hidden',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical'
                                                },
                                                children: c.infotext
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 36
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 19
                                    }, this)
                                }, c.kundid, false, {
                                    fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this),
                        total !== null && total > PAGE_SIZE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 12,
                                marginTop: 32
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPage((p)=>Math.max(0, p - 1)),
                                    disabled: page === 0,
                                    style: {
                                        padding: '8px 20px',
                                        borderRadius: 8,
                                        border: '1px solid var(--border)',
                                        background: 'var(--surface)',
                                        cursor: 'pointer',
                                        fontSize: 14,
                                        fontFamily: 'inherit'
                                    },
                                    children: "← Föregående"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'var(--muted)',
                                        fontSize: 14
                                    },
                                    children: [
                                        "Sida ",
                                        page + 1,
                                        " av ",
                                        Math.ceil(total / PAGE_SIZE).toLocaleString('sv-SE')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$regionsdelen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPage((p)=>p + 1),
                                    disabled: (page + 1) * PAGE_SIZE >= total,
                                    style: {
                                        padding: '8px 20px',
                                        borderRadius: 8,
                                        border: '1px solid var(--border)',
                                        background: 'var(--surface)',
                                        cursor: 'pointer',
                                        fontSize: 14,
                                        fontFamily: 'inherit'
                                    },
                                    children: "Nästa →"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                            lineNumber: 104,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/regionsdelen/app/page.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_regionsdelen_0niu-is._.js.map