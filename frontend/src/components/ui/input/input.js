import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {SECONDARY} from "../../../constants/colors";

const StyledInput = styled.input`
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    background: ${SECONDARY};
    padding: 15px 40px;
    border-radius: 12px;
`;

const Input = ({
                   value,
                   placeholder,
                   disable,
                   onChange
               }) => {
    return (
        <StyledInput
            value={value}
            placeholder={placeholder}
            disable={disable}
            onChange={onChange}/>
    );
};

export default Input;

Input.defaultProps = {
    value: '',
    disabled: false,
    onChange: () => {
    },
};

Input.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};
