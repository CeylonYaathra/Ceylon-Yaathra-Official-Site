import client from "@/lib/contentful";
import { formatImgUrl } from "@/lib/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { notFound } from "next/navigation";

interface ImageField {
  fields: {
    file: {
      url: string;
      details: {
        image: {
          width: number;
          height: number;
        };
      };
    };
  };
}

interface PlaceFields {
  image: ImageField;
  name: string;
  excerpt: string;
  details: any;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const place = await client.getEntries({
    content_type: "place",
    "fields.slug": slug,
  });

  if (!place.items.length) {
    notFound();
  }

  const { image, name, excerpt, details } = place.items[0]
    .fields as unknown as PlaceFields;

  const formattedSrc = formatImgUrl(image.fields.file.url);

  console.log(formattedSrc);

  return (
    <div>
      <div
        className="h-screen flex flex-col justify-center text-center"
        style={{
          backgroundImage: `url('${formattedSrc}')`,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[700px] mx-auto px-5">
          <h1 className="text-white text-[5rem] max-md:text-[3.125rem] font-extrabold leading-none my-4">
            {name}
          </h1>
          <h6 className="text-white/45 max-md:text-[15px]">{excerpt}</h6>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-5 my-10 prose">
        {documentToReactComponents(details)}
      </div>
    </div>
  );
}
