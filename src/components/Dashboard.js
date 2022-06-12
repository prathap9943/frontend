import React from "react";

class Dashboard extends React.Component{
    render(){
        return( <div className="mobile-card">
                <div className="mobile-card-heading" >
                    Welcome
                </div>
                <p>You have logged in successfully</p>
                <button className="form-button" >Logout</button>
            </div>

        )
    }
}

export default Dashboard