import '../Footer/Footer.css'
import logo from '../../assets/logo1.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footercontent">
            <div className="footerCont1">
                <div className="contentFooterTitle">Get To Know Us</div>
                <div className="contentFootersubTitlediv">
                    <div className="contentFootersubTitleCont">About Us</div>
                    <div className="contentFootersubTitleCont">Careers</div>
                    <div className="contentFootersubTitleCont">Press Releases</div>
                    <div className="contentFootersubTitleCont">Amazon Science</div>
                </div>
            </div>

            <div className="footerCont1">
                <div className="contentFooterTitle">Connect with Us</div>
                <div className="contentFootersubTitlediv">
                    <div className="contentFootersubTitleCont">Instagram</div>
                    <div className="contentFootersubTitleCont">Twitter</div>
                    <div className="contentFootersubTitleCont">Facebook</div>
                   
                </div>
            </div>

            <div className="footerCont1">
                <div className="contentFooterTitle">Make Money with Us</div>
                <div className="contentFootersubTitlediv">
                    <div className="contentFootersubTitleCont">Sell on Amazon</div>
                    <div className="contentFootersubTitleCont">Sell under Amazon Accelerator</div>
                    <div className="contentFootersubTitleCont">Protect and Build Your Brand</div>
                    <div className="contentFootersubTitleCont">Amazon Global Selling</div>
                    <div className="contentFootersubTitleCont">Supply to Amazon</div>
                    <div className="contentFootersubTitleCont">Become an Affiliate</div>
                    <div className="contentFootersubTitleCont">Fulfilment by Amazon</div>
                    <div className="contentFootersubTitleCont">Advertise Your Products</div>
                    <div className="contentFootersubTitleCont">Amazon Pay on Merchants</div>
                </div>
            </div>

            <div className="footerCont1">
                <div className="contentFooterTitle">Let Us Help You</div>
                <div className="contentFootersubTitlediv">
                    <div className="contentFootersubTitleCont">Your Account</div>
                    <div className="contentFootersubTitleCont">Returns Centre</div>
                    <div className="contentFootersubTitleCont">Recalls and Product Safety Alerts</div>
                    <div className="contentFootersubTitleCont">100% Purchase Protection</div>
                    <div className="contentFootersubTitleCont">Amazon App Download</div>
                    <div className="contentFootersubTitleCont">Help</div>
                </div>
            </div>

        </div> 
        <div className="amazonImg">
            <img className='amazonImgFooter' src={logo} alt="" />
        </div>
    </div>
  )
}

export default Footer
