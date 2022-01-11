import {TCard} from "../Card/Card.types";

import {
    Buy,
    Card, CardsButtons, CardsContainer, CardsDescription,
    CardsFooter,
    CardsHeader,
    CardsImageContainer,
    Image, Like, Price,
    Title, LikesCount
} from './Card.styles';

const CardsItem = ({title, image, price, onBuy, onLike, likesCount}:TCard) =>
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
                        <LikesCount>
                            ❤{likesCount}
                        </LikesCount>
                        <Like onClick={onLike}>Like</Like>
                        <Buy onClick={onBuy}>Buy</Buy>
                    </CardsButtons>
                </CardsDescription>
            </CardsFooter>
        </Card>
    </CardsContainer>

export default CardsItem
