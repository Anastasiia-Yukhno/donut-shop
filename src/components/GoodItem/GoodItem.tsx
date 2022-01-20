import {GoodItemTypes} from "./GoodItem.types";

import {
    ButtonCount,
    GoodCount,
    GoodDescription,
    GoodImage,
    GoodPrice, RemoveButton, RemoveContainer,
    TableCell
} from "./GoodItem.styles";
import {TableRow} from "../../pages/Cart/Cart.styles";

const GoodItem = ({title, image, price, id, decreaseCount, increaseCount, deleteGoodFromCart, goodsCount}:GoodItemTypes ) => {
    return(
        <TableRow>
            <TableCell>
                <GoodImage src={image}/>
            </TableCell>
            <TableCell>
                <GoodDescription>{title}</GoodDescription>
            </TableCell>
            <TableCell>
                <GoodCount>
                    <ButtonCount onClick={() => goodsCount > 1 ? decreaseCount(id) : false}>-</ButtonCount>
                    {goodsCount}
                    <ButtonCount onClick={() => increaseCount(id)}>+</ButtonCount>
                </GoodCount>
            </TableCell>
            <TableCell>
                <GoodPrice>{price}$</GoodPrice>
            </TableCell>
            <TableCell>
                <RemoveContainer>
                    <RemoveButton onClick={() => deleteGoodFromCart(id)}/>
                </RemoveContainer>
            </TableCell>
        </TableRow>
    )
}
export default GoodItem
