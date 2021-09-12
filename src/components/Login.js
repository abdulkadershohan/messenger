import React, {Component} from 'react';
import {GoogleOutlined,FacebookOutlined} from "@ant-design/icons";
import 'firebase/app'
import {auth} from "./Firebase";
import firebase from "firebase";

const Login=()=>{
    return(
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Chat App!</h2>
                <div className="login-button google"
                onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined/> Sign In With Google
                </div>
                <br/> <br/>
                <div className="login-button facebook"
                     onClick={()=>auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
                    <FacebookOutlined/> Sign In With facebook
                </div>

            </div>

        </div>

    );

}

export default Login;