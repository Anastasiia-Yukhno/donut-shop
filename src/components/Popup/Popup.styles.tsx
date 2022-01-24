import styled from 'styled-components'

export const Select = styled.div`
    position: absolute;
    z-index: 99;
    margin: 5px;
    font-size: 1em;
`
export const Option = styled.div`
    padding: 3px 0;
    display: flex;
`
export const SortToolTip = styled.div`
    padding-left: 5px;
    font-size: 1em;
    font-family: monospace;
    border: none;
    cursor: pointer;
    max-width: 150px;
`
export const OptionLink = styled.a`
    padding: 5px;
    text-decoration: none;
    background: #f0f0f0;
    font-size: 1.25em;
    text-align: center;
    &:hover {
        background: #d6d6d6;
    }
`
