import { useDispatch, useSelector } from 'react-redux'
import { addGoodToCart, removeLike, setLike } from '../../state/actions'
import { defaultStateType } from '../../state'

import { links } from '../../contsts'

import { Header } from '../../components'
import { Card } from '../../components'
import { ModalFolder } from '../../components'

import {
    Container,
    HeaderFav,
    Border,
    CardsGroup,
    ContainerAll,
    TopPart,
} from './Favorites.styles'
import { useState } from 'react'

const Favorites = () => {
    const dispatch = useDispatch()
    const donuts = useSelector((state: defaultStateType) => state.donutList)
    const favoritesDonuts = [...donuts].filter((a) => a.isLiked)

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [good, setGood] = useState({
        title: '',
        price: 0,
        image: '',
        id: 0,
    })
    const onLike = (id: number, isLiked: boolean) => {
        isLiked ? dispatch(removeLike(id)) : dispatch(setLike(id))
    }

    const onBuy = (title: string, image: string, price: number, id: number) => {
        setIsModalVisible(true)
        setGood({ title, image, price, id })
    }
    //actions with card folder
    const addToCart = (id: number) => {
        dispatch(addGoodToCart(id))
        setIsModalVisible(false)
    }
    const addToCartAndBuy = (id: number) => {
        dispatch(addGoodToCart(id))
        setIsModalVisible(false)
    }
    const closeModalFolder = () => {
        setIsModalVisible(false)
    }
    return (
        <Container>
            {isModalVisible ? (
                <ModalFolder
                    title={good.title}
                    price={good.price}
                    image={good.image}
                    id={good.id}
                    addToCart={addToCart}
                    addToCartAndBuy={addToCartAndBuy}
                    closeModalFolder={closeModalFolder}
                />
            ) : (
                false
            )}
            <Header links={links} />
            <ContainerAll>
                <Border />
                <TopPart>
                    <HeaderFav>favorites</HeaderFav>
                </TopPart>

                <CardsGroup>
                    {favoritesDonuts.map((card) => (
                        <Card
                            {...card}
                            onBuy={onBuy}
                            onLike={onLike}
                            addToCart={addToCart}
                            key={`${card.title} + ${Math.random()}`}
                        />
                    ))}
                </CardsGroup>
            </ContainerAll>
        </Container>
    )
}

export default Favorites
