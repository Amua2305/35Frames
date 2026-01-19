import express from "express";
import multer from "multer";
import cloudinary from "../cloudinary.js";
import Photo from "../models/Photo.js";
import auth from "../middleware/auth.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

/* ================= UPLOAD PHOTO ================= */
router.post("/:albumId", auth, upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: `albums/${req.params.albumId}`,
    });

    const photo = await Photo.create({
      albumId: req.params.albumId,
      url: result.secure_url,
      publicId: result.public_id,
    });

    res.json(photo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:photoId", auth, async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.photoId);

    if (!photo) {
      return res.status(404).json({ error: "Photo not found" });
    }

    // delete from cloudinary
    await cloudinary.uploader.destroy(photo.publicId);

    // delete from DB
    await Photo.findByIdAndDelete(photo._id);

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ✅ GET PHOTOS (PUBLIC) */
router.get("/public/:albumId", async (req, res) => {
  try {
    const photos = await Photo.find({
      albumId: req.params.albumId,
    });

    res.json(photos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
