import React from 'react'

import Container from '../components/Container'
import SignInForm from '../components/SignInForm'

function SignIn() {
    return (
        <Container>
            <div className="flex flex_justify-center flex_align-center mt_5">
                <SignInForm />
            </div>
        </Container>
    )
}

export default SignIn
