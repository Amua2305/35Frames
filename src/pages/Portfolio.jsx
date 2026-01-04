// import { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import API from "../../api";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./Portfolio.css";
// import s1 from "../../src/assets/images/reff1-min.JPG";
// import s2 from "../../src/assets/images/reff2-min.JPG";
// import s3 from "../../src/assets/images/reff3-min.JPG";
// import s4 from "../../src/assets/images/reff4-min.JPG";
// import s5 from "../../src/assets/images/reff5-min.JPG";
// import s6 from "../../src/assets/images/reff6-min.JPG";
// import s7 from "../../src/assets/images/reff7-min.JPG";
// import s8 from "../../src/assets/images/reff8-min.JPG";
// import s9 from "../../src/assets/images/reff9-min.JPG";
// import s10 from "../../src/assets/images/reff10-min.JPG";
// import s11 from "../../src/assets/images/reff11-min.JPG";
// import s12 from "../../src/assets/images/reff22-min.JPG";
// import s13 from "../../src/assets/images/reff23-min.JPG";
// import s14 from "../../src/assets/images/reff24-min.JPG";
// import s15 from "../../src/assets/images/reff25-min.JPG";
// import s16 from "../../src/assets/images/reff26-min.JPG";
// import s17 from "../../src/assets/images/reff27-min.JPG";
// import s18 from "../../src/assets/images/reff28-min.JPG";
// import s19 from "../../src/assets/images/reff29-min.JPG";
// import s20 from "../../src/assets/images/reff30-min.JPG";
// import s21 from "../../src/assets/images/reff31-min.JPG";
// import s22 from "../../src/assets/images/reff12-min.JPG";
// import s23 from "../../src/assets/images/reff13-min.JPG";
// import s24 from "../../src/assets/images/reff14-min.JPG";
// import s25 from "../../src/assets/images/reff15-min.JPG";
// import s26 from "../../src/assets/images/reff16-min.JPG";
// import s27 from "../../src/assets/images/reff17-min.JPG";
// import s28 from "../../src/assets/images/reff18-min.JPG";
// import s29 from "../../src/assets/images/reff19-min.JPG";
// import s30 from "../../src/assets/images/reff20-min.JPG";
// import s31 from "../../src/assets/images/reff21-min.JPG";
 
// export default function Portfolio() {
//   const [covers, setCovers] = useState([]);
//   const navigate = useNavigate();

//   // ---------- STATIC DISPLAY IMAGES ----------
//   const staticImages =  [
//   { id: "st1", name: "Static 1", url: s1 },
//   { id: "st2", name: "Static 2", url: s2 },
//   { id: "st3", name: "Static 3", url: s3 },
//   { id: "st4", name: "Static 4", url: s4 },
//   { id: "st5", name: "Static 5", url: s5 },
//   { id: "st6", name: "Static 6", url: s6 },
//   { id: "st7", name: "Static 7", url: s7 },
//   { id: "st8", name: "Static 8", url: s8 },
//   { id: "st9", name: "Static 9", url: s9 },
//   { id: "st10", name: "Static 10", url: s10 },
//   { id: "st11", name: "Static 11", url: s11 },
//   { id: "st12", name: "Static 12", url: s12 },
//   { id: "st13", name: "Static 13", url: s13 },
//   { id: "st14", name: "Static 14", url: s14 },
//   { id: "st15", name: "Static 15", url: s15 },
//   { id: "st16", name: "Static 16", url: s16 },
//   { id: "st17", name: "Static 17", url: s17 },
//   { id: "st18", name: "Static 18", url: s18 },
//   { id: "st19", name: "Static 19", url: s19 },
//   { id: "st20", name: "Static 20", url: s20 },
//   { id: "st21", name: "Static 21", url: s21 },
//   { id: "st22", name: "Static 22", url: s22 },
//   { id: "st23", name: "Static 23", url: s23 },
//   { id: "st24", name: "Static 24", url: s24 },
//   { id: "st25", name: "Static 25", url: s25 },
//   { id: "st26", name: "Static 26", url: s26 },
//   { id: "st27", name: "Static 27", url: s27 },
//   { id: "st28", name: "Static 28", url: s28 },
//   { id: "st29", name: "Static 29", url: s29 },
//   { id: "st30", name: "Static 30", url: s30 },
//   { id: "st31", name: "Static 31", url: s31 },
  
// ];


//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//     });

//     const fetchCovers = async () => {
//       try {
//         const res = await API.get("/images");
//         setCovers(res.data);
//       } catch (error) {
//         console.error("Failed to fetch images:", error);
//       }
//     };

//     fetchCovers();
//   }, []);

