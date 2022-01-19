import styled from "styled-components";

export const Container = styled.div`
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
export const TopPart = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 30px 0;
`
export const HeaderAll = styled.h3`
  flex-basis: 42%;
  padding: 0;
  margin: 0;
  font-size: 2em;
  font-family: monospace;
  font-weight: normal;
`
export const Sorting = styled.div`
  position: relative;
  width: 10%;
  cursor: pointer;
`
export const SortButton = styled.button`
  font-size: 1.25em;
  font-family: monospace;
  border: none;
  cursor: pointer;
`
export  const Select = styled.div`
  position: absolute;
  font-size: 1em;
`
export const Option = styled.div`
  padding: 3px 0;
`
export const OptionLink = styled.a`
  padding: 5px;
  text-decoration: none;
  background: #f0f0f0;

  &:hover {
    background: #d6d6d6;
  }
`
export const CardsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`
export const CardsHeader = styled.div`
  display: flex;
  flex-direction: column;
`
export const CardsImageContainer = styled.div`
`
export const CardsFooter = styled.div`
`