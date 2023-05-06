import TestA from "../../TestA";
import TestB from "../../TestB";
import {PatientManagment} from '../Pages/PatientManagment';
import { useAuthContext } from "../AuthComp/useAuthContext";
import { useNavigate } from "react-router-dom";

export function BodyContent({ refKey }) {
    const {user, setUser} = useAuthContext();
    const navigate = useNavigate();

    const componentsSwtich = (key) => {
        switch (key) {
            case 'patient_managment':
                return (<PatientManagment />);
            case 'doctor_managment':
                return (<h3>doctor_managment</h3>);
            case 'bed_managment':
                return (<h3>bed_managment</h3>);
            case 'record_managment':
                return (<h3>record_managment</h3>);
            case 'user_managment':
                return (<h3>user_managment</h3>);
            case 'bed_managment':
                return (<h3>bed_managment</h3>);                                                            
            case 'sign_out':
                Logout();                     
        }
    };

    const Logout = ()=>{
        setUser({name:"", role:"", token:""});
        navigate("/",  { state:{error:true, errormsg:"You sign out succefully."}});
    }

    return (
        <>
            {componentsSwtich(refKey)}
        </>
    )
}