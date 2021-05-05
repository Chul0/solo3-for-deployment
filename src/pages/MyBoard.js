import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../contexts/UserContext'


const MyBoard = () => {
    const [user, setUser] =useContext(UserContext)
    const [savedImages, setSavedImages] = useState([])

    const fetchSavedImage= async () =>{
        try {
            let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/myboard`,{
                headers:{
                    Authorization: localStorage.getItem('userId')
                }
            })
            // console.log(response);
            setSavedImages(response.data)
        } catch (error) {
            console.log({error});
        }
       
    }

    useEffect(fetchSavedImage,[user])

    const deleteImage = async (imageId) => {
        try {
            let response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/brandcontent/${imageId}`, {
                headers: {
                    Authorization: localStorage.getItem('userId')
                }
            })
            window.location.reload()
        } catch (error) {
            console.log({error});
        }
    }


    return(
        <>
            <h1>MY BOARD</h1>
        
        <div className="myBoard-container">
            {
                savedImages.length ?
                savedImages.map((image)=>{
                    // console.log(image.id);
                    return <div key={image.id}>
                        <div className="singleBoard-container">
                        <img src={image.image} 
                             className="myboardImage"/>
                        <button onClick={()=> deleteImage(image.id)} >delete</button>    
                        </div>
                        </div>
                })
                :
                <p>
                    You haven't added any looks yet!
                </p>
            }
        </div>
        </>
    )
}


export default MyBoard