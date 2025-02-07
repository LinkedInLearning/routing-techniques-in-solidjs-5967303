import {useNavigate} from "@solidjs/router"

const Login = () => {

    const navigate = useNavigate()

    const handleLogin = () => {
        //Run auth logic

        navigate("/products")
    }

    return <>
       <h1> Login Page </h1>
 
       <p>Login to access the application</p>

       <p>
            <button type="button" onClick={handleLogin}>Log In</button>
       </p>
    </>
   
 }
 
 export default Login;
 