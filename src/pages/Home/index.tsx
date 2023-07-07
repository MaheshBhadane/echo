import React from 'react';
import { Container } from '@mantine/core';

const Home: React.FC = () => {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      <main style={{ maxWidth: '800px', width: '100%' }}>
        <h2 style={{ textAlign: 'center' }}>Hello, Welcome to My Website..!!</h2>
      </main>
    </Container>
  );
};

export default Home;
