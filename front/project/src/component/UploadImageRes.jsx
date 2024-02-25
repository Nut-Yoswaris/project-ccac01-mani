import { useState, useEffect } from "react";
import axios from "axios";

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

  const hdlSubmit = async e => {
  
    const formData = new FormData();
    images.forEach(image => {
        formData.append('file', image); 
    });

    try{
      e.preventDefault()
        // const token = localStorage.getItem('token')
        const rs = await axios.post("http://localhost:8000/restaurants/upload" , formData)
        alert("Upload Image OK")

    }catch(err){
        next(err.message)
    }
  }

  return (
<form className="flex flex-col gap-2" action="./upload" method="POST" onSubmit={hdlSubmit}>
<input
        type="file"
        name="file"
        className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
        onChange={onImageChange}
      />
      {imageURLs.map((imageSrc, idx) => (
        <img key={idx} src={imageSrc} width={500} alt={`Image ${idx}`} />
      ))}
      <button className="btn btn-warning">UPLOAD</button>
</form>
  );
}
