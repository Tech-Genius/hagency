import style from './assets/css/Home.module.css'
import { Link } from 'react-router-dom'
import { BsArrowUpRightCircle } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaJournalWhills } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import letwork from './assets/images/hagency-3.jpg'
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
                        <img src={letwork} alt=""/>
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

        </div>
    )
}
export default Home