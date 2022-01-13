import styled from "styled-components";

export const CardsContainer = styled.div`
  padding: 20px;
  width: 20%;
  min-width: 350px; 
`


export const Card = styled.div`
  border: 1px solid #252525;
  border-radius: 10px;
`
export const CardsHeader = styled.div`
  display: flex;
  flex-direction: column;
`
export const CardsImageContainer = styled.div`
`
export const Image = styled.img`
  width: 100%;
  height: 300px;
  
`

export const Title = styled.div`
  font-size: 20px;
  padding: 20px;;
  font-family: cursive;
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
  display: flex;
  align-items: baseline;
  font-family: monospace;
`
export const LikesCount = styled.div`
  font-size: 1.5em;
  padding: 0 10px
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
