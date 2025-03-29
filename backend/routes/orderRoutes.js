import express from 'express';
import {
  createOrder,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  createPaymentIntent,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @route   POST /api/orders
// @desc    Create a new order
router.post('/', protect, createOrder);

// @route   GET /api/orders/myorders
// @desc    Get logged in user orders
router.get('/myorders', protect, getMyOrders);

// @route   GET /api/orders/:id
// @desc    Get order by ID
router.get('/:id', protect, getOrderById);

// @route   PUT /api/orders/:id/pay
// @desc    Update order to paid
router.put('/:id/pay', protect, updateOrderToPaid);

// @route   POST /api/orders/create-payment-intent
// @desc    Create payment intent with Stripe
router.post('/create-payment-intent', protect, createPaymentIntent);

export default router; 