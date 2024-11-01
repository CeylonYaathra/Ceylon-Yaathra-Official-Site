
import ContentfulImage from "@/components/ContentFulImage";

export default function PlaceCard({
  image,
  title,
  excerpt,
}: {
  image: any;
  title: string;
  excerpt: string;
}) {
  return (
    <div className="shadow-lg p-4 hover:scale-[102%] duration-300 cursor-pointer">
      <ContentfulImage
      className=" h-[240px] object-cover w-full"
        alt={`Cover Image for ${title}`}
        src={image.fields.file.url}
        width={image.fields.file.details.image.width}
        height={image.fields.file.details.image.height}
      />
      <h1 className="text-[23px] font-semibold my-2">{title}</h1>
      <h3 className="line-clamp-3 text-slate-500 text-sm">{excerpt}</h3>
    </div>
  );
}
