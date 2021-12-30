import {
    CardsGroup,
    CardsContainer,
    Container,
    HeaderAll,
    Sorting,
    TopPart,
    Border,
    SortButton,
    Select,
    Card,
    CardsFooter,
    CardsHeader,
    Image,
    CardsImageContainer,
    Title,
    CardsDescription, Price, CardsButtons, Like, Buy, Option, OptionLink
} from "./Content.styles";
import {DonutList} from "../../Mock/donutList";
import {TCard} from "./Content.types";
import {useState} from "react";

export const CardsItem = ({title, image, price, onBuy, onLike}:TCard) =>
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

export const Page = () => {
    const [isSorting, setSorting] = useState(false)
    return (
        <Container>
            <Border/>
            <TopPart>
                <HeaderAll>All</HeaderAll>
                <Sorting>
                    <SortButton onClick={() => setSorting(!isSorting)}>Sorting</SortButton>
                    {isSorting && <Select>
                        <Option> <OptionLink>Featured</OptionLink></Option>
                        <Option> <OptionLink>Price, High to Low</OptionLink></Option>
                        <Option> <OptionLink>Price, Low to High</OptionLink></Option>
                    </Select>}
                </Sorting>
            </TopPart>
            <CardsGroup>
                {DonutList.map((card) => <CardsItem {...card}/>)}
            </CardsGroup>
        </Container>
    )
}