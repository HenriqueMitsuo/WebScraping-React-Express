import React, { useState } from 'react';
import {
  Flex,
  Image,
  Box,
  Heading,
  Button,
  useDisclosure,
  Skeleton,
} from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';
import { ProductModal } from './ProductModal';

export const ProductBox = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <Box p={1} bg="gray.700" borderWidth="1px" rounded={5}>
        <Flex my={2} justify="center">
          <Skeleton
            startColor="teal.900"
            endColor="teal.300"
            isLoaded={!isLoading}
          >
            <Image
              borderRadius={5}
              boxSize="90px"
              objectFit="contain"
              src={product.image_url}
              onLoad={() => setIsLoading(false)}
            />
          </Skeleton>
        </Flex>
        <Flex align="center" justify="center">
          <Heading as="h3" size="md">
            {product.product_name}
          </Heading>
        </Flex>
        <Flex my={2} align="center" justify="center">
          <Button
            rightIcon={<QuestionIcon />}
            variant="solid"
            colorScheme="teal"
            onClick={onOpen}
          >
            Learn more
          </Button>
        </Flex>
      </Box>
      <ProductModal info={product} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
