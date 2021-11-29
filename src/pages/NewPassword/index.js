import React from 'react'

import { Breadcrumb, Layout, Menu, Input, Form, message, Button } from 'antd';
import api from '../../services/api';

const { Header, Content, Footer } = Layout;

export default function NewPassword() {
    function onFormPassword(value) {
        try {
            api.post('/users/1/password', value); 
            message.success("Senha criada com sucesso!");
        } catch(err) {
            message.error("Houve um erro ao criar a senha");
        }
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
