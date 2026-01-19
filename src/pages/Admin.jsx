// // import { useEffect, useState } from "react";

// // const API = "http://localhost:5000";

// // export default function Admin() {
// //   const [albums, setAlbums] = useState([]);
// //   const [title, setTitle] = useState("");
// //   const [selectedAlbum, setSelectedAlbum] = useState("");
// //   const [cover, setCover] = useState(null);
// //   const [photo, setPhoto] = useState(null);
// //   const [photos, setPhotos] = useState([]);

// //   const token = localStorage.getItem("token");

// //   useEffect(() => {
// //     fetchAlbums();
// //   }, []);

// //   async function fetchAlbums() {
// //     const res = await fetch(`${API}/albums`);
// //     const data = await res.json();
// //     setAlbums(data);
// //   }

// //   async function fetchPhotos(albumId) {
// //     const res = await fetch(`${API}/upload/public/${albumId}`);
// //     const data = await res.json();
// //     setPhotos(data);
// //   }

// //   async function createAlbum() {
// //     if (!title) return alert("Enter album name");

// //     await fetch(`${API}/albums`, {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //         Authorization: `Bearer ${token}`,
// //       },
// //       body: JSON.stringify({ title }),
// //     });

// //     setTitle("");
// //     fetchAlbums();
// //   }

// //   async function uploadCover() {
// //     if (!selectedAlbum || !cover) return alert("Select album & cover");

// //     const fd = new FormData();
// //     fd.append("image", cover);

// //     await fetch(`${API}/albums/${selectedAlbum}/cover`, {
// //       method: "POST",
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //       body: fd,
// //     });

// //     alert("Cover Uploaded");
// //   }

// //   async function uploadPhoto() {
// //     if (!selectedAlbum || !photo) return alert("Select photo");

// //     const fd = new FormData();
// //     fd.append("image", photo);

// //     await fetch(`${API}/upload/${selectedAlbum}`, {
// //       method: "POST",
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //       body: fd,
// //     });

// //     fetchPhotos(selectedAlbum);
// //   }

// //   async function deleteAlbum() {
// //     if (!selectedAlbum) return alert("Select album");

// //     if (!window.confirm("Delete this album permanently?")) return;

// //     await fetch(`${API}/albums/${selectedAlbum}`, {
// //       method: "DELETE",
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     });

// //     setSelectedAlbum("");
// //     setPhotos([]);
// //     fetchAlbums();
// //   }

// //   return (
// //     <div className="p-10 max-w-5xl mx-auto">
// //       <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

// //       {/* CREATE ALBUM */}
// //       <div className="flex gap-3 mb-6">
// //         <input
// //           className="border p-2 flex-1"
// //           placeholder="New Album Name"
// //           value={title}
// //           onChange={(e) => setTitle(e.target.value)}
// //         />
// //         <button
// //           onClick={createAlbum}
// //           className="bg-black text-white px-6"
// //         >
// //           Create Album
// //         </button>
// //       </div>

// //       {/* SELECT ALBUM */}
// //       <select
// //         className="border p-2 w-full mb-6"
// //         onChange={(e) => {
// //           setSelectedAlbum(e.target.value);
// //           fetchPhotos(e.target.value);
// //         }}
// //       >
// //         <option value="">Select Album</option>
// //         {albums.map((a) => (
// //           <option key={a._id} value={a._id}>
// //             {a.title}
// //           </option>
// //         ))}
// //       </select>

// //       {/* UPLOADS */}
// //       <div className="flex gap-6 mb-8">
// //         <div>
// //           <input type="file" onChange={(e) => setCover(e.target.files[0])} />
// //           <button
// //             className="bg-blue-600 text-white px-4 py-2 mt-2"
// //             onClick={uploadCover}
// //           >
// //             Upload Cover
// //           </button>
// //         </div>

// //         <div>
// //           <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
// //           <button
// //             className="bg-green-600 text-white px-4 py-2 mt-2"
// //             onClick={uploadPhoto}
// //           >
// //             Upload Photo
// //           </button>
// //         </div>
// //       </div>

// //       {/* PHOTOS GRID */}
// //       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //         {photos.map((p) => (
// //           <img
// //             key={p._id}
// //             src={p.url}
// //             className="rounded shadow"
// //           />
// //         ))}
// //       </div>

