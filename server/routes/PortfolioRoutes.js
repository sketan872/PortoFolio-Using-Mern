const express = require('express');
const { sendEmailController } = require('../controller/PortfolioController'); // Correct import path

// Router object
const router = express.Router();

// Routes
router.post('/sendEmail', sendEmailController);

// Export
module.exports = router;
