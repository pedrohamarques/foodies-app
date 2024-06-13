import { StaticImageData } from "next/image";
import { ChangeEvent, useRef, useState } from "react";

export function useImagePicker() {
  const [pickedImage, setPicketImage] = useState<
    StaticImageData | string | null
  >(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    imageInputRef.current?.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      setPicketImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      setPicketImage(fileReader.result as string);
    };
  }

  return {
    handlePickClick,
    handleImageChange,
    imageInputRef,
    pickedImage,
  };
}