// //       {/* DELETE */}
// //       <button
// //         onClick={deleteAlbum}
// //         className="mt-10 bg-red-600 text-white px-6 py-2"
// //       >
// //         Delete Album
// //       </button>
// //     </div>
// //   );
// // }



// import { useEffect, useState } from "react";

// const API = "http://localhost:5000";

// export default function Admin() {
//   const [albums, setAlbums] = useState([]);
//   const [photos, setPhotos] = useState([]);
//   const [title, setTitle] = useState("");
//   const [selectedAlbum, setSelectedAlbum] = useState("");
//   const [cover, setCover] = useState(null);
//   const [photo, setPhoto] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetchAlbums();
//   }, []);

//   const fetchAlbums = async () => {
//     const res = await fetch(`${API}/albums`);
//     const data = await res.json();
//     setAlbums(data);
//   };

//   const fetchPhotos = async (id) => {
//     const res = await fetch(`${API}/upload/public/${id}`);
//     const data = await res.json();
//     setPhotos(data);
//   };

//   const createAlbum = async () => {
//     if (!title) return alert("Enter album name");

//     await fetch(`${API}/albums`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ title }),
//     });

//     setTitle("");
//     fetchAlbums();
//   };

//   const uploadCover = async () => {
//     if (!selectedAlbum || !cover) return alert("Select album & cover");

//     const fd = new FormData();
//     fd.append("image", cover);

//     await fetch(`${API}/albums/${selectedAlbum}/cover`, {
//       method: "POST",
//       headers: { Authorization: `Bearer ${token}` },
//       body: fd,
//     });

//     alert("Cover uploaded successfully");
//   };

//   const uploadPhoto = async () => {
//     if (!selectedAlbum || !photo) return;

//     const fd = new FormData();
//     fd.append("image", photo);

//     setLoading(true);
//     await fetch(`${API}/upload/${selectedAlbum}`, {
//       method: "POST",
//       headers: { Authorization: `Bearer ${token}` },
//       body: fd,
//     });
//     setLoading(false);

//     fetchPhotos(selectedAlbum);
//   };

//   const deleteAlbum = async () => {
//     if (!selectedAlbum) return;
//     if (!window.confirm("Delete this album permanently?")) return;

//     await fetch(`${API}/albums/${selectedAlbum}`, {
//       method: "DELETE",
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     setSelectedAlbum("");
//     setPhotos([]);
//     fetchAlbums();
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
//         <p className="text-gray-500 mb-8">
//           Manage albums, covers and gallery images
//         </p>

//         {/* Album Actions */}
//         <div className="bg-white p-6 rounded-xl shadow mb-8">
//           <h2 className="font-semibold text-lg mb-4">Album Management</h2>

//           <div className="grid md:grid-cols-3 gap-4">
//             <input
//               className="border p-2 rounded"
//               placeholder="New Album Name"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />

//             <button
//               onClick={createAlbum}
//               className="bg-black text-white rounded px-4"
//             >
//               Create Album
//             </button>

//             <select
//               className="border p-2 rounded"
//               onChange={(e) => {
//                 setSelectedAlbum(e.target.value);
//                 fetchPhotos(e.target.value);
//               }}
//             >
//               <option value="">Select Album</option>
//               {albums.map((a) => (
//                 <option key={a._id} value={a._id}>
//                   {a.title}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Upload Section */}
//         <div className="grid md:grid-cols-2 gap-6 mb-10">
//           <div className="bg-white p-6 rounded-xl shadow">
//             <h3 className="font-semibold mb-3">Upload Cover</h3>
//             <input type="file" onChange={(e) => setCover(e.target.files[0])} />
//             <button
//               onClick={uploadCover}
//               className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
//             >
//               Upload Cover
//             </button>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <h3 className="font-semibold mb-3">Upload Photo</h3>
//             <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
//             <button
//               onClick={uploadPhoto}
//               className="mt-3 bg-green-600 text-white px-4 py-2 rounded"
//             >
//               {loading ? "Uploading..." : "Upload Photo"}
//             </button>
//           </div>
//         </div>

//         {/* Gallery */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Photos</h2>

