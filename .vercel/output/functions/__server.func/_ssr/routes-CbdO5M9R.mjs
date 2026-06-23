import { r as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, r as require_react, t as useGSAP } from "../_libs/gsap+gsap__react+react.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Check, n as Users, o as Activity, r as Sparkles, t as Waypoints } from "../_libs/lucide-react.mjs";
import { t as FAQ } from "./FAQ-B-6kfLJR.mjs";
import { n as Logo, r as Nav, t as Footer } from "./Footer-B4WzUf9B.mjs";
import { t as ScrollTrigger } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CbdO5M9R.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var dashboard_hero_default = "/assets/dashboard-hero-Bue0htXU.jpg";
gsapWithCSS.registerPlugin(useGSAP);
function Hero() {
	const container = (0, import_react.useRef)(null);
	const cloud1 = (0, import_react.useRef)(null);
	const cloud2 = (0, import_react.useRef)(null);
	const cloud3 = (0, import_react.useRef)(null);
	const cloud4 = (0, import_react.useRef)(null);
	useGSAP(() => {
		gsapWithCSS.to(cloud1.current, {
			x: 30,
			y: -10,
			duration: 7,
			yoyo: true,
			repeat: -1,
			ease: "sine.inOut"
		});
		gsapWithCSS.to(cloud2.current, {
			x: -40,
			y: 12,
			duration: 9,
			yoyo: true,
			repeat: -1,
			ease: "sine.inOut"
		});
		gsapWithCSS.to(cloud3.current, {
			x: 50,
			duration: 11,
			yoyo: true,
			repeat: -1,
			ease: "sine.inOut"
		});
		gsapWithCSS.to(cloud4.current, {
			x: -30,
			y: -8,
			duration: 8,
			yoyo: true,
			repeat: -1,
			ease: "sine.inOut"
		});
		gsapWithCSS.timeline({ defaults: { ease: "power3.out" } }).fromTo(".hero-badge", {
			opacity: 0,
			y: 15
		}, {
			opacity: 1,
			y: 0,
			duration: .8
		}).fromTo(".hero-title", {
			opacity: 0,
			y: 25
		}, {
			opacity: 1,
			y: 0,
			duration: .8
		}, "-=0.6").fromTo(".hero-subtitle", {
			opacity: 0,
			y: 20
		}, {
			opacity: 1,
			y: 0,
			duration: .8
		}, "-=0.6").fromTo(".hero-cta", {
			opacity: 0,
			y: 15
		}, {
			opacity: 1,
			y: 0,
			duration: .6,
			stagger: .1
		}, "-=0.6").fromTo(".hero-image", {
			opacity: 0,
			y: 40,
			scale: .96
		}, {
			opacity: 1,
			y: 0,
			scale: 1,
			duration: 1.2,
			ease: "power4.out"
		}, "-=0.4");
		gsapWithCSS.utils.toArray(".btn-primary").forEach((btn) => {
			btn.addEventListener("mouseenter", () => gsapWithCSS.to(btn, {
				scale: 1.05,
				duration: .2,
				ease: "back.out(2)"
			}));
			btn.addEventListener("mouseleave", () => gsapWithCSS.to(btn, {
				scale: 1,
				duration: .2,
				ease: "power2.out"
			}));
		});
	}, { scope: container });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: container,
		className: "relative overflow-hidden bg-sky-hero pb-24 pt-16 md:pb-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 -z-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: cloud1,
					className: "absolute left-[8%] top-[18%] h-32 w-64 rounded-full bg-white cloud-blur"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: cloud2,
					className: "absolute right-[6%] top-[28%] h-40 w-72 rounded-full bg-white cloud-blur"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: cloud3,
					className: "absolute left-[20%] top-[55%] h-24 w-48 rounded-full bg-white cloud-blur opacity-50"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: cloud4,
					className: "absolute right-[18%] bottom-[20%] h-28 w-56 rounded-full bg-[oklch(0.95_0.05_60)] cloud-blur opacity-60"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-badge mx-auto inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-success" }), "Seamless Shopify ↔ TikTok Shop Integration"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "hero-title mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl",
					children: [
						"You ship your products. ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
						" AstroSync handles your",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display italic text-gradient",
							children: "TikTok\xA0Shop."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hero-subtitle mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg",
					children: "A completely frictionless, all-in-one catalog synchronization software. No external portals. Install directly on Shopify and let our AI optimize, map, and auto-fix your entire product catalog for TikTok Shop's algorithm."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-9 flex flex-wrap items-center justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#pricing",
						className: "hero-cta btn-primary inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]",
						children: "Install on Shopify"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#features",
						className: "hero-cta inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-white",
						children: "See how it works"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hero-cta mt-4 text-xs text-muted-foreground",
					children: "Plans from $19.99/mo · Cancel anytime"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-image relative mx-auto mt-16 max-w-5xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-10 top-10 -z-10 h-64 rounded-full bg-primary/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl border border-border/60 bg-card shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: dashboard_hero_default,
							alt: "AstroSync dashboard scanning Shopify products for TikTok Shop eligibility",
							width: 1600,
							height: 1100,
							className: "w-full"
						})
					})]
				})
			]
		})]
	});
}
gsapWithCSS.registerPlugin(useGSAP);
var brands = [
	"NOVA",
	"Lumen&Co",
	"Drift",
	"Atlas Goods",
	"Halo",
	"Vertex",
	"Pebble",
	"Aura",
	"Zenith",
	"Quantum"
];
function LogoStrip() {
	const container = (0, import_react.useRef)(null);
	const trackRef = (0, import_react.useRef)(null);
	useGSAP(() => {
		if (trackRef.current) {
			const trackWidth = trackRef.current.scrollWidth / 2;
			gsapWithCSS.to(trackRef.current, {
				x: `-=${trackWidth}`,
				ease: "none",
				duration: 30,
				repeat: -1,
				modifiers: { x: gsapWithCSS.utils.unitize((x) => parseFloat(x) % trackWidth) }
			});
		}
	}, { scope: container });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: container,
		className: "border-y border-border/20 bg-background py-10 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground/60",
				children: "Trusted by high-volume Shopify merchants"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-8 flex overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: trackRef,
						className: "flex w-max items-center gap-16 px-8 opacity-60",
						children: [...brands, ...brands].map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-4xl md:text-5xl font-medium tracking-tight text-muted-foreground transition-colors hover:text-foreground",
							children: b
						}, `${b}-${i}`))
					})
				]
			})]
		})
	});
}
gsapWithCSS.registerPlugin(useGSAP, ScrollTrigger);
var features = [
	{
		icon: Waypoints,
		title: "Smart Variant Mapping",
		body: "Intelligently maps an existing Shopify product taxonomy to TikTok's strict category and variant requirements automatically."
	},
	{
		icon: Sparkles,
		title: "AI-Powered Copywriting",
		body: "Leverages OpenAI to instantly rewrite, optimize, and format product descriptions to maximize conversions for the TikTok algorithm."
	},
	{
		icon: Activity,
		title: "Live XML Feeds & Real-Time Sync",
		body: "Native API connections ensure inventory, pricing, and new variants are always up to date across platforms without manual intervention."
	},
	{
		icon: Users,
		title: "Realtime Collaboration",
		body: "Built-in team communication features (comments, messages, and project chats) to keep marketing and operations teams perfectly aligned."
	}
];
function Features() {
	const container = (0, import_react.useRef)(null);
	useGSAP(() => {
		const cards = gsapWithCSS.utils.toArray(".feature-card");
		gsapWithCSS.fromTo(".features-header", {
			opacity: 0,
			y: 30
		}, {
			opacity: 1,
			y: 0,
			duration: .8,
			scrollTrigger: {
				trigger: ".features-header",
				start: "top 85%"
			}
		});
		gsapWithCSS.fromTo(cards, {
			opacity: 0,
			y: 50
		}, {
			opacity: 1,
			y: 0,
			duration: .6,
			stagger: .1,
			scrollTrigger: {
				trigger: ".features-grid",
				start: "top 80%"
			}
		});
		cards.forEach((card) => {
			card.addEventListener("mouseenter", () => {
				gsapWithCSS.to(card, {
					y: -8,
					duration: .3,
					ease: "power2.out"
				});
				gsapWithCSS.to(card.querySelector(".feature-icon"), {
					scale: 1.15,
					rotate: 5,
					duration: .3,
					ease: "back.out(2)"
				});
			});
			card.addEventListener("mouseleave", () => {
				gsapWithCSS.to(card, {
					y: 0,
					duration: .3,
					ease: "power2.out"
				});
				gsapWithCSS.to(card.querySelector(".feature-icon"), {
					scale: 1,
					rotate: 0,
					duration: .3,
					ease: "power2.out"
				});
			});
		});
	}, { scope: container });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "features",
		ref: container,
		className: "bg-background py-24 md:py-32 relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "features-header mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold uppercase tracking-[0.2em] text-accent",
						children: "Core Features"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-4xl font-semibold tracking-tight md:text-5xl",
						children: [
							"Everything you need to stay ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display italic text-primary",
								children: "eligible"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground text-lg",
						children: "Stop manually editing products to please TikTok Shop's reviewers. AstroSync handles the entire compliance loop in the background."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "features-grid mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2",
				children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "feature-card group bg-card p-8 md:p-10 transition-colors hover:bg-secondary/40 cursor-pointer",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "feature-icon grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "size-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-8 text-xl font-semibold text-foreground",
							children: f.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base leading-relaxed text-muted-foreground",
							children: f.body
						})
					]
				}, f.title))
			})]
		})
	});
}
gsapWithCSS.registerPlugin(useGSAP, ScrollTrigger);
var steps = [
	{
		n: "01",
		title: "Install on Shopify",
		body: "One-click install from the Shopify App Store. AstroSync connects to your catalog in under 30 seconds, seamlessly."
	},
	{
		n: "02",
		title: "AI scans every product",
		body: "Our model reviews titles, descriptions, images, categories and attributes against TikTok Shop's strict eligibility rules."
	},
	{
		n: "03",
		title: "Review & auto-fix",
		body: "Approve fixes individually, or let AstroSync apply them automatically. Push the compliant catalog straight to TikTok Shop."
	}
];
function HowItWorks() {
	const container = (0, import_react.useRef)(null);
	useGSAP(() => {
		const cards = gsapWithCSS.utils.toArray(".step-card");
		gsapWithCSS.fromTo(".how-header", {
			opacity: 0,
			y: 30
		}, {
			opacity: 1,
			y: 0,
			duration: .8,
			scrollTrigger: {
				trigger: ".how-header",
				start: "top 85%"
			}
		});
		gsapWithCSS.fromTo(cards, {
			opacity: 0,
			x: -30
		}, {
			opacity: 1,
			x: 0,
			duration: .6,
			stagger: .2,
			ease: "power2.out",
			scrollTrigger: {
				trigger: ".steps-grid",
				start: "top 80%"
			}
		});
		cards.forEach((card) => {
			card.addEventListener("mouseenter", () => {
				gsapWithCSS.to(card, {
					y: -8,
					backgroundColor: "rgba(255,255,255,0.08)",
					duration: .3,
					ease: "back.out(2)"
				});
			});
			card.addEventListener("mouseleave", () => {
				gsapWithCSS.to(card, {
					y: 0,
					backgroundColor: "rgba(255,255,255,0.05)",
					duration: .3,
					ease: "power2.out"
				});
			});
		});
	}, { scope: container });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "how",
		ref: container,
		className: "relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0 opacity-[0.08]",
			"aria-hidden": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-20 top-20 size-80 rounded-full bg-accent blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 bottom-0 size-96 rounded-full bg-white blur-3xl" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "how-header mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-accent",
					children: "How it works"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 text-4xl font-semibold tracking-tight md:text-5xl",
					children: [
						"From install to ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display italic",
							children: "approved"
						}),
						" in minutes."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "steps-grid mt-14 grid gap-6 md:grid-cols-3",
				children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "step-card rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-5xl text-accent",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-xl font-semibold",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-white/70",
							children: s.body
						})
					]
				}, s.n))
			})]
		})]
	});
}
gsapWithCSS.registerPlugin(useGSAP, ScrollTrigger);
var stats = [
	{
		k: 4200,
		suffix: "+",
		v: "Shopify stores"
	},
	{
		k: 1.8,
		suffix: "M",
		v: "Products auto-fixed",
		isFloat: true
	},
	{
		k: 94,
		suffix: "%",
		v: "Approval rate"
	},
	{
		k: 12,
		suffix: " min",
		v: "Avg. time saved per product"
	}
];
function Stats() {
	const container = (0, import_react.useRef)(null);
	const counters = (0, import_react.useRef)([]);
	useGSAP(() => {
		gsapWithCSS.fromTo(".stat-item", {
			opacity: 0,
			y: 30
		}, {
			opacity: 1,
			y: 0,
			duration: .6,
			stagger: .15,
			scrollTrigger: {
				trigger: container.current,
				start: "top 85%"
			}
		});
		counters.current.forEach((counter, i) => {
			if (!counter) return;
			const targetData = stats[i];
			const obj = { val: 0 };
			gsapWithCSS.to(obj, {
				val: targetData.k,
				duration: 2,
				ease: "power2.out",
				scrollTrigger: {
					trigger: counter,
					start: "top 85%"
				},
				onUpdate: () => {
					let formattedValue = targetData.isFloat ? obj.val.toFixed(1) : Math.floor(obj.val).toString();
					if (!targetData.isFloat && targetData.k >= 1e3) formattedValue = Math.floor(obj.val).toLocaleString();
					counter.innerText = formattedValue;
				}
			});
		});
	}, { scope: container });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: container,
		className: "bg-background py-20 relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto grid max-w-7xl grid-cols-2 gap-y-12 gap-x-8 px-6 md:grid-cols-4",
			children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stat-item flex flex-col items-center text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						ref: (el) => counters.current[i] = el,
						className: "font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl",
						children: "0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-4xl font-bold tracking-tight text-primary md:text-5xl ml-1",
						children: s.suffix
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 text-sm font-medium text-muted-foreground max-w-[140px] leading-snug",
					children: s.v
				})]
			}, s.v))
		})]
	});
}
gsapWithCSS.registerPlugin(useGSAP, ScrollTrigger);
var quotes = [
	{
		q: "We had 600 products rejected from TikTok Shop. AstroSync fixed 94% of them in a single afternoon. Sales went live the next morning.",
		a: "Priya Shah",
		r: "Founder, Lumen&Co"
	},
	{
		q: "It's the only tool that actually understands TikTok Shop's category requirements. Saved our ops team weeks of manual editing.",
		a: "Marcus Lee",
		r: "Head of Ecom, Atlas Goods"
	},
	{
		q: "Install, scan, approve. That was the entire onboarding. Two days later we were live on TikTok Shop with our full catalog.",
		a: "Jules Martin",
		r: "Director, Drift Apparel"
	}
];
function Testimonials() {
	const container = (0, import_react.useRef)(null);
	useGSAP(() => {
		const cards = gsapWithCSS.utils.toArray(".testimonial-card");
		gsapWithCSS.fromTo(".testimonials-header", {
			opacity: 0,
			y: 30
		}, {
			opacity: 1,
			y: 0,
			duration: .8,
			scrollTrigger: {
				trigger: ".testimonials-header",
				start: "top 85%"
			}
		});
		gsapWithCSS.fromTo(cards, {
			opacity: 0,
			y: 40
		}, {
			opacity: 1,
			y: 0,
			duration: .6,
			stagger: .15,
			ease: "power2.out",
			scrollTrigger: {
				trigger: ".testimonials-grid",
				start: "top 80%"
			}
		});
		cards.forEach((card) => {
			card.addEventListener("mouseenter", () => {
				gsapWithCSS.to(card, {
					y: -5,
					duration: .3,
					ease: "back.out(2)"
				});
			});
			card.addEventListener("mouseleave", () => {
				gsapWithCSS.to(card, {
					y: 0,
					duration: .3,
					ease: "power2.out"
				});
			});
		});
	}, { scope: container });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: container,
		className: "bg-secondary/30 py-24 md:py-32 relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "testimonials-header max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl text-foreground",
				children: [
					"Merchants ship to TikTok Shop ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display italic text-accent",
						children: "faster"
					}),
					"."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "testimonials-grid mt-16 grid gap-6 md:grid-cols-3",
				children: quotes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "testimonial-card flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "text-base leading-relaxed text-foreground",
						children: [
							"\"",
							t.q,
							"\""
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-8 flex items-center gap-4 border-t border-border pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-10 rounded-full bg-primary/10 grid place-items-center font-bold text-primary",
							children: t.a.charAt(0)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold text-foreground",
							children: t.a
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground",
							children: t.r
						})] })]
					})]
				}, t.a))
			})]
		})
	});
}
gsapWithCSS.registerPlugin(useGSAP, ScrollTrigger);
var tiers = [
	{
		name: "Starter",
		price: "$19.99",
		cadence: "/month",
		yearly: "or $199/year",
		desc: "For new stores testing TikTok Shop.",
		features: [
			"50 AI Fix Credits per month",
			"Basic taxonomy mapping",
			"Email support"
		],
		cta: "Get Starter",
		featured: false
	},
	{
		name: "Growth",
		price: "$49.99",
		cadence: "/month",
		yearly: "or $499/year",
		desc: "For stores actively selling on TikTok Shop.",
		features: [
			"250 AI Fix Credits per month",
			"Standard sync speed",
			"Advanced checklists",
			"Priority email support"
		],
		cta: "Get Growth",
		featured: false
	},
	{
		name: "Pro",
		price: "$149.99",
		cadence: "/month",
		yearly: "or $1,499/year",
		desc: "Best value for scaling brands.",
		features: [
			"1,000 AI Fix Credits per month",
			"Priority sync speed",
			"Custom prompting rules",
			"Dedicated chat support"
		],
		cta: "Get Pro",
		featured: true,
		badge: "Best value"
	},
	{
		name: "Enterprise",
		price: "Custom",
		cadence: "",
		yearly: "Volume pricing",
		desc: "Unlimited access for large teams.",
		features: [
			"Unlimited AI Fix Credits",
			"Multi-store management",
			"Dedicated account manager",
			"Custom API access"
		],
		cta: "Talk to sales",
		featured: false
	}
];
function Pricing() {
	const container = (0, import_react.useRef)(null);
	useGSAP(() => {
		const cards = gsapWithCSS.utils.toArray(".pricing-card");
		gsapWithCSS.fromTo(".pricing-header", {
			opacity: 0,
			y: 30
		}, {
			opacity: 1,
			y: 0,
			duration: .8,
			scrollTrigger: {
				trigger: ".pricing-header",
				start: "top 85%"
			}
		});
		gsapWithCSS.fromTo(cards, {
			opacity: 0,
			y: 40
		}, {
			opacity: 1,
			y: 0,
			duration: .6,
			stagger: .1,
			scrollTrigger: {
				trigger: ".pricing-grid",
				start: "top 80%"
			}
		});
		cards.forEach((card) => {
			card.addEventListener("mouseenter", () => {
				gsapWithCSS.to(card, {
					y: -10,
					scale: 1.02,
					duration: .3,
					ease: "back.out(2)"
				});
			});
			card.addEventListener("mouseleave", () => {
				gsapWithCSS.to(card, {
					y: 0,
					scale: 1,
					duration: .3,
					ease: "power2.out"
				});
			});
		});
	}, { scope: container });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		ref: container,
		className: "bg-background py-24 md:py-32 relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pricing-header mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold uppercase tracking-[0.2em] text-accent",
						children: "Pricing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-4xl font-semibold tracking-tight md:text-5xl",
						children: [
							"Simple plans that ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display italic text-accent",
								children: "scale"
							}),
							" with you."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground text-lg",
						children: "Pick the plan that matches your catalog size. Switch or cancel anytime."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pricing-grid mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
				children: tiers.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `pricing-card relative flex flex-col rounded-3xl p-6 md:p-8 transition-colors ${t.featured ? "border-2 border-primary bg-primary text-primary-foreground shadow-glow" : "border border-border bg-card shadow-soft hover:border-primary/50"}`,
					children: [
						t.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-lg",
							children: t.badge
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-semibold",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-2 text-sm min-h-[40px] ${t.featured ? "text-white/70" : "text-muted-foreground"}`,
								children: t.desc
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex items-baseline gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-5xl font-bold tracking-tight",
								children: t.price
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-sm font-medium ${t.featured ? "text-white/70" : "text-muted-foreground"}`,
								children: t.cadence
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `text-sm mb-8 ${t.featured ? "text-white/60" : "text-muted-foreground"}`,
							children: t.yearly
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#install",
							className: `mt-auto inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.01] ${t.featured ? "bg-white text-primary shadow-md" : "bg-primary text-primary-foreground"}`,
							children: t.cta
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 pt-8 border-t border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-4 text-sm",
								children: t.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `mt-0.5 grid size-5 place-items-center rounded-full`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: `size-3.5 ${t.featured ? "text-accent" : "text-success"}`,
											strokeWidth: 3
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `${t.featured ? "text-white/90" : "text-foreground"} leading-tight`,
										children: f
									})]
								}, f))
							})
						})
					]
				}, t.name))
			})]
		})
	});
}
gsapWithCSS.registerPlugin(useGSAP, ScrollTrigger);
function CTA() {
	const container = (0, import_react.useRef)(null);
	useGSAP(() => {
		gsapWithCSS.fromTo(".cta-content", {
			opacity: 0,
			scale: .95,
			y: 30
		}, {
			opacity: 1,
			scale: 1,
			y: 0,
			duration: .8,
			ease: "power3.out",
			scrollTrigger: {
				trigger: container.current,
				start: "top 80%"
			}
		});
		gsapWithCSS.to(".cta-glow", {
			scale: 1.1,
			opacity: .6,
			duration: 4,
			yoyo: true,
			repeat: -1,
			ease: "sine.inOut"
		});
	}, { scope: container });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "install",
		ref: container,
		className: "bg-background px-6 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cta-content relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground shadow-glow md:p-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "cta-glow pointer-events-none absolute -right-20 -top-20 size-96 rounded-full bg-accent/40 blur-3xl",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "cta-glow pointer-events-none absolute -left-20 -bottom-20 size-96 rounded-full bg-[oklch(0.7_0.18_60)]/30 blur-3xl",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 grid items-center gap-10 md:grid-cols-[1fr_auto]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-14 md:h-20 brightness-0 invert scale-125 md:scale-150 origin-left" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-8 max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl",
							children: ["Ready to be ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display italic",
								children: "TikTok Shop ready?"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-white/70",
							children: "Install AstroSync on your Shopify store in under a minute. Plans start at $19.99/month."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]",
							children: "Install on Shopify"
						})
					})]
				})
			]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoStrip, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
