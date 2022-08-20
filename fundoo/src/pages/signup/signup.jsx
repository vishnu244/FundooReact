import React from 'react'
import google from '../../Assets/google.png'
import googleAccount from '../../Assets/googleAccount.png'
import './signup.css'

function Signup() {
    return (
        <div>
            <div class="Header">
                <div class="table1">
                    <div class="box1"> <img src={google} style={{ width: "80px", height: "30px", flexDirection: "flex-start" }} /> </div>
                    <div class="box2">
                        Create your Google Account
                    </div>
                    <div class="box3">
                        <input type="text" class="fname" placeholder="FirstName" />
                        <input type="text" class="lname" placeholder="LastName" />
                    </div>
                    <div class="box4">
                        <input type="text" placeholder="Your email address" />
                        You'll need to confirm that this email belongs to you.
                    </div>
                    <div class="box5">
                        Create a new Gmail address instead
                    </div>
                    <div class="box6">
                        <input type="text" class="pass" placeholder="Password" />
                        <input type="text" class="cpass" placeholder="Confirm" />
                    </div>
                    <div class="box7">
                        <input type="checkbox" />
                        Show password
                    </div>
                    <div class="box8">
                        <div class="Sin">Sign in instead </div>
                        <button type="submit">Next</button>
                    </div>
                </div>
                <div class="table2">
                    <div class="tbox1"><img src={googleAccount} /></div>
                    <div class="tbox2">One account. All of Google working for you.</div>
                </div>
            </div>
        </div>
    )
}

export default Signup