import styled from "styled-components";

export const CardsContainer = styled.div`
  padding: 20px;
  width: 20%;
  min-width: 350px; 
`


export const Card = styled.div`
  border: 1px solid #25252547;
  border-radius: 10px;
  background: white;
  &:hover{
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.1);
    transition: 0.3s;
  }
`
export const CardsHeader = styled.div`
  display: flex;
  flex-direction: column;
`
export const CardsImageContainer = styled.div`
  display: flex;
`
export const Image = styled.img`
  margin: 0 auto;
  max-height: 330px;
  
`

export const Title = styled.div`
  font-size: 1em;   
  padding: 20px;;
  font-family: cursive;
  min-height: 30px;
  max-height: 30px;
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
  align-items: stretch;
  font-family: monospace;
`

export const Like = styled.button`
  border: none;
  font-size: 26px;
  font-family: monospace;
  padding: 0 10px;
  color: black;
  background: none;

  &:hover {
    cursor: pointer
  }

  &.liked {
    color: red;
  }

  &.liked:hover {
    color: rgba(206, 119, 117, 0.66);
  }

  &.disliked {
    color: black;
  }

  &.disliked:hover {
    color: #b5b5b5;
  }
`
export const Buy = styled.button`
  padding-left: 10px;
  border: none;
  font-size: 1.5em;
  font-family: monospace;
  background: none;


  &:hover {
    color: #b8b8b8;
    cursor: pointer
  }
`
