import {useDispatch, useSelector} from "react-redux";
import {addGoodToCart, closeModal, showModal} from "../../state/actions";
import {defaultStateType} from "../../state";

import { links } from '../../contsts';

import { Header } from '../../components';
import {Card} from "../../components";
import {ModalFolder} from "../../components";

import {Container, HeaderFav,   Border, CardsGroup,
    ContainerAll, TopPart} from './Favorites.styles';

const Favorites = () => {
    const dispatch = useDispatch()
    const donuts = useSelector((state:defaultStateType) => state.donutList)
    const favoritesDonuts =  [...donuts].filter((a) => a.isLiked)

    const isModalShow = useSelector((state:defaultStateType) => state.isModalShow)
    const good = useSelector((state:defaultStateType) => state.goodForModal)

    const onBuy = (title:string, image:string, price:number, id:number) => {
        dispatch(showModal({title, price, image, id}))
    }
    //actions with card folder
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
          {isModalShow ? <ModalFolder title={good.title}
                                      price={good.price}
                                      image={good.image}
                                      id={good.id}
                                      addToCart={addToCart}
                                      addToCartAndBuy={addToCartAndBuy}
                                      closeModalFolder={closeModalFolder}
          /> : false}
          <Header
              links={links}
          />
          <ContainerAll>
              <Border/>
              <TopPart>
                  <HeaderFav>favorites</HeaderFav>
              </TopPart>

              <CardsGroup>
                  {favoritesDonuts.map((card) => <Card
                      {...card}
                      onBuy={onBuy}
                      addToCart={addToCart}
                      key={`${card.title} + ${Math.random()}`}/>)}
              </CardsGroup>
          </ContainerAll>
      </Container>
  )
};

export default Favorites;
