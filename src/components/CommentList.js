import React from 'react'
import Comment from '../components/Comment'

function CommentList({listComment}) {
    return (
        <>
      {listComment.map((comment, index) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
    );
}

export default CommentList