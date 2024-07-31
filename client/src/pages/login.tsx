import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Dialog, DialogContent } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { FcGoogle } from "react-icons/fc"; // Google icon
import axios from 'axios';

//@ts-ignore
const Login = ({ isOpen, setOpen }) => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['x-auth-token'] = token;
        }
    }, []);

    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:5001/api/auth/google';
    };

    const handleX = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={isOpen} onOpenChange={() => setOpen(!isOpen)}>
                <button onClick={handleX} style={{ display: 'none' }}>Open Modal</button>
                <DialogContent className="sm:max-w-[400px] rounded-lg shadow-lg">
                    <div className="flex flex-col gap-6 p-8 bg-white rounded-lg">
                        <div className="space-y-2 text-left">
                            <h2 className="text-2xl font-bold text-gray-900">Welcome Back!</h2>
                            <p className="text-gray-600">Sign in to your account to continue.</p>
                        </div>
                        <div className="w-full space-y-4">
                            <Button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-2 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                                <FcGoogle className="text-xl" />
                                Sign In with Google
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Login;
