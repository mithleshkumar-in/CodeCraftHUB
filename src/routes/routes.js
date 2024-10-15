// routes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const profileController = require('../controllers/profileController');

router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/profile', userController.getUserProfile);
router.put('/profile', userController.updateUserProfile);
router.get('/profile/data', profileController.getProfileData);
router.put('/profile/data', profileController.updateProfileData);

module.exports = router;