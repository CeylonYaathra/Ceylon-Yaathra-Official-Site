import client from "@/lib/contentful";
import PlaceCard from "./_components/PlaceCard";
import HeroCarousel from "@/components/HeroCarousel";
import Link from "next/link";

export default async function page() {
  const places = await client.getEntries({
    content_type: "place",
  });

  return (
    <div>
      <HeroCarousel
        className="text-center"
        title={<>PLACES</>}
        titleMini={<>Read Our Articles</>}
        subTitle={
          <>Feel free to contact us and turn your dream tour into reality!</>
        }
      ></HeroCarousel>
      <div className="max-w-[1400px] mx-auto my-14 mb-10">
        <div className="grid lg:grid-cols-3 gap-5 mx-5 md:grid-cols-2 max-md:">
          {Array(10)
            .fill(places.items)
            .flat()
            .map((place) => (
              <Link href={`places/${place.fields.slug}`}>
                <PlaceCard
                  image={place.fields.image}
                  title={place.fields.name as string}
                  excerpt={place.fields.excerpt as string}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
