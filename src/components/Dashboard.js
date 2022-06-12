import React from "react";
import { clearUserName } from "../localStorage/localStorage";
import {connect} from 'react-redux'
import logo from '../images/pokemonlogo.webp'
import {toast} from 'react-toastify'
class Dashboard extends React.Component{
    render(){
        const onClickLogout =() =>{
            clearUserName()
            const action = {
                type: 'deleteUser',
                user: {
                    userName: null,
                }
            }
            this.props.clearName(action)
            toast.success('Logged Out Successfully',{
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
            })

        }
        return( <div className="mobile-card">
                <img src={logo} alt={logo} />
                <div className="mobile-card-heading" >
                    Welcome {this.props.user.userName}
                </div> 
                <p>You have logged in successfully</p>
                <button className="form-button" onClick={onClickLogout} >Logout</button>
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
    clearName : (action) => dispatch(action)
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(Dashboard)