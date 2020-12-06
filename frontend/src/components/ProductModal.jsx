import React from 'react';

import {
  Flex,
  Image,
  Button,
  Text,
  VStack,
  StackDivider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

export const ProductModal = ({ info, isOpen, onClose }) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="gray.800" borderWidth="1px" rounded={5}>
        <ModalHeader>{info.product_name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justify="center" mb={5}>
            <Image src={info.image_url}></Image>
          </Flex>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={2}
            align="stretch"
          >
            <Text textAlign="justify">Barcode: {info.barcode}</Text>
            <Text textAlign="justify">Status: {info.status}</Text>
            <Text textAlign="justify">Brands: {info.brands}</Text>
            <Text textAlign="justify">Quantity: {info.quantity}</Text>
            <Text textAlign="justify">Packaging: {info.packaging}</Text>
            <Text textAlign="justify">Categories: {info.categories}</Text>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
