import React, { useEffect } from 'react'
import './App.css';
import Login from './components/Login';
import SignUp from './components/Signup';
import { Navigate, Route,Routes } from 'react-router'
// import {Navigate} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Dashboard from './components/Dashboard';
import {connect} from 'react-redux'


function App(props) {
  useEffect(()=>{
     props.setName()
  },[])
  return (
    <div className="App">
      <ToastContainer limit={1} />
      <Routes>
        {
          !props.user.isLoggedIn ?  <React.Fragment>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path='*' element={<Navigate to="/login" />}/>
          </React.Fragment> :
          <React.Fragment>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path='*' element={<Navigate to="/dashboard" />}/>
          </React.Fragment>

        }
      </Routes>
    </div>
  );
}

const mapStateToProps =(state) =>{
  return{
      user: state
  };
}
const dispatchStateToProps = (dispatch ) =>{
  return {
  setName : () => dispatch({type:'getLoggedInUser'})
  }
}

export default connect(mapStateToProps, dispatchStateToProps)(App)