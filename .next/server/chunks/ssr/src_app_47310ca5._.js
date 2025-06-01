module.exports = {

"[project]/src/app/components/ui/ResponsiveImageOverlay.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const ResponsiveOverlayImage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ src, alt, mobileSrc, tabletSrc, desktopSrc, overlayOpacity = 'bg-black/50', priority = false, className = '', overlayClassName = '', imageClassName = '', sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw', quality = 100, placeholder = 'empty', blurDataURL, fill = false, width, height, aspectRatio = 'aspect-[16/9]', children, ...props }, ref)=>{
    // Determine if we're working with SVGs or other image formats
    const isSvg = (src)=>src.toLowerCase().endsWith('.svg');
    // Get appropriate placeholder based on image type
    const getPlaceholder = (imageSrc)=>{
        return isSvg(imageSrc) ? 'empty' : placeholder;
    };
    // Determine the appropriate image source based on screen size
    const getImageSources = ()=>{
        return {
            mobile: mobileSrc || src || '',
            tablet: tabletSrc || desktopSrc || src || '',
            desktop: desktopSrc || src || ''
        };
    };
    const imageSources = desktopSrc || tabletSrc || mobileSrc ? getImageSources() : src || '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `relative overflow-hidden ${aspectRatio} ${className}`,
        ...props,
        children: [
            typeof imageSources === 'object' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: imageSources.mobile,
                        alt: alt,
                        fill: fill,
                        width: !fill ? width : undefined,
                        height: !fill ? height : undefined,
                        priority: priority,
                        quality: quality,
                        placeholder: getPlaceholder(imageSources.mobile),
                        blurDataURL: !isSvg(imageSources.mobile) ? blurDataURL : undefined,
                        sizes: sizes,
                        className: `object-cover transition-transform duration-700 ease-out hover:scale-105 md:hidden ${imageClassName}`
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ui/ResponsiveImageOverlay.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: imageSources.tablet,
                        alt: alt,
                        fill: fill,
                        width: !fill ? width : undefined,
                        height: !fill ? height : undefined,
                        priority: priority,
                        quality: quality,
                        placeholder: getPlaceholder(imageSources.tablet),
                        blurDataURL: !isSvg(imageSources.tablet) ? blurDataURL : undefined,
                        sizes: sizes,
                        className: `object-cover transition-transform duration-700 ease-out hover:scale-105 hidden md:block lg:hidden ${imageClassName}`
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ui/ResponsiveImageOverlay.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: imageSources.desktop,
                        alt: alt,
                        fill: fill,
                        width: !fill ? width : undefined,
                        height: !fill ? height : undefined,
                        priority: priority,
                        quality: quality,
                        placeholder: getPlaceholder(imageSources.desktop),
                        blurDataURL: !isSvg(imageSources.desktop) ? blurDataURL : undefined,
                        sizes: sizes,
                        className: `object-cover transition-transform duration-700 ease-out hover:scale-105 hidden lg:block ${imageClassName}`
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ui/ResponsiveImageOverlay.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /* Single Image */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: imageSources,
                alt: alt,
                fill: fill,
                width: !fill ? width : undefined,
                height: !fill ? height : undefined,
                priority: priority,
                quality: quality,
                placeholder: getPlaceholder(imageSources),
                blurDataURL: !isSvg(imageSources) ? blurDataURL : undefined,
                sizes: sizes,
                className: `object-cover transition-transform duration-700 ease-out hover:scale-105 ${imageClassName}`
            }, void 0, false, {
                fileName: "[project]/src/app/components/ui/ResponsiveImageOverlay.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 ${overlayOpacity} transition-opacity duration-300 hover:bg-black/40 ${overlayClassName}`,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/app/components/ui/ResponsiveImageOverlay.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-10 flex items-center justify-center p-4 sm:p-6 lg:p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-white",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ui/ResponsiveImageOverlay.tsx",
                    lineNumber: 156,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/ui/ResponsiveImageOverlay.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/ui/ResponsiveImageOverlay.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
});
ResponsiveOverlayImage.displayName = 'ResponsiveOverlayImage';
const __TURBOPACK__default__export__ = ResponsiveOverlayImage // Type-safe usage examples with your SVG assets:
 /*
// Hero Section with your responsive SVG assets
<ResponsiveOverlayImage
  mobileSrc="/assets/hero-home-mobile.svg"
  tabletSrc="/assets/hero-home-laptop.svg"
  desktopSrc="/assets/hero-home-desktop.svg"
  alt="Hero home background"
  fill
  priority
  className="h-screen"
  // No need to specify quality or placeholder - defaults are optimized for SVG
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
      Welcome Home
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
      Experience premium design that adapts perfectly to every device
    </p>
    <div className="mt-8">
      <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        Get Started
      </button>
    </div>
  </div>
</ResponsiveOverlayImage>

// Alternative layout with gradient overlay
<ResponsiveOverlayImage
  mobileSrc="/assets/hero-home-mobile.svg"
  tabletSrc="/assets/hero-home-laptop.svg"
  desktopSrc="/assets/hero-home-desktop.svg"
  alt="Hero section"
  fill
  priority
  overlayOpacity="bg-gradient-to-r from-black/70 via-black/50 to-black/30"
  className="h-[80vh] md:h-screen"
>
  <div className="text-left max-w-2xl ml-8 md:ml-16 lg:ml-24">
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
      Your Brand
    </h1>
    <p className="text-base md:text-lg lg:text-xl opacity-90 mb-8">
      Crafted for excellence across all platforms
    </p>
    <div className="space-x-4">
      <button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100">
        Learn More
      </button>
      <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-black transition-colors">
        Contact Us
      </button>
    </div>
  </div>
</ResponsiveOverlayImage>

// Section with custom aspect ratio
<ResponsiveOverlayImage
  mobileSrc="/assets/hero-home-mobile.svg"
  tabletSrc="/assets/hero-home-laptop.svg"
  desktopSrc="/assets/hero-home-desktop.svg"
  alt="Featured section"
  fill
  overlayOpacity="bg-black/40"
  className="h-96 md:h-[500px] lg:h-[600px] rounded-2xl"
  imageClassName="rounded-2xl"
  overlayClassName="rounded-2xl"
>
  <div className="text-center">
    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
      Featured Content
    </h2>
    <p className="text-sm md:text-base lg:text-lg opacity-80 max-w-xl mx-auto">
      Premium SVG graphics optimized for crisp display at any resolution
    </p>
  </div>
</ResponsiveOverlayImage>
*/ ;
}}),
"[project]/src/app/film-test/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$ResponsiveImageOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/ResponsiveImageOverlay.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$ResponsiveImageOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            mobileSrc: "/assets/hero-home-mobile.svg",
            tabletSrc: "/assets/hero-home-laptop.svg",
            desktopSrc: "/assets/hero-home-desktop.svg",
            alt: "Hero home background",
            fill: true,
            priority: true,
            overlayOpacity: "bg-black/50",
            className: "h-screen",
            quality: 100,
            sizes: "100vw"
        }, void 0, false, {
            fileName: "[project]/src/app/film-test/page.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/film-test/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_app_47310ca5._.js.map