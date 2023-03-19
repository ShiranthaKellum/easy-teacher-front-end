import { Form, Input, Button, Typography } from "antd";
import axios from "axios";

const SignUp = () => {
    const [form] = Form.useForm();

    const onFinish = (user: any) => {
        axios.post("http://localhost:5000/users/register", user)
            .then(res => alert(res.data.message))
            .catch(err => console.log(err));
    }

    return (
        <>
            <Typography >Registration</Typography>
            <Form
                form={form}
                name='register'
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
                scrollToFirstError
            >
                <Form.Item
                    name='name'
                >
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                    name='email'
                >
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name='password'
                >
                    <Input placeholder="Password" />
                </Form.Item>
                <Form.Item
                    name='confirm-password'
                    // label='Confirm Password'
                    rules={[
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error('Not match!!!')
                                );
                            },
                        }),
                    ]}
                >
                    <Input placeholder="Confirm password" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Register</Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default SignUp;