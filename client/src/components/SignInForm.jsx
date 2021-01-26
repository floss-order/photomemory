import React from 'react'
import { useForm } from 'react-hook-form'
import { sendCredentials } from '../auth'

import './SignInForm.css'
import Card from './Card'
import Label from './Label'
import Input from './Input'
import Link from './Link'
import Button from './Button'
import Error from './Error'

function SignInForm() {
    const {register, handleSubmit, setError, errors} = useForm()

    async function onSubmit(credentials) {

        try {
            const response = await sendCredentials('/auth/sign-in', credentials)
            console.log(response)
        } 
        
        catch (error) {
            setError('email',{
                type: 'manual',
                name: 'email',
                message: error.error.description
            })
        }


    }
    
    return (
        <Card className="card__md">   
            <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <h1 className="sign-in-form__heading">Sign in</h1>

                {errors.email && <Error text={errors.email.message} />}
                {errors.password && <Error text={errors.password.message} />}

                <Label 
                    text="Email" 
                    className="label_form" 
                    htmlFor="email" 
                />
                <Input 
                    className="input_form" 
                    id="email" 
                    type="email" 
                    placeholder="Enter email" 
                    ref={register({ 
                        required: "Email is required",
                        pattern:{
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Enter a valid email"
                        },
                    })}
                />

                <Label 
                    text="Password" 
                    className="label_form label_margin" 
                    htmlFor="password"
                />
                <Input 
                    className="input_form" 
                    id="password" 
                    name="password"
                    type="password" 
                    placeholder="Enter password"
                    ref={register({
                        required: "You must specify a password",
                        minLength: {
                          value: 6,
                          message: "Password must have at least 6 characters"
                        }
                        })}
                />
                
                <Link className="link_black sign-in-form__link">Forgot the password?</Link>
                <Button className="btn-sm btn-violet sign-in-form__button" type="submit">
                    sign in
                </Button>
            </form>
        </Card>
    )
}

export default SignInForm
