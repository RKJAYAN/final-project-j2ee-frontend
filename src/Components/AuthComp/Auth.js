import React, { useState } from "react";
import useAuthContext from "./useAuthContext";

function Auth() {
    const [userName, setUserName] = useState(null);

    
    if (!user) {
        return (/*<Navigate replace to="/login" />;*/ <><h1>Error</h1></>)
    }
    return (
        <>
            <h1>Profile{user}</h1>
        </>
    );

    //return (/*<Navigate replace to="/login" />;*/ <><h1>Error</h1></>);
};

export default Auth