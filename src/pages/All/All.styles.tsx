import styled from "styled-components";

export const Container = styled.div`
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

export const TopPart = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 30px 0;
  align-items: flex-end;
`
export const HeaderAll = styled.h3`
  font-size: 2em;
  font-family: monospace;
  padding: 0;
  margin: 0;
  flex-basis: 42%;
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
  padding: 3px 0;
`
export const OptionLink = styled.a`
  text-decoration: none;
  background: #f0f0f0;
  padding: 5px;

  &:hover {
    background: #d6d6d6;
  }
`

export const CardsGroup = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const CardsHeader = styled.div`
  display: flex;
  flex-direction: column;
`
export const CardsImageContainer = styled.div`
`
export const CardsFooter = styled.div`
`

