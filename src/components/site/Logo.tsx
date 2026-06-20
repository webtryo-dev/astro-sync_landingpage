import lockup from "@/assets/astrosync-lockup.png.asset.json";
import lockupDark from "@/assets/astrosync-lockup-dark.png.asset.json";
import mark from "@/assets/astrosync-mark.png.asset.json";

export function Logo({
  variant = "lockup",
  dark = false,
  className = "h-12 md:h-14",
}: {
  variant?: "lockup" | "mark";
  dark?: boolean;
  className?: string;
}) {
  const src = variant === "mark" ? mark.url : dark ? lockupDark.url : lockup.url;
  return <img src={src} alt="AstroSync" className={`${className} w-auto object-contain`} />;
}
