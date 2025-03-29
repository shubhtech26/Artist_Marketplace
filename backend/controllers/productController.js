import Product from '../models/Product.js';
import User from '../models/User.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    // Implement filtering based on query parameters
    const filters = {};
    
    // Apply category filter if it exists
    if (req.query.category && req.query.category !== '') {
      filters.category = req.query.category;
    }
    
    // Apply style filter if it exists
    if (req.query.style && req.query.style !== '') {
      filters.style = req.query.style;
    }
    
    // Apply size filter if it exists
    if (req.query.size && req.query.size !== '') {
      filters.size = req.query.size;
    }
    
    // Apply medium filter if it exists
    if (req.query.medium && req.query.medium !== '') {
      filters.medium = req.query.medium;
    }
    
    // Apply frameType filter if it exists
    if (req.query.frameType && req.query.frameType !== '') {
      filters.frameType = req.query.frameType;
    }
    
    // Apply inStock filter if it exists
    if (req.query.inStock === 'true') {
      filters.inStock = true;
    }
    
    // Apply price range filter if it exists
    if (req.query.minPrice || req.query.maxPrice) {
      filters.price = {};
      if (req.query.minPrice) {
        filters.price.$gte = Number(req.query.minPrice);
      }
      if (req.query.maxPrice) {
        filters.price.$lte = Number(req.query.maxPrice);
      }
    }
    
    const products = await Product.find(filters);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = async (req, res) => {
  try {
    const {
      name,
      category,
      style,
      size,
      medium,
      frameType,
      price,
      image,
      description,
      inStock,
    } = req.body;

    const product = new Product({
      name,
      category,
      style,
      size,
      medium,
      frameType,
      price,
      image,
      description,
      inStock,
      artist: req.userId, // Set the artist as the current user
      rating: 0,
      reviewCount: 0,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = async (req, res) => {
  try {
    const {
      name,
      category,
      style,
      size,
      medium,
      frameType,
      price,
      image,
      description,
      inStock,
    } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = name || product.name;
      product.category = category || product.category;
      product.style = style || product.style;
      product.size = size || product.size;
      product.medium = medium || product.medium;
      product.frameType = frameType || product.frameType;
      product.price = price || product.price;
      product.image = image || product.image;
      product.description = description || product.description;
      product.inStock = inStock !== undefined ? inStock : product.inStock;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.deleteOne();
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      // Check if user already submitted a review
      const alreadyReviewed = product.reviews.find(
        (r) => r.user.toString() === req.userId.toString()
      );

      if (alreadyReviewed) {
        return res.status(400).json({ message: 'Product already reviewed' });
      }

      const user = await User.findById(req.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const review = {
        name: user.name,
        rating: Number(rating),
        comment,
        user: req.userId,
      };

      product.reviews.push(review);
      product.reviewCount = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;

      await product.save();
      res.status(201).json({ message: 'Review added' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
}; 