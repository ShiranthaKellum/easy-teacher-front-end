import { Button, Col, Form, Input, Row, Typography } from "antd";
import axios from "axios";

const { Title } = Typography;

const LogIn = () => {
    const [form] = Form.useForm();

    const onFinish = (user: any) => {
        axios.post("http://localhost:5000/users/login", user)
            .then(res => alert(res.data.message))
            .catch(err => alert(err));
    }

    return (
        <>
            <Row justify="center">
                <Col>
                    <Title>Login</Title>
                    <Form
                        form={form}
                        name="login"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                        >
                            <Input placeholder="Username(email)" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                        >
                            <Input placeholder="Password" />
                        </Form.Item>
                        <Row>
                            <Form.Item
                            >
                                <Button type="primary" htmlType="submit">Login</Button>
                            </Form.Item>
                            <Form.Item
                            >
                                <Button type="primary" htmlType="submit">Login</Button>
                            </Form.Item>
                        </Row>
                    </Form>
                </Col>
            </Row>``
        </>
    );
}

export default LogIn;