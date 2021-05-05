import SingupLoginForm from '../components/SignupLoginForm'


const Signup = (props) => {
    return(
        <SingupLoginForm 
        showName={true}
        // this true will be passed to props.showName in signuploginForm, and name input will be shown.
        buttonText="SIGN UP"
        route="/users"   
        log="Sign Up Successful"
        message="You are sucessfully signed up!"
        crud="post"
        title="SIGN UP"
        />
    )
}


export default Signup