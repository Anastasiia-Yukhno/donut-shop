import styled from "styled-components";

export const Container = styled.div`
  background: #f0f0f0;
  padding: 0px 30px;
  font-family: monospace;
`

export const Border = styled.div`
  border-top: 2px black solid;
  `

export const TopPart = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 30px 0px;
  align-items: flex-end;
`

export const HeaderAll = styled.h3`
  font-size: 2em;
  font-family: monospace;
  padding: 0px;
  margin: 0px;
  flex-basis: 50%;
  font-weight: normal;
`

export const Sorting = styled.div`
  position: relative;
  cursor: pointer;
  width: 10%;

`
export const SortButton = styled.button`
  font-size: 1.25em;
  font-family: monospace;
  border: none;
  cursor: pointer;

`

export  const Select = styled.div`
  font-size: 1em;
  position: absolute;
 
`
export const Option = styled.div`
  padding: 3px 0`

export const OptionLink = styled.a`
  text-decoration: none;
  background: #f0f0f0;
  padding: 5px;

  &:hover {
    background: #d6d6d6;
  }`

export const CardsGroup = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const CardsContainer = styled.div`
  padding: 20px;
  width: 30%;`

export const Card = styled.div`
  
  border: 1px solid black;

`
export const CardsHeader = styled.div`
  display: flex;
  flex-direction: column;
`
export const CardsImageContainer = styled.div`
  
`
export const Image = styled.img`
  width: 100%;
`

export const Title = styled.div`
  font-size: 2em;
  padding: 20px;;
`
export const CardsFooter = styled.div`
 
`

export const CardsDescription = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
`
export const Price = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  padding: 2px;
`
export const CardsButtons = styled.div`
`
export const Like = styled.button`
  border: none;
  font-size: 1.5em;
  font-family: monospace;

  &:hover {
    color: #b8b8b8;
    cursor: pointer

  }
;

`
export const Buy = styled.button`
  padding-left: 10px;
  border: none;
  font-size: 1.5em;
  font-family: monospace;

  &:hover {
    color: #b8b8b8;
    cursor: pointer

  }
`



