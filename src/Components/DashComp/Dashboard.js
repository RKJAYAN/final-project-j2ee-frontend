import React, { useState, useEffect } from "react";
import { Layout, ConfigProvider, theme } from 'antd';
import { Sidebar } from './Sidebar';
import { HeaderComp } from './HeaderComp';
import { FooterComp } from './FooterComp';
import { BodyContent } from "./BodyContent";
import { useAuthContext } from "../AuthComp/useAuthContext";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

function Dashboard() {

    const [key, setKey] = useState(null);
    const [darkMode, setDarkMode] = useState(false);
    const { user, setUser } = useAuthContext();
    const navigate = useNavigate();
    const userName = user.name;

    useEffect(() => {
        if (userName == "") {
            navigate("/", { state: { error: true, errormsg: "Please log into the system." } });
        }
    }, []);



    return (
 
        <ConfigProvider theme={{
            algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
            token: {
                colorPrimary: 'Green',
            },
        }}>

{!userName ? "" : (

            <Layout style={{ minHeight: '100vh' }} >
                <Sidebar setKey={setKey} />

                <Layout className="site-layout">
                    <HeaderComp setDarkMode={setDarkMode} darkMode={darkMode} />

                    <Content style={{ margin: '0 0px' }}>
                        <div style={{ padding: 24, minHeight: 360, background: "#cococo" }} >
                            <BodyContent refKey={key} />
                        </div>
                    </Content>

                    <FooterComp />
                </Layout>
            </Layout>
            )}
        </ConfigProvider>
    );
    
};


export default Dashboard