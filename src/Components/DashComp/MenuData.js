import { FileOutlined, ForkOutlined, FileDoneOutlined, DeploymentUnitOutlined, BehanceOutlined, TeamOutlined } from '@ant-design/icons';
import { Outlet, Link, BrowserRouter,Routes,Route  } from "react-router-dom";

function getItem(label, key, icon, danger, children) {
    return {
      key,
      icon,
      children,
      label,
      danger,
    };
  }

const items = [
    getItem('Patient Managment', 'patient_managment', <TeamOutlined />),
    getItem('Doctor Managment', 'doctor_managment', <ForkOutlined />),
    getItem('Bed Managment', 'bed_managment', <BehanceOutlined />),
    getItem('Record Managment', 'record_managment',<FileDoneOutlined /> ),
    getItem('User Managment', 'user_managment', <DeploymentUnitOutlined />),
    getItem('Sign Out', 'sign_out', <FileOutlined />, true),
  ];

  export default items;