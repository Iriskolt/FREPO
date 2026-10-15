const express = require('express');
const uploadController = require('../controllers/uploadController');
const uploadMiddleware = require('../middleware/upload');

const router = express.Router();

const setRoutes = (app) => {
    router.post('/upload', uploadMiddleware.single('file'), uploadController.uploadFile);
    app.use('/api', router);
};

module.exports = setRoutes;