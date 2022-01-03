import React from 'react'
import Comment from '../components/Comment'

function CommentList({listComment, onDeleteComment}) {
    return (
        <>
      {listComment.map((comment, index) => (
        <Comment key={index} comment={comment} onDeleteComment={onDeleteComment}/>
      ))}
    </>
    );
}

export default CommentList