import React from 'react';
import { Heading } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <Heading as="h2" size="xl">
          Products List
        </Heading>
      </ul>
    </nav>
  );
};

export default Navbar;
