import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import api from '../utils/api'

import './Home.css'
import Label from '../components/Label'
import Input from '../components/Input'
import UsernameCard from '../components/UsernameCard'
import Error from '../components/Error'


function Home() {
    const {register, handleSubmit, setError, errors} = useForm()
    const [isSubmit, setIsSubmit] = useState(false)
    const [userInfo, setUserInfo] = useState({
        username: '',
        profile_pic_url: '',
        posts: '',
        followers: '',
        following: ''
    })
    const sectionRef = useRef()
    
    async function onSubmit(data) {
        
        //Destructure the object and assign username propertry to a variable
        const {username} = data 

        try {
            const response = await api.get(`/api/instagram/users/${username}`)
            setUserInfo(response.data)

            //Show the user info section and scroll down to it
            setIsSubmit(true)
            sectionRef.current.scrollIntoView({ behavior: 'smooth' })
        }

        catch(error) {

            if(error.response) {
                setError('username', {
                    name: 'username',
                    type: 'manual',
                    message: error.response.data.error.description
                })
            } 

            else if(error.request) {
                setError('username', {
                    name: 'username',
                    type: 'manual',
                    message: 'Network error. Check your internet connection or try later.'
                })
            }

            else {
                throw error
            }

        } 

    }

    return (
        <>
            <section className="hero flex flex_justify-center flex_align-center">
                <h1 className="section-heading">
                    Turn the brightest moments of your life from the Instagram 
                    into photobook with PhotoMemory!
                </h1>
                <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
                    <Label
                        className="label_search-form" 
                        htmlFor="username" 
                        text="Type the name of an Instagram account" 
                    />

                    {errors.username && <Error text={errors.username.message} />}
                    <Input 
                        id="username" 
                        className="input_search-form" 
                        placeholder="username" 
                        type="text" 
                        ref={register} //добавить обработку ошибок и переписать на react-hook-form
                    />
                    <span className="search-form__input-badge">@</span>
                </form>
            </section>

            {isSubmit &&
                <section className="account flex flex_justify-center flex_align-center" ref={sectionRef}>
                    <h1 className="section-heading">Account has been found!</h1>
                    <UsernameCard 
                        username={userInfo.username} 
                        profile_pic_url={userInfo.profile_pic_url} 
                        posts={userInfo.posts} 
                        followers={userInfo.followers}
                        following={userInfo.following}
                    />
                </section>
            }
        </>
    )
}

export default Home
