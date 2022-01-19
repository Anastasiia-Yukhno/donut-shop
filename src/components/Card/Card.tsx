import {TCard} from "./Card.types";
import {
    Buy,
    Card, CardsButtons, CardsContainer, CardsDescription,
    CardsFooter,
    CardsHeader,
    CardsImageContainer,
    Image, Like, Price,
    Title
} from './Card.styles';
import {useSelector} from "react-redux";
import {defaultStateType} from "../../state";

const CardsItem = ({title, image, price, onBuy, onLike, id, index}:TCard) => {
    const isCurrentCardLiked:boolean = useSelector((state:defaultStateType) => state.donutList[state.donutList.findIndex((card:TCard) => card.id == id)].isLiked )

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
                            <Like className={isCurrentCardLiked ? 'liked' : 'disliked'} onClick={() => {
                                 onLike(id, isCurrentCardLiked);
                                console.log('isCurrentCardLiked by onclick', isCurrentCardLiked, index)

                            }}>&#9825;</Like>
                            <Buy onClick={() => {
                                onBuy(title, image, price, id)
                            }}>Buy</Buy>
                        </CardsButtons>
                    </CardsDescription>
                </CardsFooter>
            </Card>
        </CardsContainer>
    )
}

export default CardsItem
