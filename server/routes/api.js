const express = require('express');

const router = new express.Router();

router.get('/stocks', (req, res) => {
  res.status(200).json({
    message: "Logged in and viewing stocks",
    // user values passed through from auth middleware
    user: req.user
  });
});

module.exports = router;