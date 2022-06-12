import React from "react";
import FeatherIcon from 'feather-icons-react'
import { kpApi } from "../axios/axios";
import {Link} from 'react-router-dom'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {connect} from 'react-redux'
import { setUserName } from "../localStorage/localStorage";
import logo from '../images/pokemonlogo.webp'

class Login extends React.Component{
    state={
        email:'',
        password:'',
        isPasswordVisible: false,
    }
    render(){
        const onCLickSignIn =(e)=>{
            e.preventDefault()
            const payload = {
                email: this.state.email,
                password: this.state.password,
            }
            kpApi.post('users/login',payload)
                .then(res=>{
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
                    toast.warning(err.response.data.message,{
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 2000
                    })
                })
        } 
        return( <div className="mobile-card" >
                <img src={logo} alt={logo} />
                <div className="mobile-card-heading" >
                    Login
                </div>
                <p>
                    Please sign in to continue
                </p>
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
                <input type={this.state.isPasswordVisible ? "text": "password" }   className="form-input" value={this.state.password} required onChange={(e)=> this.setState({password:e.target.value})} placeholder="password"/>
                <FeatherIcon
                    icon={this.state.isPasswordVisible ? "eye-off":"eye"}
                    className="form-input-eye-icon"
                    onClick ={()=>this.setState({isPasswordVisible:!this.state.isPasswordVisible})}

                />
                </div>
                <div className="w-100 mt-3" >
                <button className="form-button" type="submit" >Login</button>
                </div>
                </form>

                <div className="mobile-card-footer" >
                    Dont't have an account? <span> <Link className="link" to="/signup" >  Sign Up</Link> </span>
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