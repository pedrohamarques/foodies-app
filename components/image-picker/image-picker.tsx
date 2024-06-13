"use client";

import Image from "next/image";
import { useImagePicker } from "./image-picker.hook";

import styles from "./image-picker.module.css";

type ImagePickerProps = {
  label: string;
  name: string;
};

export function ImagePicker({ label, name }: ImagePickerProps) {
  const { handlePickClick, handleImageChange, imageInputRef, pickedImage } =
    useImagePicker();

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {pickedImage ? (
            <Image src={pickedImage} fill alt="Image select by the user" />
          ) : (
            <p>No image picked yet.</p>
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
