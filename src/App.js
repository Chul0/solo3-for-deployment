import './App.css';


import { Route, Redirect } from 'react-router-dom'
import { useState, useContext } from 'react'
import { UserContext } from './contexts/UserContext'


import NavBar from './components/NavBar'
import Home from './pages/Home'
import SingleBrand from './pages/SingleBrand'
import Brands from './pages/Brands'
import Login from './pages/Login'
import MyBoard from './pages/MyBoard'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import SingleImage from './components/SingleImage'


function App(props) {
  const [user, setUser] = useContext(UserContext)
  // console.log(process.env.REACT_APP_BACKEND_URL); server testing

  return (
    <div className="App">
      <div className="NavBar-container">
        <NavBar />
      </div>

      <Route 
       path="/"
       exact
       render={()=>{
         return <Home />
       }}
      />

      <Route 
       path="/signup"
       render={()=>{
        if(user.id){
          return <Redirect to ="/brands" />
        } else {
         return <Signup />
        }
       }}
      />

      <Route 
       path="/login"
       render={()=>{
         if(user.id){
          return <Redirect to ="/brands" />
         } else{
          return <Login />
         }
       }}
      />

      <Route 
       path="/brands"
       exact
       render={()=>{
         return <Brands />
       }}
      />

      <Route 
       path="/myboard"
       render={()=>{
         return <MyBoard />
       }}
      />

      <Route 
       path="/profile"
       render={()=>{
         return <Profile />
       }}
      />

      <Route 
        path="/brands/:id"
        render={()=>{
          // console.log('hello form single brand');
          return <SingleBrand />
        }}
      />

      <Route 
        path="/brands/:id/content/:id"
        render={()=>{
          return <SingleImage />
        }} 
      />



    </div>
  );
}

export default App;
