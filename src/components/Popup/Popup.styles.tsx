import styled from 'styled-components'

export const Select = styled.div`
    position: absolute;
    z-index: 95;
    margin: 5px;
    font-size: 1em;
`
export const Option = styled.div`
    padding: 3px 0;
    position: relative;
`
export const SortToolTip = styled.span`
    padding-left: 5px;
    font-size: 1em;
    font-family: monospace;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 45px;
`
export const OptionLink = styled.a`
    padding: 5px;
    text-decoration: none;
    background: #f0f0f0;
    font-size: 1.25em;
    text-align: center;
    min-width: 30px;
    &:hover {
        background: #d6d6d6;
    }
`
