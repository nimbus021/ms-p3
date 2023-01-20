import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import { FaSearch } from 'react-icons/fa';

function Search() {
  return (
    <FormStyle>
        <input type='text' />
    </FormStyle>
  )
}

const FormStyle = styled.form `
    margin: 0rem 20rem;
    position: relative;
    width: 100%;
    input{
        border:none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        border: none;
        border-radius: 1rem;
        outline: none;
    }
    svg{
        position:absolute;
        top: 50%;
        left: 0%;
        color: white;

    }
`;

export default Search