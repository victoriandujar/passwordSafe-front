import React from 'react'

import { Breadcrumb, Layout, Menu, Input, Form, message, Button } from 'antd';
import api from '../../services/api';
import { useNavigate } from 'react-router';

const { Header, Content, Footer } = Layout;

export default function NewPassword() {
    const navigate = useNavigate();
    async function onFormPassword(value) {
        const token = localStorage.getItem('token')        
        const response = await api.get("/users/me", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const { data } = response;
        try {
            api.post('/users/'+ data.id +'/password', value,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }); 
            message.success("Senha criada com sucesso!");
        } catch(err) {
            message.error("Houve um erro ao criar a senha");
        }
        navigate('/dashboard') 
    }

    return (
        <div>
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
                        <Breadcrumb.Item>Criar nova senha</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">
                        <Form layout="vertical" onFinish={onFormPassword}>
                            <Form.Item label="Nome da senha" name="name">
                                <Input placeholder="Informe o nome da senha" />
                            </Form.Item>
                            <Form.Item label="Senha" name="password">
                                <Input.Password placeholder="Informe a senha" />
                            </Form.Item>
                            <Button type="primary" htmlType="submit">Criar Senha</Button>
                        </Form>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Password Safe - 2021</Footer>
            </Layout>
        </div>
    )
}
