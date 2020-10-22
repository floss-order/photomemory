import React from 'react'
import propTypes from 'prop-types'

import './UsernameCard.css'
import Card from './Card'
import Button from './Button'

function UsernameCard({ username, profile_pic_url, posts, followers, following }) {
    return (
        <Card className="card__md">
            <div className="card-container">
                <figure className="card-avatar">
                    <img src={profile_pic_url} alt="Profile picture" className="card-avatar_image"/>
                    <figcaption className="card-avatar_caption">@{username}</figcaption>
                </figure>
                <div className="card-info">
                    <div>
                        <p className="card-info_heading">{posts}</p>
                        <p className="card-info_caption">posts</p>
                    </div>
                    <div>
                        <p className="card-info_heading">{followers}</p>
                        <p className="card-info_caption">followers</p>
                    </div>
                    <div>
                        <p className="card-info_heading">{following}</p>
                        <p className="card-info_caption">following</p>
                    </div>
                </div>
                <Button className="btn-lg btn-violet">Create a photobook</Button>
                <a href="#header" className="card_link">Not @{username}?</a>
            </div>
        </Card>
    )
}

UsernameCard.propTypes = {
    username: propTypes.string,
    profile_pic_url: propTypes.string,
    posts: propTypes.number,
    followers: propTypes.number,
    following: propTypes.number
}

UsernameCard.defaultProps = {
    username: 'user',
    profile_pic_url: 'https://via.placeholder.com/250/788BFF/FFFFFF/',
    posts: 0,
    followers: 0,
    following: 0
}

export default UsernameCard
