import React, { useState, useRef } from 'react'

import './Home.css'
import Input from '../components/Input'
import UsernameCard from '../components/UsernameCard'

async function getAccountInfo(account) {
    let info = await fetch(`http://localhost:5000/${account}`)
    info = await info.json()
    return info
}

function Home() {
    const handleSubmit = async e => {
        e.preventDefault()

        const info = await getAccountInfo(value)
        setAccount(info)

        setIsSubmit(true)
        sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    
    const [value, setValue] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)
    const [account, setAccount] = useState({
        username: '',
        profile_pic_url: '',
        posts: '',
        followers: '',
        following: ''
    })
    const sectionRef = useRef()
    

    return (
        <>
            <section className="hero section section--justify-center section--align-center">
                <h1 className="section_heading">
                    Turn the brightest moments of your life from the Instagram 
                    into photobook with PhotoMemory!
                </h1>
                <form onSubmit={handleSubmit}>
                    <Input type="text" value={value} onChange={e => {setValue(e.target.value)} } />
                </form>
            </section>

            {isSubmit &&
                <section className="account section section--align-center" ref={sectionRef}>
                    <h1 className="section_heading">Account has been found!</h1>
                    <UsernameCard 
                        username={account.username} 
                        profile_pic_url={account.profile_pic_url} 
                        posts={account.posts} 
                        followers={account.followers}
                        following={account.following}
                    />
                </section>
            }
        </>
    /*
        Todo:
        1. Получить из поисковой строки учётную запись
        2. Передать в карточку в виде пропса
        3. Валидировать пропс
    */
    )
}

export default Home
