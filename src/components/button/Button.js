import React from "react";
import styled from "styled-components";
const ButtonStyles = styled.button`
  position: absolute;
  border-radius: 50px;
  padding: 5px 24px;
  top: 50%;
  left: 33%;
  margin-top: -25px;
`;

const Button = ({ onClick, id }) => {
  return (
    <ButtonStyles onClick={onClick} className="btn-play">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
        />
      </svg>
    </ButtonStyles>
  );
};

export default Button;
