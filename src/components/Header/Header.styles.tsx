import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #f0f0f0;
`
export const Logo = styled.div`
    color: black;
    font-size: 1.5em;
    font-family: monospace;
`
export const GroupOfLinks = styled.div`
    display: flex;
    background: #f0f0f0;
`
export const HeaderLink = styled(Link)`
    padding: 0 10px;
    text-decoration: none;
    color: #363636;
    text-align: center;
    font-size: 1.5em;
    font-family: monospace;

    &:hover,
    &:active {
        color: gainsboro;
        cursor: pointer;
    }
`
export const LinkContainer = styled.div`
    display: flex;
`
export const GoodCount = styled.div`
    background: #d8c8c8;
    border-radius: 20px;
    padding: 2px;
    width: 20px;
    height: 20px;
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
`
