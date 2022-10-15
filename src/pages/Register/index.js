import './Register.scss';
import React from 'react';
import Button from '@components/Button';
import Input from '@components/Input';
import Label from '@components/Label';

function Register() {
    return (
        <div className="form-register">
            <form>
                <div className="form-group">
                    <Label htmlFor="name">Your name</Label>
                    <Input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="form-control"
                        required
                    />
                </div>
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
                        Sign Up
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Register;
