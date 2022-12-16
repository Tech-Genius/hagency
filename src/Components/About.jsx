import style from './assets/css/About.module.css'
import hero from './assets/images/hagency-2.jpg'
import { FaHome } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import male from './assets/images/hagency-people-male.jpg'
import female from './assets/images/hagency-people-female.jpg'
import { FaCheck } from "react-icons/fa";
import pricingDiscount from './assets/images/pricing.png'
import testimonial1 from './assets/images/testimonial-1.jpg'
import testimonial2 from './assets/images/testimonial-2.jpg'
import testimonial3 from './assets/images/testimonial-3.jpg'
function About() {
    return (
        <div className={style.about}>


            <div className={style.aboutHero}>
                <div className={style.aboutHeroOverlay}>
                    <div className={style.aboutHeroImage}>

                    </div>
                </div>
                <div className={style.aboutHeroText}>
                    <div className={style.aboutHeroTextInner}>
                        <h3>About</h3>
                        <p><Link className={style.routerLink} to={'/'}><FaHome /></Link> <FaAngleRight /> <Link className={style.routerLink} to={'/about'}>About</Link></p>
                    </div>
                </div>
            </div>




            {/* ourStory */}

            <div className={style.ourStory}>
                <div className={style.ourStoryInner}>

                    <div className={style.ourStoryBox} id={style.text1}>
                        <div className={style.line}></div>
                        <h3>Our Story</h3>
                        <p>Why we started it?</p>
                    </div>

                    <div className={style.ourStoryBox} id={style.text2}>
                        <p>Sed volutpat interdum odio, id pulvinar leo vulputate et. Phasellus accumsan sapien sed sagittis ultricies. Quisque ac massa eu urna tincidunt efficitur vitae ut orci. Cras nec fermentum sem. Pellentesque mollis justo enim, id lobortis orci semper ut.</p>
                        <p>Phasellus hendrerit risus a libero porta hendrerit. Aenean sed sem pharetra, laoreet eros eget, lobortis odio. In vitae sodales orci. Etiam dictum quam purus. Donec pharetra imperdiet elit, non placerat nulla egestas et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque in quam arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla venenatis, turpis in dapibus auctor, libero urna sagittis quam, quis tristique nulla ipsum ac tortor. Nunc nulla nisi, convallis vel turpis at, facilisis tempus sem. Sed ut ex dictum felis sagittis efficitur vitae non lacus.</p>
                    </div>

                </div>

            </div>



            {/* Who */}

            <div className={style.who}>
                <div className={style.whoIntroText}>
                    <h3>Who We Are?</h3>
                    <div className={style.star}>
                        <hr />
                        <FaStar className={style.whoIntroTextIcon} />
                        <hr />
                    </div>
                </div>

                <div className={style.whoInner}>
                    <div className={style.whoBox}>
                        <img src={male} alt="" />
                        <p>Curabitur vel posuere tellus. Nullam mollis interdum erat sit amet semper. Ut nec fringilla lorem. Donec ac mattis nibh.</p>

                        <h3>Robert</h3>
                    </div>

                    <div className={style.whoBox}>
                        <img src={female} alt="" />
                        <p>Curabitur vel posuere tellus. Nullam mollis interdum erat sit amet semper. Ut nec fringilla lorem. Donec ac mattis nibh.</p>
                        <h3>Jeannine</h3>
                    </div>

                </div>
            </div>



            {/* pricing */}

            <div className={style.pricing}>
                <div className={style.pricingInner}>
                    <div className={style.pricingBox} id={style.standard}>
                        <h3>Standard</h3>
                        <h5>$59 / month</h5>
                        <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat.</p>

                        <div className={style.checkmarks}>
                            <p><FaCheck className={style.pricingIcon} /> Integer pulvinar at</p>
                            <p><FaCheck className={style.pricingIcon} /> Nullam mollis interdum</p>
                            <p><FaCheck className={style.pricingIcon} /> Suscipit sed erat</p>
                            <p><FaCheck className={style.pricingIcon} /> Feugiat mauris molestie</p>
                        </div>
                        <Link><button>SIGN UP</button></Link>
                    </div>
                    <div className={style.pricingBox} id={style.premium}>
                        <h3>Premium</h3>
                        <h5>$99 / month</h5>
                        <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat.</p>

                        <div className={style.checkmarks}>
                            <p><FaCheck className={style.pricingIcon} /> Integer pulvinar at</p>
                            <p><FaCheck className={style.pricingIcon} /> Nullam mollis interdum</p>
                            <p><FaCheck className={style.pricingIcon} /> Suscipit sed erat</p>
                            <p><FaCheck className={style.pricingIcon} /> Feugiat mauris molestie</p>
                        </div>
                        <Link><button>SIGN UP</button></Link>

                    </div>
                    <div className={style.pricingBox} id={style.grab}>
                        <img src={pricingDiscount} alt="" />
                        <h3>Grab New Year's Offer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat. Integer pulvinar at eros at faucibus.</p>

                        <div className={style.star}>
                            <hr />
                            <FaStar className={style.pricingBoxIcon} />
                            <hr />

                        </div>
                        <Link><button>Grab Now</button></Link>
                    </div>
                </div>


            </div>




            {/* testimonial */}
            <div className={style.testimonial}>
                <div className={style.testimonialIntroText}>
                    <h3>Testimonials</h3>
                    <div className={style.star}>
                        <hr />
                        <FaStar className={style.testimonialIntroTextIcon} />
                        <hr />
                    </div>
                </div>

                <div className={style.testimonialInner}>
                    <div className={style.testimonialBox}>
                        <p><em>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</em></p>
                        <div className={style.testimonialProfile}>
                            <img src={testimonial1} alt="" />
                            <div className={style.testimonialProfileText}>
                                <h3>Emily</h3>
                                <p>Financial Adviser</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.testimonialBox}>
                        <p><em>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</em></p>
                        <div className={style.testimonialProfile}>
                            <img src={testimonial2} alt="" />
                            <div className={style.testimonialProfileText}>
                                <h3>Jonathan</h3>
                                <p>Manager</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.testimonialBox}>
                        <p><em>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</em></p>
                        <div className={style.testimonialProfile}>
                            <img src={testimonial3} alt="" />
                            <div className={style.testimonialProfileText}>
                                <h3>Christine</h3>
                                <p>UI / UX Developer</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default About