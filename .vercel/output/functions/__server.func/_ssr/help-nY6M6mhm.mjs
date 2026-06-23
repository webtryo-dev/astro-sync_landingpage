import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as FAQ } from "./FAQ-B-6kfLJR.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Nav, t as Footer } from "./Footer-B4WzUf9B.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/help-nY6M6mhm.js
var import_jsx_runtime = require_jsx_runtime();
function HelpPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 pb-24 md:pb-32 pt-8 md:pt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-3xl px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4 transition-colors",
							children: "← Back to Home"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mx-auto max-w-3xl px-6 mt-16 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-10 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl font-semibold text-foreground mb-4",
									children: "Still need help?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground mb-8",
									children: "Our support team is always ready to help you get your products live on TikTok Shop."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:help@astrosync.io",
									className: "inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]",
									children: "Email us at help@astrosync.io"
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { HelpPage as component };
