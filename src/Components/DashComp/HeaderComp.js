import React, { useEffect } from "react";
import { Layout, theme, Switch, Space } from 'antd';
import { useAuthContext } from "../AuthComp/useAuthContext";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;


export function HeaderComp({ setDarkMode, darkMode }) {
    //const { user, role, token } = useAuthContext();
    const {user, setUser} = useAuthContext();
    const navigate = useNavigate();

    //console.log("User detals Header Page" + user);

    useEffect(() => {
        if (!user.name) {
             navigate("/login");
        }
    });

    return (
        <Header style={{ padding: 0, background: "#001529", color: "#fff", fontSize: "25px", 
            padding: "0 30px", fontWeight: "bold" }} >
            Hospital Managment System   

            <Space align="center" style={{ display: 'block', float: "right" }}>
                <Switch
                    style={{ background:"#666464" }}
                    checked={darkMode}
                    checkedChildren="Dark Mode"
                    unCheckedChildren="Light Mode"
                    onChange={() => setDarkMode(!darkMode)}
                />
            </Space>

            <Space align="center" style={{ display: 'block', float: "right", paddingRright: "20px" }}>
                <div style={{ paddingRight: "20px", color:"#008000"}}>Welcome, {user.name}</div>
            </Space>

        </Header>
    )
}