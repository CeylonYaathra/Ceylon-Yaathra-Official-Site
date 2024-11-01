import PrimaryNavLink from "@/components/PrimaryNavLink";
import HeroCarousel from "../../components/HeroCarousel";
import MomentsSection from "./_components/MomentsSection";
import WhyBookSection from "./_components/WhyBookSection";
import MapSection from "./_components/MapSection";
import PackageSection from "./_components/PackageSection";
import ReviewSection from "./_components/ReviewSection";
import InstagramWithUsSection from "./_components/InstagramWithUsSection";

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
