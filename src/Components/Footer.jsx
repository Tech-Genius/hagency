import { Link } from 'react-router-dom'
import footer from './assets/images/hagency-footer.jpg'
import './assets/css/Footer.css'
import { BsArrowUpRightCircle } from "react-icons/bs";

function Footer() {
    return (
        <div className="footer">
            <div className="upper_footer">

            </div>

            <div className="nexted-overlay-footer">
                <div className="footer_box">
                    <h3>Navigation</h3>
                    <ul> 
                        <li><BsArrowUpRightCircle className='footer_box_icon' /> Home</li>
                        <li><BsArrowUpRightCircle className='footer_box_icon' /> About</li>
                        <li><BsArrowUpRightCircle className='footer_box_icon' /> Projects</li>
                        <li><BsArrowUpRightCircle className='footer_box_icon' /> Blog</li>
                        <li><BsArrowUpRightCircle className='footer_box_icon' /> Contact</li>
                    </ul>
                </div>

                <div className="footer_box">
                    <h3>Company</h3>
                    <ul>
                        <li><BsArrowUpRightCircle className='footer_box_icon' /> Comapany</li>
                        <li><BsArrowUpRightCircle className='footer_box_icon' /> Hire Us</li>
                        <li><BsArrowUpRightCircle className='footer_box_icon' /> Services</li>
                        <li><BsArrowUpRightCircle className='footer_box_icon' /> Partner</li>
                        <li><BsArrowUpRightCircle className='footer_box_icon' /> Brand Assets</li>
                    </ul>
                </div>

                <div className="footer_box box3">
                    <h3>Our Headquarter</h3>
                    <hr />
                    <p>10-123 1/2 Main Street NW <br />
                        Montreal QC X0Z 217 <br />
                        Fax: 621-254-2147
                    </p>
                    <div className="footer_icons">
                        <BsArrowUpRightCircle className='footer_icon' />
                        <BsArrowUpRightCircle className='footer_icon' />
                        <BsArrowUpRightCircle className='footer_icon' />
                        <BsArrowUpRightCircle className='footer_icon' />
                    </div>
                </div>

            </div>
            <div className="copywright">
                <p>Designed By Coderender</p>
            </div>
        </div>
    )
}
export default Footer