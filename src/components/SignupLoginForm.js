import axios from 'axios'
import { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const SingupLoginForm = (props) => {
    const [name, setName] = useState('')
    //name will be stored only from signup page
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [user, setUser] = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}${props.route}`, {
            name, 
            email, 
            password
        })
        .then((response) => {
            // console.log(response);
            // console.log(`${props.log}`);
            // setUser(response.data.user)
            localStorage.setItem('userId', response.data.userId)
            alert(`Hi, ${response.data.user.name}! ${props.message}`)
            window.location.reload()
        })
    }


    return (
        <div className="SingupLoginForm-container">
        <h1>{props.title}</h1>
        <form onSubmit={handleSubmit}>
            {/* if showName is truthy, show name input otherwise null */}
            {props.showName && 
            <>
            <label htmlFor="new-name"><h2>NAME</h2></label>
            <input value={name} onChange={(e)=> {setName(e.target.value) }} />
            </>
            
            }

            <label htmlFor="new-email"><h2>EMAIL</h2></label>
            <input value={email} onChange={(e)=> {setEmail(e.target.value) }} />

            <label htmlFor="new-password"><h2>PASSWORD</h2></label>
            <input type="password" value={password} onChange={(e)=> {setPassword(e.target.value) }} />
            <input id="submit-button" type="submit" value={props.buttonText} style={{width:"488px"}} />
            
        </form>
        </div>
    )
}


export default SingupLoginForm

