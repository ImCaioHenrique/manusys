import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  margin-left: 250px; /* Espaço para o menu lateral */
  padding: 20px;
  background-color: #f0f0f0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  font-size: 1em;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1em;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/users', { name, email });
      if (response.status === 200) {
        navigate('/users');
      }
    } catch (error) {
      console.error('Erro ao adicionar usuário:', error);
    }
  };

  return (
    <Container>
      <Sidebar />
      <Content>
        <Title>Adicionar Usuário</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">Adicionar</Button>
        </Form>
      </Content>
    </Container>
  );
}

export default UserForm;