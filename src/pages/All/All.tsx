import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    addGoodToCart,
    closeModal,
    removeLike,
    setLike,
    showModal
} from "../../state/actions";
import {defaultStateType} from "../../state";


import {links} from "../../contsts";
import { Header } from '../../components';
import {ModalFolder} from "../../components";
import {Card} from "../../components";

import {TCard} from "../../components/Card/Card.types";

import {
    CardsGroup,
    Container,
    ContainerAll,
    HeaderAll,
    Sorting,
    TopPart,
    Border,
    SortButton,
    Select,
   Option, OptionLink
} from './All.styles';

const All = () => {
    const dispatch = useDispatch()

    const donuts = useSelector((state:defaultStateType) => state.donutList)
    const isModalShow = useSelector((state:defaultStateType) => state.isModalShow)
    const good = useSelector((state:defaultStateType) => state.goodForModal)

    const [donutList, setDonutList] = useState<TCard[]>(donuts)
    const [isSorting, setSorting] = useState(false)

    //sorting
    const sortFeatured = () => {
        setDonutList([...donutList].sort((a, b) => a.isLiked  > b.isLiked ? -1 : 1))
    }
    const sortPriceLowToHigh = () => {
        setDonutList([...donutList].sort((a, b) => a.price > b.price ? 1 : -1))
    }
    const sortPriceHighToLow = () => {
        setDonutList([...donutList].sort((a, b) => a.price < b.price ? 1 : -1))
    }

    //actions with card
    const onLike = (id:number, isLiked:boolean) => {
        isLiked ? dispatch(removeLike(id)) : dispatch(setLike(id))
    }

    const onBuy = (title:string, image:string, price:number, id:number) => {
        dispatch(showModal({title, price, image, id}))
    }
    //actions with modal folder
    const addToCart = (id:number) => {
        dispatch(addGoodToCart(id));
        dispatch(closeModal)
    }

    const addToCartAndBuy = (id:number) => {
        dispatch(addGoodToCart(id))
        dispatch(closeModal)
}
    const closeModalFolder = () => {
        dispatch(closeModal)
    }

    return (
        <Container>
            {isModalShow ? <ModalFolder title={good.title} price={good.price} image={good.image} id={good.id} addToCart={addToCart} addToCartAndBuy={addToCartAndBuy} closeModalFolder={closeModalFolder}/> : false}

            <Header
                links={links}
            />
            <ContainerAll>
                <Border/>
                <TopPart>
                    <HeaderAll>all</HeaderAll>
                    <Sorting>
                        <SortButton onClick={() => setSorting(!isSorting)}>Sorting</SortButton>
                        {isSorting && <Select>
                            <Option> <OptionLink onClick={sortFeatured}>Featured</OptionLink></Option>
                            <Option> <OptionLink onClick={sortPriceHighToLow}>Price, High to Low</OptionLink></Option>
                            <Option> <OptionLink onClick={sortPriceLowToHigh}>Price, Low to High</OptionLink></Option>
                        </Select>}
                    </Sorting>
                </TopPart>
                <CardsGroup>
                    {donutList.map((card, index) => <Card {...card} onLike={onLike} onBuy={onBuy} index={index} key={`${card.title} + ${Math.random()}`}/>)}
                </CardsGroup>
            </ContainerAll>
        </Container>
    )
};

export default All;
