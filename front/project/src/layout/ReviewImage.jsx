import { useState, useEffect } from "react";

export default function Restaurants() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }
  return (
    <div className="">
      <input
        type="file"
        className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
        multiple
        accept="image/*"
        onChange={onImageChange}
      />
      {imageURLs.map((imageSrc, idx) => (
        <img key={idx} src={imageSrc} width={500} />
      ))}
    </div>
  );
}
