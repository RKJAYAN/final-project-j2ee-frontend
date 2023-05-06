import { useState, useEffect } from 'react';
import {AuthContext} from './AuthContext'

export const AuthProvider = ({ children }) => {

    // const [user, setUser] = useState(null);
    // const [role, setRole] = useState(null);
    // const [token, setToken] = useState(null);

    const [user, setUser] = useState({name:"", role:"", token:""});

    return (
        <AuthContext.Provider value={{ user, setUser } }>{ children }</AuthContext.Provider>
    );
};

