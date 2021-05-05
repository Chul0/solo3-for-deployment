import axios from 'axios'
import { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useParams } from 'react-router-dom'

const CommentForm= (props) => {
    const { id } = useParams()
    const [user, setUser] =useContext(UserContext)
    const [description, setDescription] =useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/brands/${id}/comments`, {
            description
        }, {
            headers: {
                Authorization: localStorage.getItem('userId')
            }
        })
        .then((response) => {
            setDescription('')
            props.setShouldReload(true)
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-description"></label>
            <input id="comment-input" placeholder="Your comment here" value={description} onChange={(e) => { setDescription(e.target.value)}} ></input>

            <input id="comment-submit" type="submit" value="submit" />
        </form>
    )
}

export default CommentForm