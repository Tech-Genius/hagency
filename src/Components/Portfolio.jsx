import style from './assets/css/Portfolio.module.css'
import { FaHome } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { Projects } from './Data/ProjectData.jsx'


function Portfolio() {
    return (
        <div className={style.portfolio}>


            <div className={style.portfolioHero}>
                <div className={style.portfolioHeroOverlay}>
                    <div className={style.portfolioHeroImage}>

                    </div>
                </div>
                <div className={style.portfolioHeroText}>
                    <div className={style.portfolioHeroTextInner}>
                        <h3>Portfolio</h3>
                        <p><Link className={style.routerLink} to={'/'}><FaHome /></Link> <FaAngleRight /> <Link className={style.routerLink} to={'/portfolio'}>Portfolio</Link></p>
                    </div>
                </div>
            </div>





            {/* latestProject */}

            <div className={style.latestProject}>
                <div className={style.latestProjectInner}>

                    <div className={style.latestProjectBox} id={style.text1}>
                        <div className={style.line}></div>
                        <h3>Latest Project</h3>
                        <p>How we help you succeed.</p>
                    </div>

                    <div className={style.latestProjectBox} id={style.text2}>
                        <p>Sed volutpat interdum odio, id pulvinar leo vulputate et. Phasellus accumsan sapien sed sagittis ultricies. Quisque ac massa eu urna tincidunt efficitur vitae ut orci. Cras nec fermentum sem. Pellentesque mollis justo enim, id lobortis orci semper ut.</p>
                        <p>Phasellus hendrerit risus a libero porta hendrerit. Aenean sed sem pharetra, laoreet eros eget, lobortis odio. In vitae sodales orci. Etiam dictum quam purus. Donec pharetra imperdiet elit, non placerat nulla egestas et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque in quam arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla venenatis, turpis in dapibus auctor, libero urna sagittis quam, quis tristique nulla ipsum ac tortor. Nunc nulla nisi, convallis vel turpis at, facilisis tempus sem. Sed ut ex dictum felis sagittis efficitur vitae non lacus.</p>
                    </div>

                </div>

            </div>


            {/* projects */}

            <div className={style.projects}>
                <div className={style.projectInner}>
                    {
                        Projects.map((project) => (
                            <div className={style.projectBox}>
                                <img src={project.image} alt="" />
                                <h3>{project.title}</h3>
                                <p>{project.tags}</p>

                            </div>
                        ))
                    }
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
export default Portfolio