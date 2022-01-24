import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addGoodToCart, removeLike, setLike } from '../../state/actions'
import { links } from '../../contsts'

import { Header } from '../../components'
import { ModalFolder } from '../../components'
import { Card } from '../../components'

import { defaultStateType } from '../../state'
import { TCard } from '../../components/Card/Card.types'

import {
    CardsGroup,
    Container,
    ContainerAll,
    HeaderAll,
    Sorting,
    TopPart,
    Border,
    SortButton,
} from './All.styles'
import Popup from '../../components/Popup'

const All = () => {
    const dispatch = useDispatch()

    const donuts = useSelector((state: defaultStateType) => state.donutList)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [good, setGood] = useState({
        title: '',
        price: 0,
        image: '',
        id: 0,
    })

    const [donutList, setDonutList] = useState<TCard[]>(donuts)
    const [isSorting, setSorting] = useState(false)

    //sorting
    const sortFeatured = () => {
        setDonutList(
            [...donutList].sort((a, b) => (a.isLiked > b.isLiked ? -1 : 1))
        )
        setSorting(!isSorting)
    }
    const sortPriceLowToHigh = () => {
        setDonutList(
            [...donutList].sort((a, b) => (a.price > b.price ? 1 : -1))
        )
        setSorting(!isSorting)
    }
    const sortPriceHighToLow = () => {
        setDonutList(
            [...donutList].sort((a, b) => (a.price < b.price ? 1 : -1))
        )
        setSorting(!isSorting)
    }

    //actions with card
    const onLike = (id: number, isLiked: boolean) => {
        isLiked ? dispatch(removeLike(id)) : dispatch(setLike(id))
    }

    const onBuy = (title: string, image: string, price: number, id: number) => {
        setIsModalVisible(true)
        setGood({ title, image, price, id })
    }

    //actions with modal folder
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
            {isModalVisible && Object.keys(good).length ? (
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
                    <HeaderAll>all</HeaderAll>
                    <Sorting>
                        <SortButton onClick={() => setSorting(!isSorting)}>
                            sorting
                        </SortButton>
                        {isSorting && (
                            <Popup
                                sortFeatured={sortFeatured}
                                sortPriceHighToLow={sortPriceHighToLow}
                                sortPriceLowToHigh={sortPriceLowToHigh}
                            />
                        )}
                    </Sorting>
                </TopPart>
                <CardsGroup>
                    {donutList.map((card, index) => (
                        <Card
                            {...card}
                            onLike={onLike}
                            onBuy={onBuy}
                            addToCart={addToCart}
                            index={index}
                            key={`${card.title} + ${Math.random()}`}
                        />
                    ))}
                </CardsGroup>
            </ContainerAll>
        </Container>
    )
}
export default All
