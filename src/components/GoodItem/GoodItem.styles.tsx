import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`
export const GoodCount = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  padding: 10px 20px;
`
export const GoodImage = styled.img`
  max-height: 100px;
`
export const GoodDescription = styled.div`
  font-size: 1em;
  padding: 10px 20px;
  font-family: cursive;
  min-height: 30px;
  max-height: 30px;
`
export const GoodPrice = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  padding: 10px 20px;
`
export const TableCell = styled.td`
  vertical-align: top;
`
export const ButtonCount = styled.button`
  background: none;
  padding: 0 5px;
  border: none;
  font-size: 20px;
  font-family: monospace;
  &:hover {
    color: #b8b8b8;
    cursor: pointer
  }
`
export const RemoveContainer = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  padding: 4px;
`
export const RemoveButton = styled.button`
  align-self: flex-end;
  width: 30px;
  height: 30px;
  color: black;
  position: relative;
  cursor: pointer;
  border: none;
  background: none;

  &:hover:before, &:hover:after {
    opacity: 1;
    background: #b8b8b8;
    cursor: pointer
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