//           {photos.length === 0 ? (
//             <p className="text-gray-500">No photos uploaded.</p>
//           ) : (
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {photos.map((p) => (
//                 <img
//                   key={p._id}
//                   src={p.url}
//                   className="rounded-lg shadow hover:scale-105 transition"
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Danger Zone */}
//         <div className="mt-10">
//           <button
//             onClick={deleteAlbum}
//             className="bg-red-600 text-white px-6 py-2 rounded"
//           >
//             Delete Album
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";

const API = "http://localhost:5000";

export default function Admin() {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [title, setTitle] = useState("");
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [cover, setCover] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    const res = await fetch(`${API}/albums`);
    const data = await res.json();
    setAlbums(data);
  };

  const fetchPhotos = async (id) => {
    const res = await fetch(`${API}/upload/public/${id}`);
    const data = await res.json();
    setPhotos(data);
  };

  const createAlbum = async () => {
    if (!title) return alert("Enter album name");

    await fetch(`${API}/albums`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title }),
    });

    setTitle("");
    fetchAlbums();
  };

  const uploadCover = async () => {
    if (!selectedAlbum || !cover) return alert("Select album & cover");

    const fd = new FormData();
    fd.append("image", cover);

    await fetch(`${API}/albums/${selectedAlbum}/cover`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: fd,
    });

    alert("Cover uploaded");
  };

  const uploadPhoto = async () => {
    if (!selectedAlbum || !photo) return;

    const fd = new FormData();
    fd.append("image", photo);

    setLoading(true);
    await fetch(`${API}/upload/${selectedAlbum}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: fd,
    });
    setLoading(false);

    fetchPhotos(selectedAlbum);
  };

  const deleteAlbum = async () => {
    if (!selectedAlbum) return;

    if (!window.confirm("Delete this album permanently?")) return;

    await fetch(`${API}/albums/${selectedAlbum}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    setSelectedAlbum("");
    setPhotos([]);
    fetchAlbums();
  };

  return (
    <div className="min-h-screen relative bg-gray-100 overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 animate-gradient -z-10" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/20 blur-3xl rounded-full animate-pulse" />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600 mb-8">
          Manage albums, covers and photos
        </p>

        {/* Album Section */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h2 className="font-semibold text-lg mb-4">Album Management</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <input
              className="border p-2 rounded"
              placeholder="New Album Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <button
              onClick={createAlbum}
              className="bg-black text-white rounded px-4"
            >
              Create Album
            </button>

            <select
              className="border p-2 rounded"
              onChange={(e) => {
                setSelectedAlbum(e.target.value);
                fetchPhotos(e.target.value);
              }}
            >
              <option value="">Select Album</option>
              {albums.map((a) => (
                <option key={a._id} value={a._id}>
                  {a.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Upload Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">

          {/* Cover Upload */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-3">Upload Cover</h3>

            <label className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="file"
                className="hidden"
                onChange={(e) => setCover(e.target.files[0])}
              />

              <span className="bg-blue-600 text-white px-5 py-2 rounded cursor-pointer">
                Select Cover
              </span>

              <span className="text-sm text-gray-500">
                {cover ? cover.name : "No file selected"}
              </span>
            </label>

            <button
              onClick={uploadCover}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded w-full sm:w-auto"
            >
              Upload Cover
            </button>
          </div>

          {/* Photo Upload */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-3">Upload Photo</h3>

            <label className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="file"
                className="hidden"
                onChange={(e) => setPhoto(e.target.files[0])}
              />

              <span className="bg-green-600 text-white px-5 py-2 rounded cursor-pointer">
                Select Photo
              </span>

              <span className="text-sm text-gray-500">
                {photo ? photo.name : "No file selected"}
              </span>
            </label>

            <button
              onClick={uploadPhoto}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded w-full sm:w-auto"
            >
              {loading ? "Uploading..." : "Upload Photo"}
            </button>
          </div>
        </div>

        {/* Delete Album */}
        {selectedAlbum && (
          <div className="bg-red-50 border border-red-200 p-6 rounded-xl mb-8">
            <h3 className="text-red-600 font-semibold mb-2">
              Danger Zone
            </h3>
            <button
              onClick={deleteAlbum}
              className="bg-red-600 text-white px-6 py-2 rounded"
            >
              Delete Album
            </button>
          </div>
        )}

        {/* Photos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((p) => (
            <img
              key={p._id}
              src={p.url}
              className="rounded-xl shadow hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

