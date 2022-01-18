import styled from "styled-components";

export const Folder = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(10, 10, 10, 0.86);
  z-index: 99;
  
`
export const Order = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  max-width: 300px;
  background-color: lightgray;
  border-radius: 5px;
  justify-content: space-evenly;
`
export const CloseButton = styled.span`
  align-self: flex-end;
  width: 30px;
  height: 30px;
  color: black;
  position: relative;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:before, &:after {
    position: absolute;
    top: 5px;
    left: 12px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`
export const GoodName = styled.div`
  font-family: cursive;
  font-size: 20px;
`
export const GoodImage = styled.img`
  padding: 10px;
  width: 100%;
  max-width: 150px; 
  align-self: center;
`
export const GoodDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
`
export const GoodPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: cursive;
`
export const Buy = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 10px;
`
export const BuyButton = styled.button`
  background: #c7c5c4;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  font-family: cursive;
  cursor: pointer;

  &:hover {
    background: rgba(247, 245, 245, 0.94);
  }
`