//   return (
//     <div className="portfolio-container mt-20  bg-[#F6F3EC] ">
//       <h2
//         className="section-title"
//         data-aos="fade-up"
//         data-aos-delay="150"
//         style={{
//           fontFamily: "'Allura', cursive",
//           fontSize: "50px",
//           color: "black",
//         }}
//       >
//         Portfolio
//       </h2>

//       <div className="underline" data-aos="fade-down" data-aos-delay="300"></div>

//       {/* ------------ STATIC IMAGES SECTION ------------ */}
//       <div className="gallery mt-28" data-aos="fade-up" data-aos-delay="200">
//         {staticImages.map((img) => (
//           <div key={img.id} className="gallery-item">
//             <div className="gallery-card">
//               <img src={img.url} alt={img.name} loading="lazy" />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ------------ API ALBUM IMAGES SECTION ------------ */}
//       <div className="gallery" data-aos="fade-up" data-aos-delay="300">
//         {covers.length > 0 ? (
//           covers.map((cover) => {
//             const imageSrc = cover.url?.startsWith("http")
//               ? cover.url
//               : `https://dp-c-backend.onrender.com${cover.url}`;

//             return (
//               <div
//                 key={cover._id}
//                 className="gallery-item"
//                 onClick={() =>
//                   navigate(`/album/${encodeURIComponent(cover.name)}`)
//                 }
//               >
//                 <div className="gallery-card">
//                   <img src={imageSrc} alt={cover.name} loading="lazy" />
//                   <span className="magnify-icon">
//                     <FaSearch className="gallery-icon" />
//                   </span>
//                 </div>
//                 <p className="gallery-title">{cover.name}</p>
//               </div>
//             );
//           })
//         ) : (
//           <p style={{ textAlign: "center", width: "100%" }}>
//             No albums found
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

import React from "react";

import { useState, useEffect, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Portfolio.css";

// STATIC IMAGES OUTSIDE COMPONENT (prevents re-creation each render)
import s1 from "../../src/assets/images/reff1-min.JPG";
import s2 from "../../src/assets/images/reff2-min.JPG";
import s3 from "../../src/assets/images/reff3-min.JPG";
// ... keep imports

const staticImages = [
  { id: "st1", name: "Static 1", url: s1 },
  { id: "st2", name: "Static 2", url: s2 },
  { id: "st3", name: "Static 3", url: s3 },
  // ... continue list
];

// ---- MEMOIZED CARD COMPONENT ----
const GalleryCard = React.memo(({ src, name, onClick }) => (
  <div className="gallery-item" onClick={onClick}>
    <div className="gallery-card">
      <img
        src={src}
        alt={name}
        loading="lazy"
        decoding="async"
        fetchpriority="low"
      />
      <span className="magnify-icon">
        <FaSearch className="gallery-icon" />
      </span>
    </div>
    {name && <p className="gallery-title">{name}</p>}
  </div>
));

export default function Portfolio() {
  const [covers, setCovers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-in-out",
    });

    const controller = new AbortController();

    const fetchCovers = async () => {
      try {
        const res = await API.get("/images", {
          signal: controller.signal,
        });
        setCovers(res.data);
      } catch (error) {
        if (error.name !== "CanceledError") {
          console.error("Failed to fetch images:", error);
        }
      }
    };

    fetchCovers();
    return () => controller.abort();
  }, []);

  // ---- Memoize processed covers to avoid recalculations ----
  const processedCovers = useMemo(
    () =>
      covers.map((cover) => ({
        ...cover,
        finalUrl: cover?.url?.startsWith("http")
          ? cover.url
          : `https://dp-c-backend.onrender.com${cover.url}`,
      })),
    [covers]
  );

  return (
    <div className="portfolio-container mt-20 bg-[#F6F3EC]">
      <h2
        className="section-title"
        data-aos="fade-up"
        data-aos-delay="150"
        style={{ fontFamily: "'Allura', cursive", fontSize: "50px", color: "black" }}
      >
        Portfolio
      </h2>

      <div className="underline" data-aos="fade-down" data-aos-delay="300"></div>

      {/* STATIC IMAGES */}
      <div className="gallery mt-28" data-aos="fade-up" data-aos-delay="200">
        {staticImages.map((img) => (
          <GalleryCard key={img.id} src={img.url} name={img.name} />
        ))}
      </div>

      {/* API ALBUMS */}
      <div className="gallery" data-aos="fade-up" data-aos-delay="300">
        {processedCovers.length > 0 ? (
          processedCovers.map((cover) => (
            <GalleryCard
              key={cover._id}
              src={cover.finalUrl}
              name={cover.name}
              onClick={() =>
                navigate(`/album/${encodeURIComponent(cover.name)}`)
              }
            />
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>No albums found</p>
        )}
      </div>
    </div>
  );
}
