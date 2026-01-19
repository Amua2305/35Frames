
import express from "express";
import Album from "../models/Album.js";
import Photo from "../models/Photo.js";
import cloudinary from "../cloudinary.js";
import multer from "multer";
import auth from "../middleware/auth.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

/* ================= PUBLIC ================= */

// Get all albums
router.get("/", async (req, res) => {
  try {
    const albums = await Album.find().sort({ createdAt: -1 });
    res.json(albums);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= ADMIN ================= */

// Create album
router.post("/", auth, async (req, res) => {
  const { title } = req.body;

  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  const exists = await Album.findOne({ slug });
  if (exists) return res.status(400).json({ error: "Album already exists" });

  const album = await Album.create({ title, slug });
  res.json(album);
});

// Upload cover
router.post("/:id/cover", auth, upload.single("image"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const album = await Album.findById(req.params.id);

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: `albums/${album._id}`,
    });

    album.coverUrl = result.secure_url;
    album.coverPublicId = result.public_id;
    await album.save();

    res.json(album);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ DELETE ALBUM (IMPORTANT)
router.delete("/:id", auth, async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);

    if (!album) {
      return res.status(404).json({ error: "Album not found" });
    }

    // delete cover from cloudinary
    if (album.coverPublicId) {
      await cloudinary.uploader.destroy(album.coverPublicId);
    }

    // delete photos
    const photos = await Photo.find({ albumId: album._id });
    for (let p of photos) {
      await cloudinary.uploader.destroy(p.publicId);
    }

    await Photo.deleteMany({ albumId: album._id });
    await Album.findByIdAndDelete(album._id);

    res.json({ success: true, message: "Album deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
