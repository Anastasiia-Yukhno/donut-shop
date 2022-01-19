import styled from "styled-components";

export const Container = styled.div`

`
export const TopPart = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
`
export const ContainerAll = styled.div`
  background: #f0f0f0;
  padding: 0 30px;
  font-family: monospace;
  min-height: 100vh;
`
export const Border = styled.div`
  border-top: 2px black solid;
`
export const HeaderCart = styled.div`
  font-size: 2em;
  font-family: monospace;
  padding: 0;
  margin: 0;
  font-weight: normal;
`
export const GoodsTable = styled.table`
  margin: 0 auto;
  background: rgba(209, 209, 209, 0.34);
  border-radius: 10px;
  padding: 10px;
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

`
export const TableCell = styled.td`

`
export const TotalOrder = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const TotalPrice = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  padding: 10px 20px;
`
export const OrderButton = styled.button`
  padding-left: 10px;
  border: none;
  font-size: 1.5em;
  font-family: monospace;

  &:hover {
    color: #b8b8b8;
    cursor: pointer
  }
`