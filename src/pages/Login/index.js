import './Login.scss';
import React from 'react';
import Input from '@components/Input';
import Label from '@components/Label';
import Button from '@components/Button';
function Login() {
    return (
        <div className="form-login">
            <form>
                <div className="form-group">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        className="form-control"
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

export default Login;
