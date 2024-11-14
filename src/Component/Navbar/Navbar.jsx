import '../Navbar/Navbar.css'
import Navbarbelt from './Navbarbelt/Navbarbelt'
import Navbarbanner from './Navbarbanner/Navbarbanner'

const Navbar = () => {
  return (
    <div className="navbar">
     <Navbarbelt/>
     <Navbarbanner/>
    </div>
  )
}

export default Navbar
