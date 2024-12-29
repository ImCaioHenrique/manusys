import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
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
`;

const Title = styled.h1`
  color: #333;
`;

const UserListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 600px;
`;

const UserItem = styled.li`
  background-color: #fff;
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const token = localStorage.getItem('token'); // Recupere o token do localStorage
        const response = await axios.get('http://localhost:8000/users', {
          headers: {
            'Authorization': `Bearer ${token}` // Adicione o token ao cabeçalho da solicitação
          }
        });
        setUsers(response.data);
      } catch (error) {
        console.error("There was an error fetching the users!", error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <Container>
      <Sidebar />
      <Content>
        <Title>Users</Title>
        <UserListContainer>
          {users.map(user => (
            <UserItem key={user.id}>
              <span>{user.name}</span>
              <span>{user.email}</span>
            </UserItem>
          ))}
        </UserListContainer>
      </Content>
    </Container>
  );
}

export default UserList;