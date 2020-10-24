import React from 'react'

import './Home.css'
import Searchbar from '../components/Searchbar'
import UsernameCard from '../components/UsernameCard'

function Home() {
    return (
        <>
            <section className="hero section section--justify-center section--align-center">
                <h1 className="section_heading">
                    Turn the brightest moments of your life from the Instagram 
                    into photobook with PhotoMemory!
                </h1>
                <Searchbar/>
            </section>

            <section className="account section section--align-center">
                <h1 className="section_heading">Account has been found!</h1>
                <UsernameCard username="someone" posts="100" followers="200k" following="341k"/>
            </section>
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
