const mongoose = require('mongoose');

const recipientSchema = new mongoose.Schema({
  name: String,
  email: String,
  dob: String,
});

const giftSchema = new mongoose.Schema({
  type: String, // 'code', 'link', or 'image'
  code: String,
  url: String,
  imageUrl: String, // ✅ Cloudinary image URL for gift (replaces "file")
  description: String,
});

const wishSchema = new mongoose.Schema({
  wishType: String,
  themeId: String,
  recipients: [recipientSchema],
  images: [String], // ✅ Cloudinary URLs for wish showcase images
  gifts: [giftSchema],
  quotes: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Wish', wishSchema);
