import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/gsap+gsap__react+react.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-TivX5SqN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CwVplPVK.css";
var favicon_default = "data:image/png;base64,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";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "AstroSync AI" },
			{
				name: "description",
				content: "TikTok Shop compliance for Shopify, powered by AI."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/png",
				href: favicon_default
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;1,500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$3 = () => import("./tos-BEQLOUhc.mjs");
var Route$3 = createFileRoute("/tos")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./privacy-B_C56GTA.mjs");
var Route$2 = createFileRoute("/privacy")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./help-nY6M6mhm.mjs");
var Route$1 = createFileRoute("/help")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./routes-CbdO5M9R.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "AstroSync AI — TikTok Shop compliance for Shopify" },
		{
			name: "description",
			content: "AstroSync installs on your Shopify store, scans your catalog with AI, and auto-fixes the issues blocking products from TikTok Shop."
		},
		{
			property: "og:title",
			content: "AstroSync AI — TikTok Shop compliance for Shopify"
		},
		{
			property: "og:description",
			content: "Auto-fix titles, images, categories and attributes so every Shopify product is TikTok Shop ready."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var TosRoute = Route$3.update({
	id: "/tos",
	path: "/tos",
	getParentRoute: () => Route$4
});
var PrivacyRoute = Route$2.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$4
});
var HelpRoute = Route$1.update({
	id: "/help",
	path: "/help",
	getParentRoute: () => Route$4
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	HelpRoute,
	PrivacyRoute,
	TosRoute
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
