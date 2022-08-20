import React from 'react'
import google from '../../Assets/google.png'
import './signin.css'

function Signin() {
    return (
        <div>
            <div class="signinContainer">
                <div class="box1">
                    <div class="child1"> <img src={google} style={{ width: "80px", height: "30px", flexDirection: "column" }} /> </div>
                    <div class="child2"> Sign in </div>
                    <div class="child3"> Use your Google Account </div>
                </div>
                <div class="box2">
                    <div class="child4">
                        <input type="email" placeholder=" Email or phone " />
                        <a>forgot Email?</a>
                    </div>
                    <input class="child5" type="password" placeholder=" Password " />
                    <div class="child6">
                        Not your computer? Use Guest mode to sign in privately <br />
                        <a href=" " >Learn More</a>
                    </div>
                    <div class="child7">
                        <div class="Sin"> Create account</div>
                        <button type="submit">Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin