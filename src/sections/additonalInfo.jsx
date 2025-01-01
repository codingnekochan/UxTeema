import Tools from '../assets/tools.svg'
import Behance from '../assets/behance.png'
import Awwwards from '../assets/awwards.png'
import Dribbble from '../assets/dribbble.png'
import Pinterest from '../assets/pinterest.png'
import Smashing from '../assets/smashing.png'
import Designmodo from '../assets/designmodo.png'

function AdditionalInfoSection({ ZeeInfo }) {
    return (

        <section id="additional-info">
            <section id="design-thinking">
                <h2>{ZeeInfo.designThinking.heading}</h2>
                <p className="after:content-[url('src/assets/text-bg.svg')]">
                    {ZeeInfo.designThinking.details}
                </p>
            </section>
            <section id="tools" className=''>
                <h2>Tools I work with</h2>
                <img src={Tools} alt="" />
            </section>
            <section id='inspo-hub'>
                <div className='flex'>
                    <img src={Behance} alt="" />
                    <img src={Awwwards} alt="" />
                    <img src={Pinterest} alt="" />
                    <img src={Dribbble} alt="" />
                    <img src={Smashing} alt="" />
                    <img src={Designmodo} alt="" />
                </div>
            </section>
        </section>)
}

export default AdditionalInfoSection