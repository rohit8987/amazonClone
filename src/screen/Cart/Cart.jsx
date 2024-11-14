import '../Cart/Cart.css'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromcart } from '../../Redux/Action/Action';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Cart = () => {
    const [cartItem, setCartItem] = useState([])
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    let a =0;
    let cost = cartItems.map ((item)=>{return a= a+ item.price})

    useEffect(() => {
        setCartItem(cartItems);
    }, [cartItems])

    const handleRemoveFromCart=(id)=>{
        
        toast.error("item Removed From cart",{
            position:'bottom-right'
        })
        dispatch(removeFromcart(id))
    }

    return (
        <div className="cart">
            <div className="topLeftCart">
                <div className="topLeftCartTitle">Shopping Cart</div>
                <div className="desellectAllCart">Deselect All Items </div>
                <div className="cartPriceTextDivider">Price</div>

                <div className="cartItemsDiv">
                    {
                        cartItems.map((item, id) => {
                            return (
                                <>
                                    <div className="cartItemBlock">
                                        <div className="cartItemLeftBlock">
                                            <div className="cartItemLeftBlockImage">
                                                <img src={item.imageUrl} className="cartItemLeftBlockImg" />
                                            </div>

                                            <div className="cartItemLeftBlockDetails">
                                                <div className="cartItemProductName">{item.name}</div>
                                                <div className="instockCart">In stock</div>
                                                <div className="elgFreeShp">Elligible for FREE Shipping</div>
                                                <div className="amazonFullFilledImage">
                                                    <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" className="fullfillimg" />
                                                </div>
                                                <div className="removeFromcart"onClick={()=>{handleRemoveFromCart(item.id)}}>Remove From Basket</div>
                                            </div>
                                        </div>


                                        <div className="cartItemRightBlock">Rs {item.price}</div>
                                    </div>
                                </>

                            )
                        })
                    }

                </div>
            </div>

            <div className="topRightCart">
                <div className="subTotalTitle">subtotal ({cartItem.length}items) : <span className="subTotalTitleSpan">Rs {a}</span></div>
                <div className="giftAddto">
                    <input type="checkbox" />
                    <div className="">This will be a gift</div>
                </div>
                <div className="proceedToBuy">Proceed To Buy</div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Cart
