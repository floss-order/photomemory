import React from 'react'

import './SignUpForm.css'

import Card from './Card'
import Label from './Label'
import Input from './Input'
import Button from './Button'

function SignUpForm() {
    return (
        <Card>
            <form className="sign-up-form">
                <h1 className="sign-up-form__heading">Sign up</h1>
                <div className="sign-up-form-container">

                    <div>
                        <Label 
                            text="Full name" 
                            className="label_form" 
                            htmlFor="name" 
                        />
                        <Input 
                            className="input_form" 
                            id="name" 
                            type="text" 
                            placeholder="Enter Full name" 
                        />
                    </div>

                    <div>
                        <Label 
                            text="Phone number" 
                            className="label_form" 
                            htmlFor="phone" 
                        />
                        <Input 
                            className="input_form" 
                            id="phone" 
                            type="phone" 
                            placeholder="+7 (xxx) xxx-xx-xx" 
                        />
                    </div>

                    <div>
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
                        />
                    </div>

                    <div>
                        <Label 
                            text="Zip code" 
                            className="label_form" 
                            htmlFor="zip" 
                        />
                        <Input 
                            className="input_form" 
                            id="zip" 
                            type="text" 
                            placeholder="Enter zip code" 
                        />
                    </div>

                    <div>
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
                        />
                    </div>
                    
                    <div>
                        <Label 
                            text="Password" 
                            className="label_form" 
                            htmlFor="name_input" 
                        />
                        <Input 
                            className="input_form" 
                            id="name_input" 
                            type="text" 
                            placeholder="Enter password" 
                        />
                    </div>

                    <div>
                        <Label 
                            text="Confirm password" 
                            className="label_form" 
                            htmlFor="name_input" 
                        />
                        <Input  
                            className="input_form" 
                            id="name_input" 
                            type="text" 
                            placeholder="Enter password again" 
                        />
                    </div>

                </div>

                <Button className="btn-sm btn-violet sign-up-form__button">sign up</Button>
            </form>
        </Card>
    )
}

export default SignUpForm
