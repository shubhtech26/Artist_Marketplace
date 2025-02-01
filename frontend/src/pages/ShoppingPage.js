import React, { useState } from "react";
import { styled } from '@mui/system';
import ProductCard from "../components/ProductCard_v2";
import mockProducts from "../assets/mockProduct";
import Navbar from "../components/Navbar";
import FilterSection from "../components/FilterSection";

const ShoppingPageContainer = styled('div')({
  backgroundColor: '#F5F5F5',
  minHeight: '100vh',
  padding: '20px',
  fontFamily: "'Poppins', sans-serif",
});

const ContentWrapper = styled('div')({
  display: 'flex',
  gap: '20px',
  flexDirection: 'column',  // Default to column layout for smaller screens
  '@media (min-width: 768px)': {
    flexDirection: 'row', // Switch to row layout for larger screens
  },
});

const FilterWrapper = styled('div')({
  width: '100%',  // Take full width by default
  '@media (min-width: 768px)': {
    width: '250px', // Fixed width for larger screens
  },
});

const ProductGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', // Auto adjust columns based on screen size
  gap: '20px 40px',
  width: '100%',
  maxWidth: '1200px',
  justifyContent: 'center',
  '@media (max-width: 480px)': {
    gridTemplateColumns: '1fr',  // Stack products in single column on small screens
  },
  '@media (min-width: 481px) and (max-width: 767px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',  // Two columns for medium screens
  }
});

const ShoppingPage = () => {
  const [filters, setFilters] = useState({
    category: "",
    size: "",
    style: "",
    medium: "",
    frameType: "",
    priceRange: [100, 1000],
    inStock: false,
  });

  // Apply Filters
  const filteredProducts = mockProducts.filter((product) => {
    return (
      (filters.category === "" || product.category === filters.category) &&
      (filters.size === "" || product.size === filters.size) &&
      (filters.style === "" || product.style === filters.style) &&
      (filters.medium === "" || product.medium === filters.medium) &&
      (filters.frameType === "" || product.frameType === filters.frameType) &&
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1] &&
      (!filters.inStock || product.inStock)
    );
  });

  return (
    <div>
      <Navbar />
      <ShoppingPageContainer>
        <ContentWrapper>
          <FilterWrapper>
            <FilterSection filters={filters} setFilters={setFilters} />
          </FilterWrapper>

          <ProductGrid>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>No products match the selected filters.</p>
            )}
          </ProductGrid>
        </ContentWrapper>
      </ShoppingPageContainer>
    </div>
  );
};

export default ShoppingPage;
