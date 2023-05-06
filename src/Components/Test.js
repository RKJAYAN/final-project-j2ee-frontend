import useAuthContext from "./AuthComp/useAuthContext";
import {NumericFormat} from "react-number-format";
import { Avatar, Button, Divider, Form, Input, Typography, InputNumber } from 'antd';

export const Test = () => {
    // const { user } = useAuthContext();
    // if (!user) {
    //     return /*<Navigate replace to="/login" />;*/ <><h1>Error</h1></>
    // }
    return (
        <>
            <h1>Profile</h1>

            <NumericFormat
        customInput={Input}
        thousandSeparator=","
        decimalSeparator="."
        decimalScale={2}
      />
        </>
    );
};

//export default Test;