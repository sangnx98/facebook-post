import React, { memo, useState } from 'react'

const Header = memo((props) => {
    const [text, setText] = useState('')
    const { addPost } = props

    const onAddPost = (event) => {
        if (event.key === 'Enter' && text) {
            addPost({
                id: new Date().valueOf(),
                text,
                isCompleted: false
            })
            setText('')
        }
    }

    return (
        <header className="header">
            <h1>Facebook</h1>
            <input
                className="new-post"
                placeholder="Hello Sang, bạn đang nghĩ gì?"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={onAddPost}
            />
        </header>
    )
})

export default Header