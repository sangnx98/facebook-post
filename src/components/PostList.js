import React, { memo } from 'react'
import Post from './Post'

const PostList = memo(props => {
    const { listPosts} = props
    return (
        <section className="main">
            <ul className="post-list">
                {
                    listPosts.map((post, index) => <Post index={index} key={post.id} post={post} {...props} />)
                }
            </ul>

        </section>
    )
})

export default PostList