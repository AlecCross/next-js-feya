import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode"

export default function SignIn() {
    const [user, setUser] = useState({})

    function handleCallbackResponce(response) {
        const userObj = jwt_decode(response.credential)
        setUser(userObj)
        document.getElementById("signInDiv").hidden = true
    }

    function handleSignOut(e) {
        setUser({})
        document.getElementById("signInDiv").hidden = false
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "700251402104-pbfe79l9gq6lkg3i68hsm3ffi9b32bvp.apps.googleusercontent.com",
            callback: handleCallbackResponce
        })

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "filled_black", size: "large", text: "signin", shape: "circle" }
        )
        google.accounts.id.prompt()
    }, [])

    return <div style={{display: "flex",
    justifyContent: "center",}}>
        <div id="signInDiv"></div>
        {
            user &&
            <div>
                <img>{user.image}</img>
                <h3>{user.name}</h3>
            </div>
        }
        <button style={{borderRadius: "15%", height: 30, backgroundColor: "white"}} onClick={(e) => handleSignOut(e)}>Sign Out</button>
    </div>
}
