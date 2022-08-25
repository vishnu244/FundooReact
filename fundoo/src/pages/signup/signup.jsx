import React from 'react'
import google from '../../Assets/google.png'
import googleAccount from '../../Assets/googleAccount.png'
import './signup.css'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { signUp } from '../../Services/UserService';

const nameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const confirmPasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function Signup() {

    const [signUpObj, setSignUpObj] = React.useState({ name: "", email: "", password: "" });

    const [regexObj, setRegexObj] = React.useState({
        nameBorder: false,
        lastNameBorder: false,
        emailBorder: false,
        passwordBorder: false,
        confirmBorder: false,
        nameHelper: "",
        lastNameHelper: "",
        emailHelper: "",
        passwordHelper: "",
        confirmHelper: "",
    });


    const takename = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, name: event.target.value }))
    }
    // const takeLastName = (event) => {
    //     setSignUpObj((prevState) => ({ ...prevState, lastName: event.target.value }))
    // }
    const takeEmail = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, email: event.target.value }))
    }
    const takePassword = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, password: event.target.value }))
    }
    // const takeConfirm = (event) => {
    //     setSignUpObj((prevState) => ({ ...prevState, confirm: event.target.value }))
    // }

    const submit = async () => {
        const nameTest = nameRegex.test(signUpObj.name);
        const lastNameTest = lastNameRegex.test(signUpObj.lastName);
        const emailTest = emailRegex.test(signUpObj.email);
        const passwordTest = passwordRegex.test(signUpObj.password);
        const confirmTest = confirmPasswordRegex.test(signUpObj.confirm);
        console.log(nameTest, emailTest, passwordTest);


        if (nameTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                nameBorder: true,
                nameHelper: "Invalid First Name",
            }));
        } else if (nameTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                nameBorder: false,
                nameHelper: "",
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
                nameBorder: false,
                nameHelper: "",
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

        if (nameTest === true && emailTest === true && passwordTest === true )
        {
            let response = await signUp(signUpObj);
            console.log(response);
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
                            label="name"
                            variant="outlined"
                            placeholder='name'
                            size="small"
                            onChange={takename}
                            error={regexObj.nameBorder}
                            helperText={regexObj.nameHelper}

                        />
                        <TextField id="outlined-basic"
                            label="LastName"
                            variant="outlined"
                            placeholder='LastName'
                            size="small"
                            // onChange={takeLastName}
                            // error={regexObj.lastNameBorder}
                            // helperText={regexObj.lastNameHelper}
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
                            error={regexObj.emailBorder}
                            helperText={regexObj.emailHelper}
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
                            error={regexObj.passwordBorder}
                            helperText={regexObj.passwordHelper}
                        />
                        <TextField id="outlined-basic"
                            type="password"
                            label="Confirm"
                            variant="outlined"
                            placeholder='ConfirmPassword'
                            size="small"
                            margin="normal"
                            // onChange={takeConfirm}
                            error={regexObj.confirmBorder}
                            helperText={regexObj.confirmHelper}
                        />

                    </div>
                    <div class="box7">
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Show password" />
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