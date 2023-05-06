import { Layout } from 'antd';
import { Sidebar } from './DashComp/Sidebar';
import { HeaderComp } from './DashComp/HeaderComp';
import { FooterComp } from './DashComp/FooterComp';



const TestMenu = () => {

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sidebar />

      <Layout className="site-layout">

        <HeaderComp />



        <FooterComp />

      </Layout>
    </Layout>
  );
};
export default TestMenu;