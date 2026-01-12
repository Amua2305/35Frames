import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Portfolio.css";

// IMAGES
import img1 from "../assets/images/reff1-min.JPG";
import img2 from "../assets/images/reff2-min.JPG";
import img3 from "../assets/images/reff3-min.JPG";
import img4 from "../assets/images/reff4-min.JPG";
import img5 from "../assets/images/reff5-min.JPG";
import img6 from "../assets/images/reff6-min.JPG";
import img7 from "../assets/images/reff7-min.JPG";
import img8 from "../assets/images/reff8-min.JPG";
import img9 from "../assets/images/reff9-min.JPG";
import img10 from "../assets/images/reff10-min.JPG";
import img11 from "../assets/images/reff11-min.JPG";
import img12 from "../assets/images/reff12-min.JPG";
import img13 from "../assets/images/reff13-min.JPG";
import img14 from "../assets/images/reff14-min.JPG";
import img15 from "../assets/images/reff15-min.JPG";
import img16 from "../assets/images/reff16-min.JPG";
import img17 from "../assets/images/reff17-min.JPG";
import img18 from "../assets/images/reff18-min.JPG";
import img19 from "../assets/images/reff19-min.JPG";
import img20 from "../assets/images/reff20-min.JPG";
import img21 from "../assets/images/reff21-min.JPG";
import img22 from "../assets/images/reff22-min.JPG";
import img23 from "../assets/images/reff23-min.JPG";
import img24 from "../assets/images/reff24-min.JPG";
import img25 from "../assets/images/reff25-min.JPG";
import img26 from "../assets/images/reff26-min.JPG";
import img27 from "../assets/images/reff27-min.JPG";
import img28 from "../assets/images/reff28-min.JPG";
import img29 from "../assets/images/reff29-min.JPG";
import img30 from "../assets/images/reff30-min.JPG";

export default function Portfolio() {
  const [covers, setCovers] = useState([]);
  const [zoomImg, setZoomImg] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const fetchCovers = async () => {
      try {
        const res = await API.get("/images");
        setCovers(res.data || []);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchCovers();
  }, []);

  const openZoom = (img) => setZoomImg(img);
  const closeZoom = () => setZoomImg(null);

  return (
    <div className="portfolio-container mt-20 bg-[#F6F3EC]">

      {/* ================= STATIC IMAGE GRID ================= */}

      {/* BLOCK 1 */}
      <div className="max-w-x8l mx-auto mt-16 grid gap-1 px-4">
        <img src={img1} onClick={() => openZoom(img1)} className="w-full h-[260px] sm:h-[400px] md:h-[650px] lg:h-[900px] object-cover cursor-zoom-in" />
        <div className="grid grid-cols-2 gap-1">
          <img src={img2} onClick={() => openZoom(img2)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
          <img src={img3} onClick={() => openZoom(img3)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
          <img src={img4} onClick={() => openZoom(img4)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
          <img src={img5} onClick={() => openZoom(img5)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
        </div>
      </div>

      {/* BLOCK 2 */}
      <div className="max-w-6xl mx-auto mt-1 grid gap-1 px-4">
        <img src={img6} onClick={() => openZoom(img6)} className="w-full h-[260px] sm:h-[400px] md:h-[650px] lg:h-[900px] object-cover cursor-zoom-in" />
        <div className="grid grid-cols-2 gap-1">
          <img src={img7} onClick={() => openZoom(img7)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
          <img src={img8} onClick={() => openZoom(img8)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
          <img src={img9} onClick={() => openZoom(img9)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
          <img src={img10} onClick={() => openZoom(img10)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
        </div>
      </div>

      {/* BLOCK 3 */}
      <div className="max-w-6xl mx-auto mt-1 grid gap-1 px-4">
        <img src={img11} onClick={() => openZoom(img11)} className="w-full h-[260px] sm:h-[400px] md:h-[650px] lg:h-[900px] object-cover cursor-zoom-in" />
        <div className="grid grid-cols-2 gap-1">
          <img src={img12} onClick={() => openZoom(img12)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
          <img src={img13} onClick={() => openZoom(img13)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
          <img src={img14} onClick={() => openZoom(img14)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
          <img src={img15} onClick={() => openZoom(img15)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-1 grid gap-1 px-4">
        <img src={img16} onClick={() => openZoom(img16)} className="w-full h-[260px] sm:h-[400px] md:h-[650px] lg:h-[900px] object-cover cursor-zoom-in" />
        <div className="grid grid-cols-2 gap-1">
          <img src={img17} onClick={() => openZoom(img17)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
          <img src={img18} onClick={() => openZoom(img18)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
          <img src={img19} onClick={() => openZoom(img19)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
          <img src={img20} onClick={() => openZoom(img20)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
        </div>
      </div>
         <div className="max-w-6xl mx-auto mt-1 grid gap-1 px-4">
        <img src={img21} onClick={() => openZoom(img21)} className="w-full h-[260px] sm:h-[400px] md:h-[650px] lg:h-[900px] object-cover cursor-zoom-in" />
        <div className="grid grid-cols-2 gap-1">
          <img src={img22} onClick={() => openZoom(img22)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
          <img src={img23} onClick={() => openZoom(img23)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
          <img src={img24} onClick={() => openZoom(img24)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
          <img src={img25} onClick={() => openZoom(img25)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
        </div>
      </div>
        <div className="max-w-6xl mx-auto mt-1 grid gap-1 px-4">
        <img src={img26} onClick={() => openZoom(img26)} className="w-full h-[260px] sm:h-[400px] md:h-[650px] lg:h-[900px] object-cover cursor-zoom-in" />
        <div className="grid grid-cols-2 gap-1">
          <img src={img27} onClick={() => openZoom(img27)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
          <img src={img28} onClick={() => openZoom(img28)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
          <img src={img29} onClick={() => openZoom(img29)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
          <img src={img30} onClick={() => openZoom(img30)} className="w-full h-[340px] sm:h-[220px] md:h-[300px] lg:h-[520px] object-cover cursor-zoom-in" />
        </div>
      </div>
      {/* ================= API GALLERY ================= */}
      <h2 className="section-title mt-20">Portfolio</h2>
      <div className="underline" />

      <div className="gallery">
        {covers.length ? (
          covers.map((cover) => {
            const imageSrc = cover.url?.startsWith("http")
              ? cover.url
              : `https://dp-c-backend.onrender.com${cover.url}`;

            return (
              <div key={cover._id} className="gallery-item" onClick={() => navigate(`/album/${encodeURIComponent(cover.name)}`)}>
                <div className="gallery-card">
                  <img src={imageSrc} alt={cover.name} />
                  <span className="magnify-icon">
                    <FaSearch className="gallery-icon" />
                  </span>
                </div>
                <p className="gallery-title">{cover.name}</p>
              </div>
            );
          })
        ) : (
          <p>No albums found</p>
        )}
      </div>

      {/* ================= ZOOM OVERLAY ================= */}
      {zoomImg && (
        <div className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-4" onClick={closeZoom}>
          <img
            src={zoomImg}
            className="max-w-full max-h-full object-contain rounded-lg animate-zoom"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}

