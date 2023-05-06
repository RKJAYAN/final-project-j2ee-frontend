import { Input, Form } from 'antd';
import { useEffect } from 'react';

export function CustomForm({ edit, setEdit, onSubmit }) {

    const { name, email, address, phone, website } = edit;
    const [myForm] = Form.useForm();

    const layout = {
        labelCol: {
          span: 5,
        },
        wrapperCol: {
          span: 16,
        },      
        labelAlign:"left",
      };

    useEffect(()=>{
        myForm.setFieldsValue({
            username:name,
            email:email,
            address:address,
            phone:phone,
            website:website,
        });
    },[edit]);

    return (
        
        <Form id="myForm" form={myForm} {...layout} onFinish={onSubmit}>
            <Form.Item
                label="User Name :"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}>

                <Input onChange={(e) => {
                    setEdit((pre) => {
                        return { ...pre, name: e.target.value };
                    });
                }}/>
            </Form.Item>

            <Form.Item
                label="Email :"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}>

                <Input onChange={(e) => {
                    setEdit((pre) => {
                        return { ...pre, email: e.target.value };
                    });
                }} />
            </Form.Item>

            <Form.Item
                label="Address :"
                name="address"
                rules={[{ required: true, message: 'Please input your address!' }]}>

                <Input onChange={(e) => {
                    setEdit((pre) => {
                        return { ...pre, address: e.target.value };
                    });
                }} />
            </Form.Item>

            <Form.Item
                label="Phone :"
                name="phone"
                rules={[{ required: true, message: 'Please input your phone!' }]}>

                <Input onChange={(e) => {
                    setEdit((pre) => {
                        return { ...pre, phone: e.target.value };
                    });
                }} />
            </Form.Item>

            <Form.Item
                label="Website :"
                name="website"
                rules={[{ required: true, message: 'Please input your website!' }]}>

                <Input onChange={(e) => {
                    setEdit((pre) => {
                        return { ...pre, website: e.target.value };
                    });
                }} />
            </Form.Item>
        </Form>


    )
}