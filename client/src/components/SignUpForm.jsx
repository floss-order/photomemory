import React from 'react'
import { useForm } from 'react-hook-form'
import api from '../utils/api'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import './SignUpForm.css'

import Card from './Card'
import Label from './Label'
import Input from './Input'
import Button from './Button'
import Error from './Error'

const phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup.object().shape({
    fullName: yup.string().required('Full Name is required'),
    phone: yup.string()
              .matches(phoneRegEx, {message: 'Enter a valid phone number' })
              .required('Phone number is required'),
    address: yup.string().required('Address is required'),
    zip: yup.string().required('Zip is required'),
    email: yup.string()
              .email('Enter a valid email')
              .required('Email is required'),
    password: yup.string()
                 .required('Password is required')
                 .min(6, ({ min }) => `Password should be at least ${min} characters`)
                 .max(50, ({ max }) => `Password should not be longer than ${max} characters`),
    password2: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
})

function SignUpForm() {
    const {register, handleSubmit, setError, errors, watch} = useForm({
        resolver: yupResolver(schema)
    })

    async function onSubmit(data) {
        
        try {
            const response = await api.post('/auth/sign-up', data)

            //Get the created user back and redirect
        }

        catch(error) {

            if(error.response) {
                setError('email', {
                    name: 'email',
                    type: 'manual',
                    message: error.response.data.errors.email.message
                })
            } 

            // else if(error.request) {
            //     setError('username', {
            //         name: 'username',
            //         type: 'manual',
            //         message: 'Network error. Check your internet connection or try later.'
            //     })
            // }

            // else {
            //     throw error
            // }

        } 

    }

    return (
        <Card>
            <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="sign-up-form__heading">Sign up</h1>
                <div className="sign-up-form-container">

                    <div>
                        <Error text={errors.fullName?.message} />

                        <Label 
                            text="Full name" 
                            className="label_form" 
                            htmlFor="fullName" 
                        />
                        <Input 
                            className="input_form" 
                            id="fullName" 
                            type="text" 
                            placeholder="Enter Full name"
                            ref={register}
                        />
                    </div>

                    <div>
                        <Error text={errors.phone?.message} />

                        <Label 
                            text="Phone number" 
                            className="label_form" 
                            htmlFor="phone" 
                        />
                        <Input 
                            className="input_form" 
                            id="phone" 
                            type="tel" 
                            placeholder="+7 (xxx) xxx-xx-xx"
                            ref={register} 
                        />
                    </div>

                    <div>
                        <Error text={errors.address?.message} />

                        <Label 
                            text="Address" 
                            className="label_form" 
                            htmlFor="address" 
                        />
                        <Input 
                            className="input_form" 
                            id="address" 
                            type="text" 
                            placeholder="Enter address" 
                            ref={register}
                        />
                    </div>

                    <div>
                        <Error text={errors.zip?.message} />

                        <Label 
                            text="Zip code" 
                            className="label_form" 
                            htmlFor="zip" 
                        />
                        <Input 
                            className="input_form" 
                            id="zip" 
                            type="number" 
                            placeholder="Enter zip code" 
                            ref={register}
                        />
                    </div>

                    <div>
                        <Error text={errors.email?.message} />

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
                            ref={register}
                        />
                    </div>
                    
                    <div>
                        <Error text={errors.password?.message} />

                        <Label 
                            text="Password" 
                            className="label_form" 
                            htmlFor="password" 
                        />
                        <Input 
                            className="input_form" 
                            id="password" 
                            type="password" 
                            placeholder="Enter password" 
                            ref={register}
                        />
                    </div> 

                    <div>
                        <Error text={errors.password2?.message} />

                        <Label 
                            text="Confirm password" 
                            className="label_form" 
                            htmlFor="password2" 
                        />
                        <Input  
                            className="input_form" 
                            id="password2" 
                            type="password" 
                            placeholder="Enter password again"
                            ref={register} 
                        />
                    </div>

                </div>

                <Button className="btn-sm btn-violet sign-up-form__button" type="submit">
                    sign up
                </Button>
            </form>
        </Card>
    )
}

export default SignUpForm
