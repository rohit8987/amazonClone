import '../Products/Products.css'
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import productDetail from '../Products/Products.json'
import { useSelector , useDispatch } from 'react-redux';
import {addTocart} from '../../Redux/Action/Action'
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Products = () => {
     
    const dispatch = useDispatch();
    const cartItems = useSelector ((state) => state.cart.items)
    const handleAddTOCart=(item)=>{
        toast.success("Added in cart",{
            position:'bottom-right'
        })
        
        dispatch(addTocart(item));

    }

    return (
        <div className="productPage">
            <div className="productTopBanner">
                <div className="productTopBannerItems">Electroincs</div>
                <div className="productTopBannerItemsSubmenu">Mobiles & Accessories</div>
                <div className="productTopBannerItemsSubmenu">Laptops & Accessories</div>
                <div className="productTopBannerItemsSubmenu">TV & Home Entertainment</div>
                <div className="productTopBannerItemsSubmenu">Audio</div>
                <div className="productTopBannerItemsSubmenu">Cameras</div>
                <div className="productTopBannerItemsSubmenu">Computer Peripherals</div>
                <div className="productTopBannerItemsSubmenu">Smart Technology</div>
                <div className="productTopBannerItemsSubmenu">Office & Stationary</div>

            </div>

            <div className="productspageMain">
                <div className="productsPageMainLeftCategory">
                    <div className="productsPageMainLeftCategoryTitle">Category</div>
                    <div className="productsPageMainLeftCategoryContent">
                        <div className="productsPageMainLeftCategoryTitleContent">Computer & Accessories</div>
                        <div className="productsPageMainLeftCategoryContentSub">Macbooks</div>
                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarHalfIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp">& Up</div>
                        </div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp">& Up</div>
                        </div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarHalfIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp">& Up</div>
                        </div>
                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp">& Up</div>
                        </div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>
                        <div className="productsPageMainLeftCategoryContentSub">Electronic Equipment </div>
                        <div className="productsPageMainLeftCategoryContentSub"> Power Accessories </div>
                        <div className="productsPageMainLeftCategoryContentSub">Warranties</div>
                        <div className="productsPageMainLeftCategoryContentSub"> Tablets </div>
                        <div className="productsPageMainLeftCategoryContentSub">Home Audio</div>
                        <div className="productsPageMainLeftCategoryContentSub">eBook Readers & Accessories</div>
                        <div className="productsPageMainLeftCategoryContentSub"> GPS & Accessories </div>
                        <div className="productsPageMainLeftCategoryContentSub"> Computers & Accessories </div>
                    </div>
                </div>

                <div className="productspageMainRight">
                    <div className="productspageMainRightTopBanner">
                        1-5 of 5 for <span className="productspageMainRightTopBannerSpan">Macbooks</span>
                    </div>

                    <div className="itemsImgproductPage">

                        {
                            productDetail.products.map((item,) => {
                                return (
                                    <div className="itemsImgproductPageOne" key={item.id}>
                                        <div className="imgBlockitemsImageProductPageOne">
                                            <img src={item.imageUrl} alt="" className="productImageProduct" />
                                        </div>
                                        <div className="productNameProduct">
                                            <div>{item.name}</div>
                                            <div className="productNameProductRating">
                                                <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                                <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                                <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                                <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                                <StarOutlineIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                            </div>
                                            <div className="priceProductDetailPage">
                                                <div className="currencyText">₹</div>
                                                <div className="rateHomeDetail">
                                                    <div className="rateHomeDetailsPrice">{item.price}</div>
                                                    <div className="addtobasketBtn" onClick={()=>{handleAddTOCart(item)}}>Add To Cart</div>
                                                </div>
                                            </div>
                                            <div className="offproductPage">Flat INR 5000 Off on SBI Cards</div>
                                            <div className="freeDeliveryHomePage">Free Delivery By Amazon</div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Products
