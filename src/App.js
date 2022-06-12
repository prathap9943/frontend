import logo from './logo.svg';
import { useEffect } from 'react'
import './App.css';
import { kpApi } from './axios/axios';
import axios from 'axios';
import Login from './components/Login';
import SignUp from './components/Signup';
import { Navigate, Route,Routes } from 'react-router'
import Dashboard from './components/Dashboard';
import { getUserName } from './localStorage/localStorage';
import {connect} from 'react-redux'


function App(props) {
  useEffect( ()=>{
    const userName = getUserName()
    if(userName){
      const action ={
        type: 'userName',
        data: {
            userName: userName
        }
    }
     props.setName.bind(action)
    }
  })
  return (
    <div className="App">
      <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      {/* {props.user.isLoggedIn ? <Navigate to='/dashboard' ></Navigate>: <Navigate to='/login' />} */}
      {/* <Login/> */}
      {/* <SignUp/> */}
    </div>
  );
}

const mapStateToProps =(state) =>{
  console.log(state)
  return{
      user: state
  };
}
const dispatchStateToProps = (dispatch  ) =>{
  return {
  setName : (action) => dispatch(action)
  }
}

export default connect(mapStateToProps, dispatchStateToProps)(App)