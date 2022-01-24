import { Option, OptionLink, Select, SortToolTip } from './Popup.styles'
import { FiHeart } from 'react-icons/fi'
import { MdAttachMoney } from 'react-icons/md'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import { useState } from 'react'
import { PopupTypes } from './Popup.types'

const Popup = ({
    sortFeatured,
    sortPriceHighToLow,
    sortPriceLowToHigh,
}: PopupTypes) => {
    const [isFeatureVisible, setFeatureVisible] = useState(false)
    const [isHighToLowVisible, setHighToLowVisible] = useState(false)
    const [isLowToHighVisible, setLowToHighVisible] = useState(false)

    return (
        <Select>
            <Option>
                {' '}
                <OptionLink
                    onMouseOver={() => setFeatureVisible(true)}
                    onMouseOut={() => setFeatureVisible(false)}
                    onClick={sortFeatured}
                >
                    <FiHeart />
                </OptionLink>
                {isFeatureVisible && <SortToolTip>Featured</SortToolTip>}
            </Option>
            <Option>
                {' '}
                <OptionLink
                    onClick={sortPriceHighToLow}
                    onMouseOver={() => setHighToLowVisible(true)}
                    onMouseOut={() => setHighToLowVisible(false)}
                >
                    <MdAttachMoney />
                    <BsArrowDown />
                </OptionLink>
                {isHighToLowVisible && (
                    <SortToolTip>Price, High to Low</SortToolTip>
                )}
            </Option>
            <Option>
                {' '}
                <OptionLink
                    onClick={sortPriceLowToHigh}
                    onMouseOver={() => setLowToHighVisible(true)}
                    onMouseOut={() => setLowToHighVisible(false)}
                >
                    <MdAttachMoney />
                    <BsArrowUp />
                </OptionLink>
                {isLowToHighVisible && (
                    <SortToolTip>Price, Low to High</SortToolTip>
                )}
            </Option>
        </Select>
    )
}

export default Popup
