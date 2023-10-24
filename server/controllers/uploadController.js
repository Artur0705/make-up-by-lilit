const cloudinary = require("../utils/cloudinaryConfig");
// const { verifyToken } = require("../middlewares/authMiddleware");

exports.uploadImage = [
  //   verifyToken,
  (req, res) => {
    console.log(req.headers); // Check the request headers
    console.log(req.body); // Check the request body

    const fileStr = req.file.buffer.toString("base64");

    cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${fileStr}`,
      (error, result) => {
        if (error) {
          return res.status(500).send(error);
        }

        res.json({ imageUrl: result.secure_url });
      }
    );
  },
];
