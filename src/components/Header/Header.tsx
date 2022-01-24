import { useSelector } from 'react-redux'
import { defaultStateType } from '../../state'

import { THeader } from './Header.types'
import {
    HeaderContainer,
    Logo,
    GroupOfLinks,
    HeaderLink,
    LinkContainer,
    GoodCount,
} from './Header.styles'

const Header = ({ links }: THeader) => {
    const cart = useSelector((state: defaultStateType) => state.cart)
    return (
        <HeaderContainer>
            <Logo>Donuts</Logo>
            <GroupOfLinks>
                {links?.map(({ link, title }) => (
                    <HeaderLink key={link} to={link}>
                        {title}
                    </HeaderLink>
                ))}
            </GroupOfLinks>

            <LinkContainer>
                <HeaderLink to={'/cart'}>cart</HeaderLink>
                {cart.length ? <GoodCount>{cart.length}</GoodCount> : false}
            </LinkContainer>
        </HeaderContainer>
    )
}
export default Header
