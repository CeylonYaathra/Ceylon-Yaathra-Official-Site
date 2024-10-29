import { cn } from "@/lib/utils";

interface HeroCarouselProps {
  children?: React.ReactNode;
  titleMini: React.ReactNode;
  title: React.ReactNode;
  subTitle: React.ReactNode;
  className?: string;
}
export default function HeroCarousel({
  children,
  titleMini,
  title,
  subTitle,
  className,
}: HeroCarouselProps) {
  return (
    <div
      className="h-screen flex items-center"
      style={{
        backgroundImage: "url('/assets/carousel1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className={cn("ml-20 max-md:ml-7 mr-2 w-full", className)}>
        <h4 className="text-cusYellow text-xl max-md:text-base font-medium">{titleMini}</h4>
        <h1 className="text-white text-[5rem] max-md:text-[3.125rem] font-extrabold leading-none my-2">
          {title}
        </h1>
        <h6 className="text-white/45 max-md:text-[15px]">{subTitle}</h6>
        {children}
      </div>
    </div>
  );
}
