import Button from "@atlaskit/button";
import React from "react";
import styled, { css } from "styled-components";

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left;
`;


export default function Comment({ comment }) {
    console.log('comment', comment)
    console.log("comment", comment.name)
  return (
    <ButtonStyled
      shouldFitContainer
    >
      {comment.name}
    </ButtonStyled>
  );
}
