import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mitunguu_Main_Building.jpg/1280px-Mitunguu_Main_Building.jpg",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mitunguu_Main_Building.jpg/320px-Mitunguu_Main_Building.jpg",
  },
  {
    original: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Mitunguu_Technical_Training_Institute_Library.jpg",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Mitunguu_Technical_Training_Institute_Library.jpg",
  },
  {
    original: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Mitunguu_TTI_Workshop.jpg",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Mitunguu_TTI_Workshop.jpg",
  },
  // Add more images as needed
];

export default function GalleryComponent() {
  return (
    <div className="max-w-5xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">Gallery</h2>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={true}
        thumbnailPosition="bottom"
      />
    </div>
  );
}
