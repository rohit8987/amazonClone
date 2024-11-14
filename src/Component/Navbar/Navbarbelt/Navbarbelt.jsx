import '../Navbarbelt/Navbarbelt.css'
import logo from '../../../assets/logo1.png'
import indian from '../../../assets/india.webp'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Navbarbelt = () => {

  const cartItems = useSelector((state)=> state.cart.items)

  return (
    <>
      <div className="navbarbelt">
        <div className="leftNavbarbelt">
          <Link to={'/'} className="leftNavbarbeltlogo">
            <img src={logo} alt="logo" className="logo" />
            <span className="navbar_inlogo">.in</span>
          </Link>
          <div className="navbarbeltlocation">
            <div className="navbarbeltlocationimg">
              <LocationOnIcon className='navbarbeltlocationimgicon' sx={{ fontSize: '22px' }} />
            </div>
            <div className="navbarbeltlocationplace">
              <div className="navbarbeltlocationTop">Deliver to Jharkhand 827010</div>
              <div className="navbarbeltlocationBottom">Update Location</div>
            </div>
          </div>
        </div>

        <div className="navbarbeltsearchbox">
          <div className="navbarbeltsearchdiv">
            <div className="navbarbeltsearchboxAll">
              <div className="navbarbeltsearchboxAlltext">All</div>
              <ArrowDropDownIcon sx={{ fontSize: '22px' }} />
            </div>
            <input type="text" className='navbarbeltinputSearchBox' placeholder='Search Amazon.in' />
          </div>
          <div className="searchiconNavbarBelt">
            <SearchIcon sx={{ font: "26px" }} className='searchiconNavbarBelticon' />
          </div>
        </div>


        <div className="rightsideNavbarbelt">
          <div className="indianFlagCode">
            <img src={indian} alt="" className='indiaFlag' />
            <div className="indiancodenavbarbelt">EN <ArrowDropDownIcon sx={{ fontSize: 16, marginTop: 1, marginLeft: -0.4 }} /></div>
          </div>

          <div className="hellosigninnavbarBelt">
            <div className="hellotopnavbarBelt">Hello, user</div>
            <div className="indiancodenavbarbelt">Accounts & Lists</div>
          </div>

          <div className="hellosigninnavbarBelt">
            <div className="hellotopnavbarBelt">Returs</div>
            <div className="indiancodenavbarbelt">& Orders</div>
          </div>

          <Link to={'/Cart'} className="hellosigninnavbarBelt">
            <span className="cartitemNumberNavbarBelt">{cartItems.length}</span>
            <div className="cartt"><ShoppingCartIcon /><span className="cartTitle">Cart</span></div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbarbelt
