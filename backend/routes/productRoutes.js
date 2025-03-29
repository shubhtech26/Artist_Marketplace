import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
} from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @route   GET /api/products
// @desc    Fetch all products
router.get('/', getProducts);

// @route   GET /api/products/:id
// @desc    Fetch single product
router.get('/:id', getProductById);

// @route   POST /api/products
// @desc    Create a product
router.post('/', protect, createProduct);

// @route   PUT /api/products/:id
// @desc    Update a product
router.put('/:id', protect, updateProduct);

// @route   DELETE /api/products/:id
// @desc    Delete a product
router.delete('/:id', protect, deleteProduct);

// @route   POST /api/products/:id/reviews
// @desc    Create new review
router.post('/:id/reviews', protect, createProductReview);

export default router; 