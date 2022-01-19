import {useSelector} from "react-redux";
import {defaultStateType} from "../../state";

import {TCard} from "./Card.types";

import {
    AddToCart,
    Buy,
    Card, CardsButtons, CardsContainer, CardsDescription,
    CardsFooter,
    CardsHeader,
    CardsImageContainer,
    Image, Like, Price,
    Title
} from './Card.styles';

import {FiShoppingCart} from 'react-icons/fi'
import {FiHeart} from 'react-icons/fi'

const CardsItem = ({title, image, price, onBuy, onLike, addToCart, id}:TCard) => {
    const isCurrentCardLiked:boolean = useSelector((state:defaultStateType) => state.donutList[state.donutList.findIndex((card:TCard) => card.id === id)].isLiked )

    return(
        <CardsContainer>
            <Card>
                <CardsHeader>
                    <Title>{title}</Title>
                    <CardsImageContainer>
                        <Image src={image} alt="Good"/>
                    </CardsImageContainer>
                </CardsHeader>

                <CardsFooter>
                    <CardsDescription>
                        <Price>{`${price}$`}</Price>
                        <CardsButtons>
                            <AddToCart onClick={() => addToCart(id)}><FiShoppingCart/></AddToCart>
                            <Like className={isCurrentCardLiked ? 'liked' : 'disliked'}
                                  onClick={() =>
                                      onLike(id, isCurrentCardLiked)
                                  }><FiHeart/>
                            </Like>
                            <Buy onClick={() =>
                                onBuy(title, image, price, id)
                            }>Buy</Buy>
                        </CardsButtons>
                    </CardsDescription>
                </CardsFooter>
            </Card>
        </CardsContainer>
    )
}

export default CardsItem
