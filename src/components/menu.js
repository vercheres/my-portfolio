import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Icon = styled.button`
    position: fixed;
    top: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: button;
    cursor: pointer;
    z-index: 5;

    div {
        width: 1.5rem;
        height: .3rem;
        background: black;
        border-radius: 5px;
        transform-origin:
    }
`
const Menu = () => {
    return(
        <div>
            <Icon>
                <div/>
                <div/>
                <div/>
            </Icon>
        </div>
    )
}

export default Menu