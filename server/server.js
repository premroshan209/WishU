// File: server/index.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const wishRoutes = require('./routes/wishRoutes');

dotenv.config();

const app = express();

// ✅ CORS (Enable only for frontend domain in production)
app.use(cors());
// app.use(cors({ origin: 'http://localhost:5173' }));

// ✅ Parse JSON body
app.use(express.json());

// ✅ Serve static uploaded files (optional)
app.use('/uploads', express.static('uploads'));

// ✅ Routes
app.use('/api/wishes', wishRoutes);

// ✅ Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(process.env.PORT || 5000, () =>
    console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
  );
})
.catch((err) => console.error('❌ MongoDB connection error:', err));
