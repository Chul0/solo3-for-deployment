import SignupLoginForm from '../components/SignupLoginForm'


const Login = (props) => {
    return(
        <SignupLoginForm 
        buttonText="LOGIN"
        route="/users/login"
        //this route value will be passed to SignupLoginForm
        // it's similar to Template literals`${}` function-wise
        log="Login Successful"
        message="Welcome back!"
        title="LOGIN"
        />
    )
}


export default Login