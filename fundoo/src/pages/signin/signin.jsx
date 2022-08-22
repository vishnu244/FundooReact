import React from 'react'
import google from '../../Assets/google.png'
import './signin.css'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function Signin() {

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

    const submit = () => {
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
                            margin="normal"
                        />
                        <a>forgot Email?</a>
                    </div>
                    <div class="child8">
                        <TextField id="outlined-basic"
                            type="password"
                            label="Password"
                            variant="outlined"
                            placeholder='Password'
                            size="small"
                            margin="normal"
                        />
                    </div>
                    <div class="child6">
                        Not your computer? Use Guest mode to sign in privately  <br />
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