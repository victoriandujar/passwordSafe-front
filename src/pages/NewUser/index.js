import React from 'react'

import { Breadcrumb, Layout, Menu, Input, Form, message, Button } from 'antd';
import api from '../../services/api';
import { useNavigate } from 'react-router';

const { Header, Content, Footer } = Layout;

export default function NewUser() {
    const navigate = useNavigate();
    async function onFormPassword(value) {
        const token = localStorage.getItem('token')        
        try {
            api.post('/users/1/sub-user', value,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }); 
            message.success("Usuário criado com sucesso!");
        } catch(err) {
            message.error("Houve um erro ao criar o usuário");
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
                            <Form.Item label="Nome do usuário" name="name">
                                <Input placeholder="Informe o nome da senha" />
                            </Form.Item>
                            <Form.Item label="E-mail" name="email">
                                <Input placeholder="Informe o nome da senha" />
                            </Form.Item>
                            <Form.Item label="Senha" name="masterPassword">
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
