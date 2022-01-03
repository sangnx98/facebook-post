import Button from "@atlaskit/button";
import React from "react";
import styled from "styled-components";
import SelectClearIcon from '@atlaskit/icon/glyph/select-clear';

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left;

  &:hover {
    .check-icon {
      display: inline-block;
    }
  }

  .check-icon {
    display: none;

    &:hover {
      background-color: #e2e2e2;
      border-radius: 3px;
    }
  }
`;


export default function Comment({index, comment, onDeleteComment }) {
  return (
    <ButtonStyled
      shouldFitContainer
      iconAfter={
          <span className='check-icon' >
            <SelectClearIcon primaryColor='red' onClick={() => onDeleteComment(comment.id)}/>
          </span>
      }
    >
      {comment.name}
      {console.log("id", comment.id)}
    </ButtonStyled>
  );
}
