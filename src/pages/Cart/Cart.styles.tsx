import styled from "styled-components";

export const Container = styled.div`
`
export const TopPart = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
`
export const ContainerAll = styled.div`
  min-height: 100vh;
  padding: 0 30px;
  background: #f0f0f0;
  font-family: monospace;
`
export const Border = styled.div`
  border-top: 2px black solid;
`
export const HeaderCart = styled.div`
  padding: 0;
  margin: 0;
  font-size: 2em;
  font-family: monospace;
  font-weight: normal;
`
export const GoodsTable = styled.table`
  margin: 0 auto;
  padding: 10px;
  background: rgba(209, 209, 209, 0.34);
  border-radius: 10px;
`
export const GoodsContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const EmptyCart = styled.div`
  align-self: center;
  font-size: 20px;
`
export const TableRow = styled.tr`
`
export const TableHCell = styled.th`
  font-size: 15px;
  font-weight: 100;
`
export const TableCell = styled.td`
`
export const TotalOrder = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const TotalPrice = styled.div`
  padding: 10px 20px;
  font-weight: bold;
  font-size: 1.5em;
`
export const OrderButton = styled.button`
  padding-left: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  font-family: monospace;

  &:hover {
    color: #b8b8b8;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    transition: 0.3s;
    cursor: pointer;
  }
`