import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'


const BrandsList = (props) => {  
    const [allBrands, setAllBrands] = useState([])


    const fetchAllBrands = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/brands`)
        .then((response) => {
            // console.log(response.data.brand);
            setAllBrands(response.data.brand)
        })
    }
    useEffect(fetchAllBrands,[])


    return (
    <>
    <p style={{color:"darkred"}}>HOT TODAY</p>
    <h1 style={{margin:"auto"}}>FALL 2021 MENSWEAR</h1>
      <div className="brandList-container">
        
        {
            allBrands.length ?
            allBrands.map((brand) => {
                return <div key={brand.id}
                            className="allBrands">
                            <Link to={`/brands/${brand.id}`}>
                                <div className="singleBrand-container">
                                    <h3 className="brandName"
                                    >{brand.name}</h3>
                                    <img className="brandImage" src={brand.image} />
                                </div>
                            </Link>
                        </div>
              })
              :
              <p>Loading...</p>
          }
      </div>
    </>
    )
  }
  
  export default BrandsList