import type { Photo } from "@/models/Images";
import Image from "next/image";

interface ImgContainerProps {
  photo: Photo;
}

const ImgContainer = ({ photo }: ImgContainerProps) => {
  return (
    <div className="h-64 bg-gray-200 rounded-xl">
      <Image src={photo.src.large} alt={photo.alt} width={250} height={250} />
    </div>
  );
};

export default ImgContainer;
