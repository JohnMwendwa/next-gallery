import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images";
import ImgContainer from "./ImgContainer";
import addBlurredDataUrls from "@/lib/getBase64";

type GalleryPropss = {
  topic?: string | undefined;
};

const Gallery = async ({ topic }: GalleryPropss) => {
  const url = !topic
    ? "https://api.pexels.com/v1/curated"
    : `https://api.pexels.com/v1/search?query=${topic}`;

  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images)
    return <h2 className="m-4 text-2xl font-bold">No Images Found!</h2>;

  const photosWithBlur = await addBlurredDataUrls(images);

  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {photosWithBlur.map((photo) => (
        <ImgContainer key={photo.id} photo={photo} />
      ))}
    </section>
  );
};

export default Gallery;
