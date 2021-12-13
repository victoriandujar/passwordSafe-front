import { Breadcrumb, Button, Layout, Menu, Space } from 'antd';

import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import api from '../../services/api';

const { Content, Footer } = Layout;
export default function UsersList() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [user, setUser] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUsers() {
      setLoading(true);

      const token = localStorage.getItem('token')
      const _user = jwtDecode(token)
      console.log(_user)
      setUser(_user);
      setIsAdmin(JSON.parse(_user.userDetails).autorizacao.includes("ROLE_ADMIN"))
      try {
        const response = await api.get("/users/me", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const { data } = response;
  
        setUsers(data);
        setLoading(false);
      } catch {
        setError(true);
      }
    }

    loadUsers();
  }, []);

  function logout() {
    localStorage.removeItem('token');

    navigate('/dashboard');
  }

  return (

    <Layout>
      <div className="logo" />
      <Menu mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home</Menu.Item>
      </Menu>

      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Senhas e Usuários</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          {loading && !error ? (
            'Carregando...'
          ) :
            <div>
              <h3 style={{ fontWeight: 'bold' }}>Usuário</h3>
              <p>Id: {users?.id}</p>
              <p>Nome: {users?.name}</p>
              <p>Email: {users?.email}</p>
              {isAdmin && !error ? (
                <>
                  <h3 style={{ fontWeight: 'bold' }}>Senhas Cadastradas</h3>
                  {users?.passwords?.map((a) => (
                    <div key={a.id}>
                      <p>Id: {a?.id}</p>
                      <p>Nome: {a?.name}</p>
                      <p>Senha: {a?.password}</p>
                    </div>
                  ))}
                </>
              ) : ''}
            </div>}
          {isAdmin && !error ?
            <Space>
              <Button type="primary">
                <Link to="/createPassword">
                  Crie uma nova senha
                </Link>
              </Button>
              <Button type="primary">
                <Link to="/newUser">
                  Crie novo usuário
                </Link>
              </Button>
            </Space> : ''}
        </div>

        <Button type="primary" onClick={logout}>Sair</Button>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Password Safe - 2021</Footer>
    </Layout>
  );
}
