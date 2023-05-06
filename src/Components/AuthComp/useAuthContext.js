import {AuthContext} from "./AuthContext";
import { useContext } from 'react';

export const useAuthContext = () => {
    const UserContext = useContext(AuthContext);
    if (UserContext.user === undefined) {
        throw new Error("useAuthContext can only be used inside AuthProvider");
    }
    return UserContext;
};
