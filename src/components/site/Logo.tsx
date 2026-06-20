import logo from "@/assets/logo-transparent.png";

export function Logo({
  variant,
  dark,
  className = "h-10 md:h-12",
}: {
  variant?: "lockup" | "mark";
  dark?: boolean;
  className?: string;
}) {
  return <img src={logo} alt="AstroSync" className={`${className} w-auto object-contain`} />;
}
