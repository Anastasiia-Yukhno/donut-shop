import styled from "styled-components";

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
