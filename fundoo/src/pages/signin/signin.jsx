import React from 'react'
import google from '../../Assets/google.png'
import './signin.css'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { signIn } from '../../Services/UserService';

import {useNavigate}  from 'react-router-dom'

const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function Signin() {

    const navigate = useNavigate()

    const [signInObj, setSignInObj] = React.useState({ email: "", password: "" });
    const [regexObj, setRegExObj] = React.useState({
        emailBorder: false,
        passwordBorder: false,
        emailHelper: "",
        passwordHelper: "",
    });

    const takeEmail = (event) => {
        setSignInObj((prevState) => ({ ...prevState, email: event.target.value }));
    };
    const takePassword = (event) => {
        setSignInObj((prevState) => ({ ...prevState, password: event.target.value }));
    };

    const submit = async () => {
        const emailTest = emailRegex.test(signInObj.email);
        const passwordTest = passwordRegex.test(signInObj.password);
        console.log(emailTest,passwordTest);

        if (emailTest === false) {
            setRegExObj((prevState) => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "enter correct email",
            }));
        } else if (emailTest === true) {
            setRegExObj((prevState) => ({
                ...prevState,
                emailBorder: false,
                emailHelper: "",
            }));
        }
        if (passwordTest === false) {
            setRegExObj((prevState) => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "enter correct password",
            }));
        } else if (passwordTest === true) {
            setRegExObj((prevState) => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: "",
            }));
        }

        if (emailTest === true && passwordTest === true)
        {
            let response = await signIn(signInObj);
            navigate ('/Dashboard')
            // console.log(response)
            localStorage.setItem( "token",response?.data?.data)
        }
    };



    return (
        <div>
            <div class="signinContainer">
                <div class="Signinbox1">
                    <div class="child1"> <img src={google} style={{ width: "80px", height: "30px", flexDirection: "column" }} /> </div>
                    <div class="child2"> Sign in </div>
                    <div class="child3"> Use your Google Account </div>
                </div>
                <div class="Signinbox2">
                    <div class="child4">
                        <TextField id="outlined-basic"
                            label="Email or phone"
                            variant="outlined"
                            placeholder='Email or Phone'
                            size="small"
                            onChange={takeEmail}
                            error={regexObj.emailBorder}
                            helperText={regexObj.emailHelper}
                            
                        />
                        <a>forgot Email?</a>
                    </div>
                    <div class="child5">
                        <TextField id="outlined-basic"
                            type="password"
                            label="Password"
                            variant="outlined"
                            placeholder='Password'
                            size="small"
                            onChange={takePassword}
                            error={regexObj.passwordBorder}
                            helperText={regexObj.passwordHelper}
                            
                        />
                    </div>
                    <div class="child6">
                        Not your computer? Use Guest mode to sign in privately <br />
                        <a href=" " >Learn More</a>
                    </div>
                    <div class="child7">
                        <div class="Sin"> Create account</div>
                        <Button variant="contained" onClick={submit} >Next</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Signin