// File: backend/controllers/wishController.js
const Wish = require('../models/Wish');
const cloudinary = require('../utils/cloudinary');
const fs = require('fs');

exports.createWish = async (req, res) => {
  try {
    const {
      wishType,
      themeId,
      recipients,
      gifts,
      quotes,
    } = req.body;

    const parsedRecipients = JSON.parse(recipients);
    const parsedQuotes = JSON.parse(quotes);
    const parsedGifts = JSON.parse(gifts);

    const uploadedImages = [];

    // Upload wish showcase images
    for (const file of req.files['images'] || []) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'wishu/wish-images',
      });
      uploadedImages.push(result.secure_url);
      fs.unlinkSync(file.path); // cleanup
    }

    // Upload gift images and attach to gifts array
    for (let i = 0; i < parsedGifts.length; i++) {
      const gift = parsedGifts[i];
      if (gift.type === 'image' && req.files[`giftImage-${i}`]) {
        const file = req.files[`giftImage-${i}`][0];
        const result = await cloudinary.uploader.upload(file.path, {
          folder: 'wishu/gift-images',
        });
        gift.imageUrl = result.secure_url;
        fs.unlinkSync(file.path); // cleanup
      }
    }

    const newWish = new Wish({
      wishType,
      themeId,
      recipients: parsedRecipients,
      gifts: parsedGifts,
      quotes: parsedQuotes,
      images: uploadedImages,
    });

    await newWish.save();
    res.status(201).json({ message: 'Wish saved successfully!', wishId: newWish._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

// ✅ GET wish by ID
exports.getWishById = async (req, res) => {
  try {
    const wish = await Wish.findById(req.params.id);
    if (!wish) {
      return res.status(404).json({ message: 'Wish not found' });
    }
    res.status(200).json(wish);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};
