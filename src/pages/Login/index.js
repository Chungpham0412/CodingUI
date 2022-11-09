import './Login.scss';
import React, { useEffect, useState } from 'react';
import Input from '@components/Input';
import Label from '@components/Label';
import Button from '@components/Button';
import { toast } from 'react-toastify';
import * as UserService from 'src/services/UserService';
import { useAuth } from 'src/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { userInfo } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (userInfo?.email) {
            console.log(userInfo);
            return navigate('/manage/cards');
        }
    }, [userInfo]);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error('Please fill in all fields');
            return;
        }
        const fetchLogin = async () => {
            let datas = { email: email, password: password };
            const result = await UserService.login(datas);
            if (result.status === false) {
                toast.error(result.message);
                return;
            }
            localStorage.setItem('token', result.token);
        };
        fetchLogin();
    };
    return (
        <div className="form-login">
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Enter the password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="d-grid">
                    <Button className="btn btn-effect bg-gradient-primary" type="submit">
                        Login
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
