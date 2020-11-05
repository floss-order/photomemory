import React, { useState } from 'react'

import './SignInForm.css'
import Card from './Card'
import Label from './Label'
import Input from './Input'
import Link from './Link'
import Button from './Button'

function SignInForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Card className="card__md">   
            <form className="form">
                <h1 className="form__heading">Sign in</h1>
                <Label 
                    text="Email" 
                    className="label_form" 
                    htmlFor="email_input" 
                />
                <Input 
                    className="input_form" 
                    id="email_input" 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Label 
                    text="Password" 
                    className="label_form label_margin" 
                    htmlFor="password_input"
                />
                <Input 
                    className="input_form" 
                    id="password_input" 
                    type="password" 
                    placeholder="Enter password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                />
                
                <Link className="link_black form__link">Forgot the password?</Link>
                <Button className="btn-sm btn-violet form__button">sign in</Button>
            </form>
        </Card>
    )
}

export default SignInForm
