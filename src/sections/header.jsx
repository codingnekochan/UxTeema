import ActiveIcon from '../assets/active.svg'
import TwitterIcon from '../assets/twitter.svg'
import DribbbleIcon from '../assets/dribble.svg'
import LinkedinIcon from '../assets/linkedin.svg'
import ArrowLeft from '../assets/arrow-left.svg'
import PfpIcon from '../assets/pfp.svg'

function Header({ZeeInfo}) {
    return (
        <header id='home'>
            <div>
                <div>
                    <img src={ActiveIcon} alt="" />
                </div>
                <div>
                    <a href="">
                        <img src={TwitterIcon} alt="" />
                    </a>
                    <a href="">
                        <img src={DribbbleIcon} alt="" />
                    </a>
                    <a href="">
                        <img src={LinkedinIcon} alt="" />
                    </a>
                </div>
            </div>
            <section id='intro'>
                <div>
                    <img src={PfpIcon} alt="" />
                </div>
                <div>
                    <h1>                        
                        {ZeeInfo.name}
                    </h1>
                    <p>
                        {ZeeInfo.intro}
                    </p>
                </div>
                <div>
                    {
                        ZeeInfo.specialization.map((speciality, index) => {
                            return <p key={index} className='relative after:absolute after:content-[url("src/assets/pink-dot.svg")] after:bottom-1/2 after:translate-y-1/2'>{speciality}</p>
                        })
                    }
                </div>
                <div className>
                    <a href="">
                        Download CV
                        <img src={ArrowLeft} alt="" />
                    </a>
                </div>
            </section>
        </header>)
}

export default Header