import React, { useState, useEffect } from "react";
import { Avatar, Button, Divider, Form, Input, Typography, Alert } from 'antd';
import "./Loging.css";
import ImgLogo from '../../Images/logo-hms.png';
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../AuthComp/useAuthContext";
import Spinner from "../Loading/Spinner";
import { callApiPost } from "../../Services/CallApi";
import apis from "../../Services/Apis";


function Login() {

    const navigate = useNavigate();
    const {setUser} = useAuthContext();
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

     useEffect(() => {
        if(location.state !== null && location.state.error){
            setErr(location.state.errormsg);
          }
        setLoading(false);
        setUser({  name:"", role:"", token:"" });
      }, []);


    const onFinish = (values) => {
        setLoading(true);
        const { userName, userPassword } = values;

        callApiPost(apis.LOGIN, { userName, userPassword })
            .then((res) => {
                if(!res.userName){ 
                    setErr("Invalid User name or Password.");
                }else{        
                    setUser({  name:res.userName, role:res.userRole, token:res.userPassword });                
                    navigate("/dashboard");
                }
                setLoading(false);
            })
            .catch((err) => { 
                setErr(err.message);
                setLoading(false); 
            });            
    };

    return (
        <div className="login-bg ">

            {loading ? <Spinner /> : ""}    

            <Form name="basic"
                layout="vertical"
                className="login-form"
                onFinish={onFinish}
            >

                <Avatar size={90} src={ImgLogo} className="img1" />

                <Typography.Title level={3} className="txt">Hospital Management System  </Typography.Title>

                <Form.Item
                    label="User Name :"
                    name="userName"
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input />

                </Form.Item>

                <Form.Item label="Password :"
                    name="userPassword"
                    rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password />
                </Form.Item>             

                { err !== null ? <div><Alert message = {err} type="error" showIcon /> &nbsp;</div> : ""}

                <Button type="primary" htmlType="submit" block> Login </Button>

                <Divider style={{ fontSize: "10px", color: "#707070" }}>Develop By Rajitha K Jayanetti V1.0</Divider>

            </Form>

        </div>
    )
}
export default Login
