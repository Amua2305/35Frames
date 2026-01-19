// import express from "express";
// import Album from "../models/Album.js";
// import auth from "../middleware/auth.js";

// const router = express.Router();

// // PUBLIC: get albums
// router.get("/public", async (req, res) => {
//   const albums = await Album.find().sort({ createdAt: -1 });
//   res.json(albums);
// });

// // ADMIN: create album
// router.post("/", auth, async (req, res) => {
//   try {
//     const { title } = req.body;
//     const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

//     const exists = await Album.findOne({ slug });
//     if (exists) return res.status(400).json({ error: "Album exists" });

//     const album = await Album.create({ title, slug });
//     res.json(album);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // DELETE album
// router.delete("/:id", auth, async (req, res) => {
//   await Album.findByIdAndDelete(req.params.id);
//   res.json({ success: true });
// });

// export default router;


// import express from "express";
// import multer from "multer";
// import cloudinary from "../cloudinary.js";
// import Photo from "../models/Photo.js";
// import auth from "../middleware/auth.js";

// const router = express.Router();
// const upload = multer({ dest: "uploads/" });

// /* ================= UPLOAD PHOTO ================= */
// router.post("/:albumId", auth, upload.single("image"), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: "No file uploaded" });
//     }

//     const result = await cloudinary.uploader.upload(req.file.path, {
//       folder: `albums/${req.params.albumId}`,
//     });

//     const photo = await Photo.create({
//       albumId: req.params.albumId,
//       url: result.secure_url,
//       publicId: result.public_id,
//     });

//     res.json(photo);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// /* ============ GET PHOTOS (PUBLIC) ============ */
// router.get("/public/:albumId", async (req, res) => {
//   try {
//     const photos = await Photo.find({ albumId: req.params.albumId });
//     res.json(photos);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;



import mongoose from "mongoose";

const photoSchema = new mongoose.Schema(
  {
    albumId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Album",
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Photo", photoSchema);
