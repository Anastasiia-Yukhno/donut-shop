import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setDecreaseCount, setIncreaseCount, setTotalSum, deleteGood} from "../../state/actions";
import {defaultStateType} from "../../state";

import { links } from '../../contsts';

import {GoodItem} from "../../components";
import { Header } from '../../components';

import {
    Container,
    HeaderCart,
    GoodsContainer,
    GoodsTable,
    TableRow,
    TopPart,
    TableHCell, EmptyCart, TableCell, TotalOrder, TotalPrice, OrderButton, Border,
    ContainerAll
} from './Cart.styles';

const Cart = () => {
    const dispatch = useDispatch()
    const cartGoods = useSelector((state:defaultStateType) => state.cart)
    const totalSum = useSelector((state:defaultStateType) => state.totalSum)

    const calculateFinalPrice = () => {
        let sum:number = 0;
        cartGoods.map((good) =>
            sum += good.price)
        dispatch(setTotalSum(sum))
    }

    //change count of goods
    const increaseCount = (id:number) => {
        dispatch(setIncreaseCount(id));
    };
    const decreaseCount = (id:number) => {
        dispatch(setDecreaseCount(id))
    }
    const deleteGoodFromCart = (id:number) => {
        dispatch(deleteGood(id))
    }

    useEffect(() => {
        calculateFinalPrice()
    }, [cartGoods])


    return (
        <Container>
            <Header
                links={links}
            />
            <ContainerAll>
                <Border/>
                <TopPart>
                    <HeaderCart>Cart</HeaderCart>
                </TopPart>
                <GoodsContainer>
                    {cartGoods.length !== 0 ?  <GoodsTable>
                        <tbody>
                        <TableRow>
                            <TableHCell colSpan={2}>Good</TableHCell>
                            <TableHCell>Count</TableHCell>
                            <TableHCell>Price</TableHCell>
                            <TableHCell/>

                        </TableRow>

                        {
                            cartGoods.sort((good1, good2) => good1.title > good2.title ? 1 : -1).map((card, index, donutList) => {
                                if(donutList.slice(0,index).find((thisCard) => thisCard.id === card.id)) return false
                                let sameCards = donutList.filter((thisCard) => thisCard.id === card.id)
                                return <GoodItem
                                    increaseCount={increaseCount}
                                    decreaseCount={decreaseCount}
                                    deleteGoodFromCart={deleteGoodFromCart}
                                    goodsCount={sameCards.length}
                                    {...card}
                                    key={`${card.title} + ${Math.random()}`}/>
                            })
                        }


                        <TableRow>
                            <TableCell colSpan={4}>
                                <TotalOrder>
                                    <TotalPrice>{totalSum || calculateFinalPrice()}$</TotalPrice>
                                    <OrderButton>Order</OrderButton>
                                </TotalOrder>
                            </TableCell>
                        </TableRow>
                        </tbody>
                    </GoodsTable> : <EmptyCart>Cart is empty</EmptyCart>}
                </GoodsContainer>

            </ContainerAll>
        </Container>
    )
};

export default Cart;
