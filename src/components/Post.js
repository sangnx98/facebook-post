import React, { memo } from 'react'
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useCallback, useState } from "react";
import {v4} from 'uuid';

import CommentList from '../components/CommentList'


const Post = memo(props => {
    const [listComment, setListComment] = useState([]);
    const [cmtInput, setCmtInput] = useState('');
    const {
        post,
        getEditPost,
        todoEditingId,
        editPost,
        index,
        removePost,
    } = props
    const isEditing = todoEditingId === post.id
    const [text, setText] = useState(post.text)
    const onEditPost = (e) => {
        editPost({
            ...post,
            text
        }, index)
        getEditPost('')
    }
    
    const onCmtInputChange = useCallback((e) =>{
        setCmtInput(e.target.value)
    }, []);

    const onAddCmtClick = useCallback((e) =>{
            setListComment([{id:v4(), name: cmtInput},
            ...listComment,
            ]);
        setCmtInput("")
        },
        [cmtInput, listComment]
    );
    
    const onDeleteComment = (id) => {
        setListComment (listComment.filter(listComment => listComment.id !== id))
    };
    
    return (
        <>
        <li className={`${isEditing ? 'editing' : ''}`}>
            {
                !isEditing ?
                    <div className="view">
                        <label onDoubleClick={() => getEditPost(post.id)}>{post.text}</label>
                        <button className="destroy" onClick={() => removePost(post.id)} />
                    </div> :
                    <input
                        className="edit"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onBlur={onEditPost}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter' && text) {
                                onEditPost()
                            }
                        }}
                        
                    />
            }
        </li>
        <Textfield
            name='add-todo'
            placeholder='Viết bình luận...'
            elemAfterInput={
            <Button
                isDisabled={!cmtInput}
                appearance='primary'
                onClick={onAddCmtClick}
            >
                Bình luận
            </Button>
            }
            css={{ padding: "2px 4px 2px" }}
            value={cmtInput}
            onChange={onCmtInputChange}
        ></Textfield>
        <CommentList 
        listComment = {listComment} 
        onDeleteComment={onDeleteComment}
        />
        </>
    )
})

export default Post