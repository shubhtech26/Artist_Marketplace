import express from 'express';
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @route   POST /api/users
// @desc    Register a user
router.post('/', registerUser);

// @route   POST /api/users/login
// @desc    Auth user & get token
router.post('/login', loginUser);

// @route   GET /api/users/profile
// @desc    Get user profile
router.get('/profile', protect, getUserProfile);

// @route   PUT /api/users/profile
// @desc    Update user profile
router.put('/profile', protect, updateUserProfile);

export default router; 