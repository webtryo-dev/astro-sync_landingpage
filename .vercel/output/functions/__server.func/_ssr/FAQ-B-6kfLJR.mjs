import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/gsap+gsap__react+react.mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, s as require_jsx_runtime, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as ChevronDown } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FAQ-B-6kfLJR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var items = [
	{
		q: "What does AstroSync actually do?",
		a: "AstroSync is a Shopify app that uses AI to scan your product catalog, identify issues that prevent products from being eligible on TikTok Shop, and automatically fix them — titles, descriptions, images, categories, attributes and policy compliance."
	},
	{
		q: "Do I need a TikTok Shop account already?",
		a: "Yes — you'll need a TikTok Shop seller account. AstroSync prepares your Shopify catalog and pushes compliant products to TikTok Shop via the official integration."
	},
	{
		q: "Will AstroSync edit my Shopify products without asking?",
		a: "By default no. Every fix requires your approval. You can enable auto-fix per category (e.g. only image fixes) or fully automatic mode once you trust the recommendations."
	},
	{
		q: "How fast is the initial scan?",
		a: "For a typical catalog of 500 products, the initial AI scan completes in 3–5 minutes. Auto-fixes apply in batches of ~100 products per minute."
	},
	{
		q: "Can I cancel anytime?",
		a: "Yes. The trial is free for 14 days with no credit card. After that you can cancel from your Shopify admin in one click — no contracts."
	}
];
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "bg-secondary/30 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-accent",
					children: "FAQ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 text-4xl font-semibold tracking-tight md:text-5xl",
					children: [
						"Questions, ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display italic",
							children: "answered"
						}),
						"."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "mt-12 w-full",
				children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `item-${i}`,
					className: "border-b border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "py-5 text-left text-base font-medium hover:no-underline",
						children: it.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "pb-5 text-muted-foreground",
						children: it.a
					})]
				}, i))
			})]
		})
	});
}
//#endregion
export { FAQ as t };
