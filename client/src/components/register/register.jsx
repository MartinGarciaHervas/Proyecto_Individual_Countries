import { useState } from 'react'

import LoginValid from '../../helpers/loginValidator'
import { registerUser } from '../../Redux/Actions/actions';

export default function Register (){

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    function changeHandler(event){
        setUser({
            ...user,
            [event.target.name]:event.target.value
        });
        setErrors(LoginValid({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    function submitHandler(){
        dispatch(registerUser(user))
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <input onChange={changeHandler} name="email" value={user.email} placeholder="Email"></input>
                <span>{errors.email}</span>
                <input onChange={changeHandler} name="password" value={user.password} placeholder="password"></input>
                <span>{errors.password}</span>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}