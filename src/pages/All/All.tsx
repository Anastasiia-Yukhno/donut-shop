import { Header } from '../../components';
import {links} from "../../contsts";
import { Container } from './All.styles';
import {useState} from "react";
import {DonutList} from "../../Mock/donutList";
import CardsItem from "../../components/Card";
import {
    CardsGroup,
    CardsContainer,
    ContainerAll,
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
} from './All.styles';
const All = () => {
    const [isSorting, setSorting] = useState(false)
    return (
        <Container>
            <Header
                links={links}
            />
            <ContainerAll>
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
                {DonutList.map((card) => <CardsItem {...card} key={`${card.title} + ${Math.random()}`}/>)}
            </CardsGroup>
            </ContainerAll>

        </Container>
    )
};

export default All;
