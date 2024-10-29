import PrimaryNavLink from "@/components/PrimaryNavLink";
import HeroCarousel from "../../components/HeroCarousel";

export default function Home() {
  return (
    <div>
      <HeroCarousel
        title={
          <>
            BEST ESCAPE <br /> CHOICE
          </>
        }
        titleMini={<>Your Travel Services</>}
        subTitle={
          <>
            Experience the Best in Travel: A Journey Beyond Your Imagination,
            <br /> Where Every Destination Becomes an Unforgettable Adventure
          </>
        }
      >
        <PrimaryNavLink href="" text="Contact Us" />
      </HeroCarousel>
    </div>
  );
}
