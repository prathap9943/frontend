import React from "react";
import FeatherIcon from 'feather-icons-react'
import { kpApi } from "../axios/axios";
import {Link} from 'react-router-dom'
import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SignUp extends React.Component{
    state ={
        userName:'prathaban',
        email:'prathapsubha1@gmail.com',
        password:'password',
        confirmPassword:'password',
        isPasswordVisible: false,
        isConfirmPasswordVisbile: false,
    }
    
    render(){
        const onClickSignUp = (e)=>{
            e.preventDefault()
            if(this.state.password !== this.state.confirmPassword) {
                toast.warning("Password doesn't matched",{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000
                  })
                  return
            }
            const payload = {
                userName: this.state.userName,
                email: this.state.email,
                password: this.state.password,
            }
            kpApi.post('/users/register',payload)
                .then(res =>{
                    toast.success(res.data.message,{
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 2000
                    })
                })
                .catch(err=>{
                    toast.warning(err.response.data.message,{
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 2000
                    })
                })
        }
        return( <div className="mobile-card" >
                <div className="mobile-card-heading" >
                    Sign Up
                </div>
                <p>
                    Please sign in to continue
                </p>
                <ToastContainer limit={1}/>
                <form className="w-100" onSubmit={onClickSignUp} >
                <div className="position-relative mb-3" >
                <FeatherIcon
                    icon="user"
                    color="black"
                    className="form-input-icon"
                />
                <input type= "text" className="form-input" placeholder="Username" value={this.state.userName} required onChange={(e)=>this.setState({userName:e.target.value})} />
                </div>
                <div className="position-relative mb-3" >
                <FeatherIcon
                    icon="mail"
                    color="black"
                    className="form-input-icon"
                />
                <input type= "email" className="form-input" placeholder="Email address" value={this.state.email} required onChange={(e)=>this.setState({email:e.target.value})}/>
                </div>
                <div className="position-relative mb-3" >
                <FeatherIcon
                    icon="lock"
                    color="black"
                    className="form-input-icon"
                />
                <input  type ={this.state.isPasswordVisible ? "text":"password"} className="form-input" placeholder="Password" value={this.state.password} required onChange={(e)=>this.setState({password:e.target.value})} />
                <FeatherIcon
                    icon={this.state.isPasswordVisible ? "eye-off":"eye"}
                    className="form-input-eye-icon"
                    // onClick ={this.setState({isPasswordVisible:true})}

                />
                </div>
                <div className="position-relative mb-3" >
                <FeatherIcon
                    icon="lock"
                    color="black"
                    className="form-input-icon"
                />
                <input type ={this.state.isConfirmPasswordVisbile ? "text":"password"} className="form-input" placeholder="Confirm password" value={this.state.confirmPassword} required onChange={(e)=>this.setState({confirmPassword:e.target.value})}/>
                <FeatherIcon
                    icon={this.state.isConfirmPasswordVisbile ? "eye-off":"eye"}
                    className="form-input-eye-icon"
                    // onClick ={this.setState({isConfirmPasswordVisbile:!this.state.isConfirmPasswordVisbile})}
                />
                
                </div>
                <div className="w-100 mt-3" >
                <button className="form-button" type="submit" >Sign Up</button>
                </div>
                </form>
                <div className="mobile-card-footer" >
                    Already  an account? <span> <Link to='/login' > Sign In </Link>   </span>
                </div>
        </div>
        )
    }
}

export default SignUp