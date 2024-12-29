import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  position: fixed;
`;

const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 10px 0;
  font-size: 1.2em;

  &:hover {
    text-decoration: underline;
  }
`;

const LogoutButton = styled.button`
  color: white;
  background-color: #333;
  border: none;
  margin: 10px 0;
  font-size: 1.2em;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove o token do localStorage
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <SidebarContainer>
      <h2>Menu</h2>
      <SidebarLink to="/users">Users</SidebarLink>
      <SidebarLink to="/users/new">New User</SidebarLink>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </SidebarContainer>
  );
}

export default Sidebar;