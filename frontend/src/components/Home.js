// filepath: /home/caio/manuSys/frontend/src/components/Home.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  color: #333;
`;

const Description = styled.p`
  color: #666;
  font-size: 1.2em;
`;

function Home() {
  return (
    <Container>
      <Title>Bem-vindo ao ManuSys</Title>
      <Description>Esta é a página inicial do sistema.</Description>
    </Container>
  );
}

export default Home;