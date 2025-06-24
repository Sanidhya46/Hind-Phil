// routes/stampRoutes.js
const express = require('express');
const { getAllStamps, getStampById } = require('../controllers/stampController');
const router = express.Router();

// Route to get all stamps
router.get('/', getAllStamps);

// Route to get a specific stamp by ID
router.get('/:id', getStampById);

module.exports = router;
