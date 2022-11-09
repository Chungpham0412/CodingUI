import { createContext, useContext, useEffect, useState } from 'react';
import * as UserService from 'src/services/UserService';
const AuthContext = createContext();
const token = localStorage.getItem('token');
function AuthProvider(props) {
    const [userInfo, setUserInfo] = useState({});
    const value = { userInfo, setUserInfo };
    useEffect(() => {
        if (token) {
            const fetchData = async () => {
                const result = await UserService.getUser();
                setUserInfo(result);
            };
            return () => {
                fetchData();
            };
        } else {
            setUserInfo({});
        }
    }, []);

    return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}
function useAuth() {
    const context = useContext(AuthContext);
    if (typeof context === 'undefined') throw new Error('useAuth must be used within AuthProvider');
    return context;
}
export { AuthProvider, useAuth };
