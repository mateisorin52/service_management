import React, { useState } from 'react'
import Main from './Main'
import { requests } from '../apiCalls/api'
import './componentsStyle/Login.css'
const Login = ({setToken}) => {
    const [tokenState,setTokenState] = useState(false)
    const [email,setEmail] = useState()
    const [password,setPasssword] = useState()
    const [isLoading,setIsLoading] = useState()

const handlePassword = (e) =>{
    setPasssword(e.target.value)
}
const handleEmail = (e)=>{
    setEmail(e.target.value)
}

const loginUser = async(credentials)=>{
    setIsLoading(true)
    return requests.post("/users/authenticate", credentials)
    .then(res => res.data.token)
    .catch(res=>{alert("Password or Username wrong!");setIsLoading(false)})
    
}
const handleSubmit = async (e) =>{
    e.preventDefault()
    const token = await loginUser(
        {
            username: email,
            password: password
        })
    if(token) setToken(token)
    if(token) setTokenState(true)
}

if(tokenState) return(<Main/>)
  return (
    <div className='w-100 mt-5 d-flex flex-row justify-content-center align-items-center'>
        <form className='d-flex flex-column align-items-center bg-form p-4 rounded-3'>
            <label className='text-black fs-2'>Login</label>
            <input className='form-control m-3'style={{width:"280px"}}placeholder="E-mail" onChange={handleEmail}></input>
            <input className='form-control'style={{width:"280px"}}placeholder="Password" onChange={(handlePassword)}></input>
            <div className='d-flex flex-row justify-content-between align-items-center mt-2 mb-2 remember' style={{width:"280px"}}>
                <div className='d-flex flex-row justify-content-center align-items-center'>
                    <input id='remember' type="checkbox"/>
                    <label htmlFor='remember'>Remember me</label>
                </div>
                <a href='#'>Forgot Password?</a>
            </div>
            <button className='btn bg-primary text-white fs-5 mt-2' style={{width:"280px"}} onClick={handleSubmit}>Log In</button>
        </form>
    </div>
  )
}

export default Login