import { Button, Checkbox, Col, Form, Input, Row, Typography } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

const { Title } = Typography;

const LogIn = () => {
    const [form] = Form.useForm();

    const onFinish = (user: any) => {
        axios.post("http://localhost:5000/users/login", user)
            .then(res => {
                alert(res.data.message);
                const bearerToken = res.data.token;
                const tokenString = bearerToken.split(" ")[1];
                // console.log(tokenString);
                const decodedToken = jwtDecode(tokenString);
                console.log(decodedToken);
            })
            .catch(err => alert(err));
    }

    return (
        <>
            <Row>
                <Col>
                    <Title>Login</Title>
                    <Form
                        form={form}
                        name="login"
                        onFinish={onFinish}
                        initialValues={{ remember: true }}
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    type: "email",
                                    message: "Email is not valid!"
                                },
                                {
                                    required:true,
                                    message: "Email can't be empty!"
                                }
                            ]}
                        >
                            <Input placeholder="Username(email)" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: "Password can't be empty!" }]}
                        >
                            <Input placeholder="Password" />
                        </Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remeber me</Checkbox>
                        </Form.Item>
                        <Link to='/signup'>Forgot password</Link>
                        <Row>
                            <Form.Item
                            >
                                <Button type="primary" htmlType="submit">Login</Button>
                                Or
                                <Link to="/signup">Register now</Link>
                            </Form.Item>                            
                        </Row>
                    </Form>
                </Col>
            </Row>``
        </>
    );
}

export default LogIn;