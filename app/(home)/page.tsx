import PrimaryNavLink from "@/components/PrimaryNavLink";
import HeroCarousel from "../../components/HeroCarousel";
import Container from "@/components/Container";
import Image from "next/image";
import MomentsSection from "./components/MomentsSection";
import WhyBookSection from "./components/WhyBookSection";
import MapSection from "./components/MapSection";
import PackageSection from "./components/PackageSection";
import ReviewSection from "./components/ReviewSection";
import InstagramWithUsSection from "./components/InstagramWithUsSection";

export default function Home() {
  return (
    <main>
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
      <MomentsSection/>
      <WhyBookSection/>
      <MapSection/>
      <PackageSection/>
      <ReviewSection/>
      <InstagramWithUsSection/>
    </main>
  );
}
