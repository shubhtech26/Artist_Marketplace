import React from "react";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const Card = styled("div")({
  backgroundColor: "#FFFFFF",
  borderRadius: "12px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "0.3s",
  padding: "15px",
  textAlign: "center",
  width: "300px",
  minHeight: "400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "&:hover": {
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
  },
});

const ProductImage = styled("img")({
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "10px",
});

const ProductDetails = styled("div")({
  padding: "10px 0",
});

const ProductName = styled("h3")({
  fontSize: "1.2rem",
  fontWeight: "bold",
});

const ProductCategory = styled("p")({
  fontSize: "0.9rem",
  color: "#757575",
});

const ProductPrice = styled("p")({
  fontSize: "1.1rem",
  fontWeight: "bold",
  color: "#FF4081",
});

const Rating = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
  fontSize: "0.9rem",
  fontWeight: "bold",
});

const AddToCartButton = styled("button")(({ inStock }) => ({
  backgroundColor: inStock ? "#FF4081" : "#E0E0E0",
  color: inStock ? "#FFFFFF" : "#757575",
  borderRadius: "50px",
  padding: "10px",
  fontSize: "0.9rem",
  width: "100%",
  border: "none",
  cursor: inStock ? "pointer" : "not-allowed",
  "&:hover": inStock ? { backgroundColor: "#E73370" } : {},
}));

const ProductCard_v2 = ({ product }) => {
  const navigate = useNavigate();

  if (!product) return null;

  const handleCardClick = () => {
    navigate(`/product/${product.id}`); // Navigate to the product details page
  };

  return (
    <Card onClick={handleCardClick}>
      <ProductImage src={product.image} alt={product.name} />
      <ProductDetails>
        <ProductName>{product.name}</ProductName>
        <ProductCategory>{product.category} • {product.style}</ProductCategory>
        <p>Size: {product.size || "N/A"} | Medium: {product.medium || "N/A"}</p>
        <Rating>
          <StarIcon style={{ color: "#FFD700" }} />
          {product.rating} ({product.reviews} reviews)
        </Rating>
        <ProductPrice>${product.price}</ProductPrice>
      </ProductDetails>
      <AddToCartButton inStock={product.inStock}>
        {product.inStock ? "Add to Cart" : "Out of Stock"}
      </AddToCartButton>
    </Card>
  );
};

export default ProductCard_v2;
