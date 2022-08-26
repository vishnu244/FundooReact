import axios from 'axios'

export const signIn = async (signinobj) => {
    let response = await axios.post("http://127.0.0.1:8000/api/login", signinobj)
    return response;

}

export const signUp = async (signupobj) => {
    let response =  await axios.post("http://127.0.0.1:8000/api/registration", signupobj)
    return response;

}