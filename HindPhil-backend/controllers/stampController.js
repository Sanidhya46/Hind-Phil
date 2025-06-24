// controllers/stampController.js
const stamps = require('../data/stamps');

// Fetch all stamps
const getAllStamps = (req, res) => {
  res.json(stamps);
};

// Fetch a single stamp by ID
const getStampById = (req, res) => {
  const stamp = stamps.find((s) => s.id === parseInt(req.params.id));
  if (stamp) {
    res.json(stamp);
  } else {
    res.status(404).json({ message: 'Stamp not found' });
  }
};

module.exports = { getAllStamps, getStampById };
