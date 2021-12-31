import {TCard} from "../Card/Card.types";

import {
    Buy,
    Card, CardsButtons, CardsContainer, CardsDescription,
    CardsFooter,
    CardsHeader,
    CardsImageContainer,
    Image, Like, Price,
    Title
} from './Card.styles';

const CardsItem = ({title, image, price, onBuy, onLike}:TCard) =>
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
                        <Like onClick={onLike}>Like</Like>
                        <Buy onClick={onBuy}>Buy</Buy>
                    </CardsButtons>
                </CardsDescription>
            </CardsFooter>
        </Card>
    </CardsContainer>

export default CardsItem
