import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type useSlideShowParams = {
  images: {
    image: StaticImageData;
    alt: string;
  }[];
};

export function useSlideShow({ images }: useSlideShowParams) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((previousIndex) =>
        previousIndex < images.length - 1 ? previousIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  });

  return {
    currentImageIndex,
  };
}
