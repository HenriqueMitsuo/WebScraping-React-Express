import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import { ProductBox } from './ProductBox';

export const ProductList = ({ products }) => {
  const renderList = products.map((product) => {
    return <ProductBox product={product} key={product._id} />;
  });
  return (
    <SimpleGrid columns={[1, null, 2]} spacing="20px" px={10} py={5}>
      {renderList}
    </SimpleGrid>
  );
};
