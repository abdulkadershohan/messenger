import React from 'react';
import {useHistory} from "react-router-dom";
import {ChatEngine} from "react-chat-engine";
import {auth} from "./Firebase";
const Chats =()=>{
    const history=useHistory();
    const handleLogout=async ()=>{
        await auth.signOut()

        history.push('/')
    }
    return(
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Messenger
                </div>
                <div className="logout-tab" onClick={handleLogout}>
                    Logout
                </div>
            </div>
            <ChatEngine
                height="calc(100vh-66px)"
                projectId="474378ad-800d-4195-a880-1d58ded3fc72"
                userName={"."}
                userSecret={"."}

            />
        </div>
    )
}

export default Chats;