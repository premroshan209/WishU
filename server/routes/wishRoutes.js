// File: backend/routes/wishRoutes.js

const express = require('express');
const router = express.Router();
const { createWish, getWishById } = require('../controllers/wishController');
const upload = require('../middleware/multer');

// POST new wish (already implemented)
router.post('/', upload.any(), createWish);

// ✅ GET wish by ID (NEW)
router.get('/:id', getWishById);

module.exports = router;
