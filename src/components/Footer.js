import React, { memo } from 'react'

const Footer = memo((props) => {
    const { setStatusFilter, activeButton, clearCompleted, numOfPostsLeft, numOfPosts } = props
    return (
        <footer className="footer">
            <span className="post-count">
                <strong>{numOfPostsLeft}</strong>
                <span> </span>
                <span>{numOfPostsLeft > 1 ? 'posts' : 'post'}</span>
            </span>
        </footer>
    )
})

export default Footer