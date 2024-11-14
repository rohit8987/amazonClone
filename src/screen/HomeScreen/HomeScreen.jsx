import './HomeScreen.css'
import HomeBanner from '../HomeScreen/HomeBanner/HomeBanner'
import HomeDetails from "../HomeScreen/HomeDetails/HomeDetails"


const HomeScreen = () => {
  return (
    
    <div className="homescreen">
      <HomeBanner/>
      <HomeDetails/>
     
    </div>
  )
}

export default HomeScreen
