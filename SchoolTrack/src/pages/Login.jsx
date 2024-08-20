import Navbar from "../components/Navbar";
import LoginBox from "../components/LoginForm";

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="w-full h-[92vh] flex flex-col justify-center items-center">
                <LoginBox />
            </div>
        </>
    )
}

export default Login;