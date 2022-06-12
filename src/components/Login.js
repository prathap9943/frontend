import React from "react";
import FeatherIcon from 'feather-icons-react'
import { kpApi } from "../axios/axios";
import {Link} from 'react-router-dom'
import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {connect} from 'react-redux'
import { setUserName } from "../localStorage/localStorage";

class Login extends React.Component{
    state={
        email:'prathapsubha1@gmail.com',
        password:'password',
        isPasswordVisible: false,
    }
    render(){
        console.log(this.props)
        const onCLickSignIn =(e)=>{
            e.preventDefault()
            const payload = {
                email: this.state.email,
                password: this.state.password,
            }
            kpApi.post('users/login',this.state)
                .then(res=>{
                    console.log(res)
                    toast.success(res.data.message,{
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 2000
                    })
                    const action ={
                        type: 'userName',
                        data: {
                            userName: res.data.data.userName
                        }
                    }
                    setUserName(res.data.data.userName)
                    this.props.setName(action)
                })
                .catch(err =>{
                    console.log(err)
                    toast.warning(err.response.data.message,{
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 2000
                    })
                })
        } 
        return( <div className="mobile-card" >
                <div className="mobile-card-heading" >
                    Login
                </div>
                <p>
                    Please sign in to continue
                </p>
                <ToastContainer/>
                <form className="w-100" onSubmit={onCLickSignIn} >
                <div className="position-relative mb-3">
                <FeatherIcon
                    icon="mail"
                    color="black"
                    className="form-input-icon"
                />
                <input type= "email" className="form-input" value={this.state.email} required onChange={(e)=> this.setState({email:e.target.value})} placeholder="email address"/>
                </div>
                <div className="position-relative mb-3">
                <FeatherIcon
                    icon="lock"
                    color="black"
                    className="form-input-icon"
                />
                <input type= "password" className="form-input" value={this.state.password} required onChange={(e)=> this.setState({password:e.target.value})} placeholder="password"/>
                <FeatherIcon
                    icon={this.state.isPasswordVisible ? "eye-off":"eye"}
                    className="form-input-eye-icon"
                    // onClick ={this.setState({isPasswordVisible:true})}

                />
                </div>
                <div className="w-100 mt-3" >
                <button className="form-button" type="submit" >Login</button>
                </div>
                </form>

                <div className="mobile-card-footer" >
                    Dont't have an account? <span> <Link to="/signup" >  Sign Up</Link> </span>
                </div>
        </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return{
        user: state
    };
}
const dispatchStateToProps = (dispatch  ) =>{
    return {
    setName : (action) => dispatch(action)
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(Login)