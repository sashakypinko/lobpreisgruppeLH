import React from 'react';
import styled from 'styled-components';
import {PRIMARY, SECONDARY} from "../../../constants/colors";

const StyledButton = styled.button`
  border: ${({ variant, color }) => (variant === 'outlined' ? `1px solid ${color}` : 'none')};
  background: ${PRIMARY};
  color: ${({ variant, color }) => (variant === 'contained' ? SECONDARY : color)};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  cursor: pointer;
  font-size: 12px;  
  display: flex;
  align-items: center;
  padding: 15px 40px;
  border-radius: 12px;

  :focus {
    outline: none;
  }
`;

const Button = ({
    variant = 'contained',
    color = SECONDARY,
    fullWidth = false,
    children,
    ...props
}) => {
    return (
        <StyledButton fullWidth={fullWidth} variant={variant} color={color} {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;
