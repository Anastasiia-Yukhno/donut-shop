import styled from "styled-components";
import {Link} from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #f0f0f0;`

export const  Logo = styled.div`
  color: black;
  font-size: 1.5em;
  font-family: monospace;
`
export const GroupOfLinks = styled.div`
  display: flex;
  background: #f0f0f0;
`

export const HeaderLink = styled(Link)`
  font-size: 1.5em;
  text-align: center;
  color: #363636;
  text-decoration: none;
  padding: 0 15px;
  font-family: monospace;
  
  &:hover, &:active{
    color: gainsboro;
    cursor: pointer
  }
`;
