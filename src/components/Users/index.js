import { Breadcrumb, Layout, Menu } from 'antd';

import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import api from '../../services/api';

const { Header, Content, Footer } = Layout;
export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    async function loadUsers() {
      setLoading(true);

      const token = localStorage.getItem('token')
      const _user = jwtDecode(token)
      console.log(_user)
      setUser(_user);
      setIsAdmin(JSON.parse(_user.userDetails).autorizacao.includes("ROLE_ADMIN"))

      const response = await api.get("/users/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const { data } = response;

      setUsers(data);
      setLoading(false);
    }

    loadUsers();
  }, []);

  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Home</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Senhas</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            {loading ? (
              'Carregando...'
            ) :
              <div>
                <h3 style={{ fontWeight: 'bold' }}>Usuário</h3>
                <p>Id: {JSON.stringify(users.id)}</p>
                <p>Nome: {JSON.stringify(users.name)}</p>
                <p>Email: {JSON.stringify(users.email)}</p>
                <h3 style={{ fontWeight: 'bold' }}>Senhas Cadastradas</h3>
                {users.passwords?.map((a) => (
                  <div>
                    <p>Id: {JSON.stringify(a.id)}</p>
                    <p>Nome: {JSON.stringify(a.name)}</p>
                    <p>Senha: {JSON.stringify(a.password)}</p>
                  </div>
                ))}
              </div>}
            {isAdmin &&
              <button>
                <Link to="/createPassword">
                  Crie uma nova senha
                </Link>
              </button>}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Password Safe - 2021</Footer>
      </Layout>
    </>
  );
}
