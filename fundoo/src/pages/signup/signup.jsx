import React from 'react'
import google from '../../Assets/google.png'
import googleAccount from '../../Assets/googleAccount.png'
import './signup.css'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const confirmPasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function Signup() {

    const [signUpObj, setSignUpObj] = React.useState({ firstName: "", lastName: "", email: "", password: "", confirm: "" });

    const [regexObj, setRegexObj] = React.useState({
        firstNameBorder: false,
        lastNameBorder: false,
        emailBorder: false,
        passwordBorder: false,
        confirmBorder: false,
        firstNameHelper: "",
        lastNameHelper: "",
        emailHelper: "",
        passwordHelper: "",
        confirmHelper: "",
    });


    const takeFirstName = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, firstName: event.target.value }))
    }
    const takeLastName = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, lastName: event.target.value }))
    }
    const takeEmail = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, email: event.target.value }))
    }
    const takePassword = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, password: event.target.value }))
    }
    const takeConfirm = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, confirm: event.target.value }))
    }

    const submit = () => {
        const firstNameTest = firstNameRegex.test(signUpObj.firstName);
        const lastNameTest = firstNameRegex.test(signUpObj.lastName);
        const emailTest = firstNameRegex.test(signUpObj.email);
        const passwordTest = firstNameRegex.test(signUpObj.password);
        const confirmTest = firstNameRegex.test(signUpObj.confirm);
        console.log(firstNameTest, lastNameTest, emailTest, passwordTest, confirmTest);


        if (firstNameTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                firstNameBorder: true,
                firstNameHelper: "Invalid First Name",
            }));
        } else if (firstNameTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                firstNameBorder: false,
                firstNameHelper: "",
            }));
        }
        if (lastNameTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                lastNameBorder: true,
                lastNameHelper: "Invalid Last Name",
            }));
        } else if (lastNameTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                firstNameBorder: false,
                firstNameHelper: "",
            }));
        }
        if (emailTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "Invalid Email",
            }));
        } else if (emailTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                emailBorder: false,
                emailHelper: "",
            }));
        }
        if (passwordTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "Password must have 8characters",
            }));
        } else if (passwordTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: "",
            }));
        }
        if (confirmTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                confirmTest: true,
                confirmHelper: "Password and ConfirmPassword must be same",
            }));
        } else if (confirmTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                confirmTest: false,
                confirmHelper: "",
            }));
        }
    };




    return (
        <div>
            <div class="Header">
                <div class="table1">
                    <div class="box1"> <img src={google} alt="Google" style={{ width: "80px", height: "30px", flexDirection: "flex-start" }} /> </div>
                    <div class="box2">
                        Create your Google Account
                    </div>
                    <div class="box3">
                        <TextField id="outlined-basic"
                            label="FirstName"
                            variant="outlined"
                            placeholder='FirstName'
                            size="small"
                            margin="normal"
                            onChange={takeFirstName}

                        />
                        <TextField id="outlined-basic"
                            label="LastName"
                            variant="outlined"
                            placeholder='LastName'
                            size="small"
                            margin="normal"
                            onChange={takeLastName}
                        />
                    </div>
                    <div class="box4">
                        <TextField id="outlined-basic"
                            label="UserName"
                            variant="outlined"
                            placeholder='Email or UserName'
                            size="small"
                            margin="normal"
                            onChange={takeEmail}
                        />
                        You'll need to confirm that this email belongs to you.
                    </div>
                    <div class="box5">
                        Create a new Gmail address instead
                    </div>
                    <div class="box6">
                        <TextField id="outlined-basic"
                            type="password"
                            label="Password"
                            variant="outlined"
                            placeholder='Password'
                            size="small"
                            margin="normal"
                            onChange={takePassword}
                        />
                        <TextField id="outlined-basic"
                            type="password"
                            label="Confirm"
                            variant="outlined"
                            placeholder='ConfirmPassword'
                            size="small"
                            margin="normal"
                            onChange={takeConfirm}
                        />

                    </div>
                    <div class="box7">
                        <input type="checkbox" />
                        Show password
                    </div>
                    <div class="box8">
                        <div class="Sin">Sign in instead </div>
                        <Button variant="contained" onClick={submit} >Next</Button>
                    </div>
                </div>
                <div class="table2">
                    <div class="tbox1"><img src={googleAccount} alt="GoogleAccount" /></div>
                    <div class="tbox2">One account. All of Google working for you.</div>
                </div>
            </div>
        </div>
    );
}

export default Signup