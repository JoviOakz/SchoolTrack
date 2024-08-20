import { useState } from "react";
import Button from "./Button";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password })
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="w-2/5 h-3/5 flex flex-col justify-center items-center gap-10 border-2 border-slate-600 rounded shadow-md shadow-slate-500">
                <div>
                    <h1 className="font-serif text-5xl">Login</h1>
                </div>

                <div className="flex flex-col w-4/6 gap-6 border-2">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="w-4/6 flex justify-end items-center">
                    <Button>Enter</Button>
                </div>
            </form>
        </>
    )
}

export default LoginForm;