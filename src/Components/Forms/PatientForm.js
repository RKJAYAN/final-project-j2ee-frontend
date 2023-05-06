import { Input, Form } from 'antd';
import { useEffect } from 'react';

export function PatientForm({ edit, setEdit, onSubmit }) {

    const { patientFirstName, patientLastName, patientContactNo, patientAddress, patientCity, patientCountry, patientNIC } = edit;
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
            patientFirstName:patientFirstName,
            patientLastName:patientLastName,
            patientContactNo:patientContactNo,
            patientAddress:patientAddress,
            patientCity:patientCity,
            patientCountry:patientCountry,
            patientNIC:patientNIC,           
        });
    },[edit]);

    return (
        
        <Form id="myForm" form={myForm} {...layout} onFinish={onSubmit}>
            <Form.Item
                label="First Name :"
                name="patientFirstName"
                rules={[{ required: true, message: 'Please input your First Name!' }]}>

                <Input onChange={(e) => {
                    setEdit((pre) => {
                        return { ...pre, patientFirstName: e.target.value };
                    });
                }}/>
            </Form.Item>

            <Form.Item
                label="Last Name :"
                name="patientLastName"
                rules={[{ required: true, message: 'Please input Last Name!' }]}>

                <Input onChange={(e) => {
                    setEdit((pre) => {
                        return { ...pre, patientLastName: e.target.value };
                    });
                }} />
            </Form.Item>

            <Form.Item
                label="Contact No :"
                name="patientContactNo"
                rules={[{ required: true, message: 'Please input Contact No!' }]}>

                <Input onChange={(e) => {
                    setEdit((pre) => {
                        return { ...pre, patientContactNo: e.target.value };
                    });
                }} />
            </Form.Item>

            <Form.Item
                label="Address :"
                name="patientAddress"
                rules={[{ required: true, message: 'Please input Address!' }]}>

                <Input onChange={(e) => {
                    setEdit((pre) => {
                        return { ...pre, patientAddress: e.target.value };
                    });
                }} />
            </Form.Item>

            <Form.Item
                label="City :"
                name="patientCity"
                rules={[{ required: true, message: 'Please input City!' }]}>

                <Input onChange={(e) => {
                    setEdit((pre) => {
                        return { ...pre, patientCity: e.target.value };
                    });
                }} />
            </Form.Item>

            <Form.Item
                label="Country :"
                name="patientCountry"
                rules={[{ required: true, message: 'Please input Country!' }]}>

                <Input onChange={(e) => {
                    setEdit((pre) => {
                        return { ...pre, patientCountry: e.target.value };
                    });
                }} />
            </Form.Item>

            <Form.Item
                label="NIC  :"
                name="patientNIC"
                rules={[{ required: true, message: 'Please input NIC!' }]}>

                <Input onChange={(e) => {
                    setEdit((pre) => {
                        return { ...pre, patientNIC : e.target.value };
                    });
                }} />
            </Form.Item>

                                
        </Form>


    )
}