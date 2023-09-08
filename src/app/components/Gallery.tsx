import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images";
import ImgContainer from "./ImgContainer";
import addBlurredDataUrls from "@/lib/getBase64";
import getPrevNextPage from "@/lib/getPrevNextPage";
import Pagination from "./Pagination";

type GalleryPropss = {
  topic?: string | undefined;
  page?: string | undefined;
};

const Gallery = async ({ page, topic = "curated" }: GalleryPropss) => {
  let url;
  if (topic === "curated" && page) {
    // Browsing beyond homepage
    url = `https://api.pexels.com/v1/curated?page=${page}`;
  } else if (topic === "curated") {
    // homepage
    url = "https://api.pexels.com/v1/curated";
  } else if (!page) {
    // First page of search result
    url = `https://api.pexels.com/v1/search?query=${topic}`;
  } else {
    // Search result beyond homepage
    url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`;
  }

  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images || images.per_page === 0) {
    return <h2 className="m-4 text-2xl font-bold">No Images Found!</h2>;
  }

  const photosWithBlur = await addBlurredDataUrls(images);

  const { prevPage, nextPage } = getPrevNextPage(images);

  const paginationProps = { topic, page, nextPage, prevPage };

  return (
    <>
      <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
        {photosWithBlur.map((photo) => (
          <ImgContainer key={photo.id} photo={photo} />
        ))}
      </section>
      <Pagination {...paginationProps} />
    </>
  );
};

export default Gallery;
