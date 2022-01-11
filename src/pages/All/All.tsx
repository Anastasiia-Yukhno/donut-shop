import { Header } from '../../components';
import {links} from "../../contsts";
import { Container } from './All.styles';
import {useState} from "react";
import CardsItem from "../../components/Card";
import {
    CardsGroup,
    ContainerAll,
    HeaderAll,
    Sorting,
    TopPart,
    Border,
    SortButton,
    Select,
   Option, OptionLink
} from './All.styles';
import {useDispatch} from "react-redux";
import {DonutList} from "../../Mock/donutList";
import {getAPIRequest} from "../../state/actions";

const All = () => {

    const dispatch = useDispatch()
    const [donutList, setDonutList] = useState(DonutList)
    const sortFeatured = () => {
        let newDonutList = [...donutList]
        newDonutList.sort((a, b) => a.likesCount < b.likesCount? 1 : -1)
        setDonutList(newDonutList)
        console.log('donutList', donutList)
    }
    const sortPriceLowToHigh = () => {
        let newDonutList = [...donutList]
        newDonutList.sort((a, b) => a.price > b.price? 1 : -1)
        setDonutList(newDonutList)
        console.log('donutList', donutList)
    }

    const sortPriceHighToLow = () => {
        let newDonutList = [...donutList]
        newDonutList.sort((a, b) => a.price < b.price? 1 : -1)
        setDonutList(newDonutList)
        console.log('donutList', donutList)
    }
    const [isSorting, setSorting] = useState(false)
    return (
        <Container>
            <Header
                links={links}
            />
            <ContainerAll  onClick={() => dispatch(getAPIRequest())}>
                <Border/>
                <TopPart>
                    <HeaderAll>All</HeaderAll>
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
                    {donutList.map((card) => <CardsItem {...card} key={`${card.title} + ${Math.random()}`}/>)}
                </CardsGroup>
            </ContainerAll>

        </Container>
    )
};

export default All;
