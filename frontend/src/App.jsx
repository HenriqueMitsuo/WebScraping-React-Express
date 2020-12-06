import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Flex } from '@chakra-ui/react';

import { ApiService } from './services/ApiService';

import NavBar from './layouts/NavBar';
import { ProductList } from './components/ProductList';

function App() {
  const productsService = new ApiService('products');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(99);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await productsService.queryAll({ page: page });
    setTotalPages(response.totalPages);
    setProducts(products.concat(response.data));
    setIsLoading(false);
  };

  useEffect(() => {
    if (page < totalPages) {
      setIsLoading(true);
      fetchProducts();
    }
  }, [page]);

  return (
    <div className="teste">
      <NavBar></NavBar>
      <ProductList products={products}></ProductList>
      <Flex px={10} py={5}>
        <Button
          onClick={() => setPage(page + 1)}
          variant="solid"
          colorScheme="teal"
          isLoading={isLoading}
          isFullWidth
        >
          Load More
        </Button>
      </Flex>
    </div>
  );
}

export default App;
