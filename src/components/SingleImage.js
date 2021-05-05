import { useState, useEffect, useContext } from 'react'
import {useParams} from 'react-router-dom'
import { Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../contexts/UserContext'


const SingleImage = (props) => {
    const { id } = useParams()
    const [user, setUser] = useContext(UserContext)
    const [singleImage, setSingleImage] = useState({})
    const [imagePopup, setImagePopup] = useState(true)  


    const fetchSingleImage = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/brandContent/${id}`)
        .then((response) => {
            console.log(response.data.brandContent.image);
            setSingleImage(response.data)
            console.log(user);
        })
    }

    useEffect(fetchSingleImage, [id])
    



    const handleShowDialog = () => {   
        setImagePopup(!imagePopup)
        console.log('you clicked an image');
    }
    useEffect(handleShowDialog, [singleImage])

    const saveImages =(e) =>{
         e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/brandcontent/${id}`,
        {},
        //Learned the hard way that even if I haven't set body in my backend, I should add body here, even as an empty body{}, is it because I am not using async?
        {
            headers:{
                Authorization: localStorage.getItem('userId')
            }
        })
        .then((response)=>{
            console.log('you clicked save');
            console.log(response);
        })
    }


    return(
        <div className="dialog-container">
            <>
            {singleImage.brandContent ?
            <>
                {imagePopup && (
                    
                    <dialog
                        className="dialog"
                        open
                        >
                        <img
                            className="smallImage" 
                            src={singleImage.brandContent.image}
                            onClick={handleShowDialog}
                        />
                        <button
                            className="save-to-board-button"
                            onClick={saveImages}
                        >save to my board</button>
                        </dialog>
                )}
                </>
                    
                    
            :
            <p>
                loading..
            </p>

            }
</>




        </div>
    )
}


export default SingleImage