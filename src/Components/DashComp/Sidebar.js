import { useState } from "react";
import { Layout, Menu } from 'antd';
import Items from './MenuData';

const { Sider } = Layout;

export function Sidebar({ setKey }) {
    const [collapsed, setCollapsed] = useState(false);

    const goToMenu = (key) => {
        setKey(key);
    }

    //console.log(Items);

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={Items} onClick={({ key }) => goToMenu(key)} />
        </Sider>
    )

}


