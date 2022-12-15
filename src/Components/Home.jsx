import style from './assets/css/Home.module.css'
import { Link } from 'react-router-dom'
import { BsArrowUpRightCircle } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaJournalWhills } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import letwork from './assets/images/hagency-3.jpg'
import pricingDiscount from './assets/images/pricing.png'
import post1 from './assets/images/hagency-post-1.jpg'
import post2 from './assets/images/hagency-post-2.jpg'
import post3 from './assets/images/hagency-post-3.jpg'
function Home() {
    return (
        <div className={style.homepage}>
            {/* hero */}
            <div className={style.heroSection}>
                <div className={style.heroImageOverlay}>
                    <div className={style.heroImage}>

                    </div>
                </div>
                <div className={style.heroText}>
                    <div className={style.heroTextInner}>
                        <h3>Legal Management <br /> Consulting</h3>
                        <p>Curabitur vel posuere tellus. Nullam mollis interdum erat sit amet semper. Ut <br /> nec fringilla lorem. Donec ac mattis nibh. Praesent dui ex pharetra.</p>
                        <div className={style.heroTextButtons}>
                            <Link><button className={style.letTalk}>Let's Talk</button></Link>
                            <Link><button className={style.knowMore}>Know More</button></Link>
                        </div>
                    </div>
                </div>

            </div>


            {/* models */}
            <div className={style.models}>
                <div className={style.modelsInner}>
                    <div className={style.modelsBox}>
                        <BsArrowUpRightCircle className={style.modelsBoxIcon} />
                        <h3>MODELS</h3>
                        <p>Integer pulvinar at eros at faucibus. In auctor nec quam sit amet convallis. Donec dapibus nunc.</p>
                        <Link><button>Learn More</button></Link>
                    </div>
                    <div className={style.modelsBox}>
                        <BsArrowUpRightCircle className={style.modelsBoxIcon} />
                        <h3>FRAMEWORKS</h3>
                        <p>Integer pulvinar at eros at faucibus. In auctor nec quam sit amet convallis. Donec dapibus nunc.</p>
                        <Link><button>Learn More</button></Link>
                    </div>

                    <div className={style.modelsBox}>
                        <BsArrowUpRightCircle className={style.modelsBoxIcon} />
                        <h3>SYSTEM</h3>
                        <p>Integer pulvinar at eros at faucibus. In auctor nec quam sit amet convallis. Donec dapibus nunc.</p>
                        <Link><button>Learn More</button></Link>
                    </div>

                </div>

            </div>


            <div className={style.firstStep}>
                <div className={style.firstStepOverlay}>
                    <div className={style.firstStepImage}>

                    </div>
                </div>

                <div className={style.firstStepText}>
                    <div className={style.firstStepTextInner}>
                        <h3>The first step of solving any problem is to accept one's own accountability for creating it.</h3>
                        <h3 className={style.blue}>- Stan Slap</h3>
                    </div>
                </div>

            </div>


            {/* service */}

            <div className={style.services}>

                <div className={style.serviceIntroText}>
                    <h3>Our Services</h3>
                    <div className={style.star}>
                        <hr />
                        <FaStar className={style.serviceIntroTextIcon} />
                        <hr />
                    </div>
                </div>

                <div className={style.serviceInner}>
                    <div className={style.serviceBox}>
                        <FaJournalWhills className={style.serviceBoxIcon} />
                        <h3>STRATEGY <br /> DEVELOPMENT</h3>
                        <p>Phasellus hendrerit risus a libero porta hendrerit. Aenean sed sem pharetra laoreet.</p>
                    </div>
                    <div className={style.serviceBox}>
                        <FaDollarSign className={style.serviceBoxIcon} />
                        <h3>FINANCIAL <br /> EXPERTISE</h3>
                        <p>Phasellus hendrerit risus a libero porta hendrerit. Aenean sed sem pharetra laoreet.</p>
                    </div>
                    <div className={style.serviceBox}>
                        <BsArrowUpRightCircle className={style.serviceBoxIcon} />
                        <h3>BUSINESS <br /> CONSULTING</h3>
                        <p>Phasellus hendrerit risus a libero porta hendrerit. Aenean sed sem pharetra laoreet.</p>
                    </div>
                    <div className={style.serviceBox}>
                        <BsArrowUpRightCircle className={style.serviceBoxIcon} />
                        <h3>PROCESS <br /> ANALISYS</h3>
                        <p>Phasellus hendrerit risus a libero porta hendrerit. Aenean sed sem pharetra laoreet.</p>
                    </div>
                    <div className={style.serviceBox}>
                        <FaArrowUp className={style.serviceBoxIcon} />
                        <h3>BRAND <br /> STRATEGY</h3>
                        <p>Phasellus hendrerit risus a libero porta hendrerit. Aenean sed sem pharetra laoreet.</p>
                    </div>
                    <div className={style.serviceBox}>
                        <FaCode className={style.serviceBoxIcon} />
                        <h3>TECH <br /> IMPLEMENTATION</h3>
                        <p>Phasellus hendrerit risus a libero porta hendrerit. Aenean sed sem pharetra laoreet.</p>
                    </div>

                </div>

            </div>

            {/* powerPerformance */}

            <div className={style.powerPerformance}>
                <div className={style.powerPerformanceOverlay}>
                    <div className={style.powerPerformanceImage}>

                    </div>
                </div>

                <div className={style.powerPerformanceText}>
                    <div className={style.powerPerformanceTextInner}>
                        <hr />
                        <h3>We Power Performance</h3>
                        <p>Curabitur vel posuere tellus. Nullam mollis interdum erat sit amet semper. Ut nec <br /> fringilla lorem. Donec ac mattis nibh. Praesent dui ex pharetra.</p>

                    </div>
                </div>


            </div>


            {/* letwork */}

            <div className={style.letWork}>

                <div className={style.letWorkInner}>

                    <div className={style.letWorkBox} id={style.img}>
                        <img src={letwork} alt="" />
                    </div>

                    <div className={style.letWorkBox} id={style.text}>
                        <div className={style.letWorkBoxTextInner}>
                            <div className={style.line}></div>
                            <h3>Let's Work <br /> <span>Together</span></h3>
                            <p>Integer pulvinar at eros at faucibus. In auctor nec quam sit amet convallis. Donec dapibus nunc sit amet elementum semper. Morbi ac quam bibendum, consequat turpis rutrum, commodo lectus.</p>
                        </div>
                    </div>

                </div>

            </div>

            {/* changeManagement */}

            <div className={style.changeManagement}>
                <div className={style.changeManagementInner}>

                    <div className={style.changeManagementBox} id={style.text1}>
                        <div className={style.line}></div>
                        <h3>Change <br /> Management <br /> Strategy</h3>
                        <p>Operational Improvement Services.</p>
                    </div>

                    <div className={style.changeManagementBox} id={style.text2}>
                        <p>Sed volutpat interdum odio, id pulvinar leo vulputate et. Phasellus accumsan sapien sed sagittis ultricies. Quisque ac massa eu urna tincidunt efficitur vitae ut orci. Cras nec fermentum sem. Pellentesque mollis justo enim, id lobortis orci semper ut.</p>
                        <p>Phasellus hendrerit risus a libero porta hendrerit. Aenean sed sem pharetra, laoreet eros eget, lobortis odio. In vitae sodales orci. Etiam dictum quam purus. Donec pharetra imperdiet elit, non placerat nulla egestas et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque in quam arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla venenatis, turpis in dapibus auctor, libero urna sagittis quam, quis tristique nulla ipsum ac tortor. Nunc nulla nisi, convallis vel turpis at, facilisis tempus sem. Sed ut ex dictum felis sagittis efficitur vitae non lacus.</p>
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


            {/* blog */}

            <div className={style.blog}>
                <div className={style.blogIntroText}>
                    <h3>Our Dedicated Blog</h3>
                    <div className={style.star}>
                        <hr />
                        <FaStar className={style.blogIntroTextIcon} />
                        <hr />
                    </div>

                </div>
                <div className={style.blogInner}>
                    <div className={style.blogBox}>
                        <div className={style.blogImgNBtn}>
                            <img src={post1} alt="" />
                            <div className={style.blogBtn}>
                                <Link><button>Learn More</button></Link>
                            </div>
                        </div>
                        <h3>Velit a facilisis <br /> sagittis</h3>
                        <p>Vivamus aliquet eget ipsum non molestie. Nulla sollicitudin quam sit amet egestas auctor. Maecenas vel…</p>
                        <div className={style.blogFooter}>
                            <p><FaComment className={style.blogFooterIcon} /> 0 Comments</p>
                            <p><FaFolder className={style.blogFooterIcon} /> Banking</p>
                        </div>
                    </div>

                    <div className={style.blogBox}>
                        <div className={style.blogImgNBtn}>
                            <img src={post2} alt="" />
                            <div className={style.blogBtn}>
                                <Link><button>Learn More</button></Link>
                            </div>
                        </div>
                        <h3>Auctor a metus <br /> ut</h3>
                        <p>Vivamus aliquet eget ipsum non molestie. Nulla sollicitudin quam sit amet egestas auctor. Maecenas vel…</p>
                        <div className={style.blogFooter}>
                            <p><FaComment className={style.blogFooterIcon} /> 0 Comments</p>
                            <p><FaFolder className={style.blogFooterIcon} /> Banking</p>
                        </div>
                    </div>

                    <div className={style.blogBox}>
                        <div className={style.blogImgNBtn}>
                            <img src={post3} alt="" />
                            <div className={style.blogBtn}>
                                <Link><button>Learn More</button></Link>
                            </div>
                        </div>
                        <h3>Habitant morbi <br /> tristique</h3>
                        <p>Vivamus aliquet eget ipsum non molestie. Nulla sollicitudin quam sit amet egestas auctor. Maecenas vel…</p>
                        <div className={style.blogFooter}>
                            <p><FaComment className={style.blogFooterIcon} /> 0 Comments</p>
                            <p><FaFolder className={style.blogFooterIcon} /> Banking</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* work */}

            <div className={style.work}>
                <div className={style.workInner}>
                    <h3>Want to work with us?</h3>
                    <Link><button>SIGN UP NOW</button></Link>

                </div>

            </div>

        </div>
    )
}
export default Home