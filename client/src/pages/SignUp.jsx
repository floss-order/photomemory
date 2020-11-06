import React from 'react'

import Container from '../components/Container'
import SignUpForm from '../components/SignUpForm'

function SignUp() {
    return (
        <Container>
            <div className="flex flex_justify-center flex_align-center mt_5">
                <SignUpForm />
            </div>
        </Container>
    )
}

export default SignUp
