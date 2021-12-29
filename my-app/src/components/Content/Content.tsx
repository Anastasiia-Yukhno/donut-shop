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
    CardsDescription, Price, CardsButtons, Like, Buy
} from "./Content.styles";
import {DonutList} from "../../Mock/donutList";
const SortingList = [
    {label: 'Featured'},
    {label: 'Price Low to High'},
    {label: 'Price High to Low'}
]

export const CardsItem = ({title, image, price, onBuy, onLike}) =>
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
                    <Price>`${price}10$`</Price>
                    <CardsButtons>
                        <Like onClick={onLike}>Like</Like>
                        <Buy onClick={onBuy}>Buy</Buy>
                    </CardsButtons>
                </CardsDescription>
            </CardsFooter>
        </Card>
    </CardsContainer>

export const Page = () => {
    return (
        <Container>
            <Border/>
            <TopPart>
                <HeaderAll>All</HeaderAll>
                <Sorting>
                    <SortButton >Sorting</SortButton>
                    <Select>
                        <a>Price Low to High</a>
                        <a>Featured</a>
                        <a>Price High to Low</a>
                    </Select>
                </Sorting>
            </TopPart>
            <CardsGroup>
                {DonutList.map((card) => <CardsItem {card}/>)}
               <CardsItem/>
                <CardsItem/>

                <CardsItem/>

                <CardsItem/>
                <CardsItem/>
                <CardsItem/>

            </CardsGroup>
        </Container>
    )
}