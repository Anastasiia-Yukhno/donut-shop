import {Link} from "react-router-dom";
import {TCardFolder} from "./ModalFolder.types";
import {Folder, Order, GoodName, GoodImage, GoodDescription, BuyButton, GoodPrice, Buy, CloseButton} from "./ModalFolder.styles";

const ModalFolder = ({id, image, title, price, addToCart, addToCartAndBuy, closeModalFolder}:TCardFolder ) => {
    return(
        <Folder onClick={(e) =>  {
            e.preventDefault();
            closeModalFolder()}
        }>
            <Order onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={closeModalFolder}/>
                <GoodImage src={image}/>
                <GoodDescription>
                    <GoodName>{title}</GoodName>
                    <GoodPrice>${price}</GoodPrice>
                </GoodDescription>
                <Buy>
                    <BuyButton onClick={() => addToCartAndBuy(id)}>Add to cart</BuyButton>
                    <Link to='/cart'
                          state={{title, image, price, id}}
                          style={{textDecoration: 'none', color: "black"}} onClick={() => addToCart(id)}>
                        <BuyButton>Buy</BuyButton>
                    </Link>
                </Buy>
            </Order>
        </Folder>
    )
}
export default ModalFolder