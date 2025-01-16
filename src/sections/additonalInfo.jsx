import Tools from '../assets/tools.svg'
import Behance from '../assets/behance.svg'
import Awwwards from '../assets/awwwards.svg'
import Dribbble from '../assets/dribbble.svg'
import Pinterest from '../assets/pinterest.svg'
import Smashing from '../assets/smashing.svg'
import Designmodo from '../assets/designmodo.svg'

function AdditionalInfoSection() {
    return (

        <section id="additional-info" className='mt-[117px] md:mt-[200px]'>
            <section id="design-thinking" className='flex flex-col items-center px-6'>
                <h2 className='mb-6 md:mb-10 font-cabin font-semibold text-base md:text-xl xl:text-[26px] 2xl:text-[28px] tracking-[3%] leading-[120%] text-center'>My Design Thinking Process</h2>
                <p className="bg-black font-cabin font-normal text-base md:text-lg lg:text-xl 2xl:text-2xl text-center leading-[120%] tracking-[3%] text-gray4 md:w-[468px] lg:w-[568px] xl:w-[714px] 2xl:w-[900px]">
                    <span className='max-lg:block'>I believe in empathy-driven design, starting {' '} <span className='max-md:block'>every project by deeply understanding {' '} </span>the users and their pain points.{' '}</span>
                    <span className='max-lg:block md:w-[450px]'>
                        My process involves thorough {' '}
                        <span className='bg-[url("/src/assets/text-bg.svg")] bg-contain bg-blend-screen p-1'>research, wireframing, prototyping, and usability  testing {' '} </span>
                        <span className='max-md:block'>
                            to ensure designs not only look good but are {' '}
                        </span>also functional and accessible.
                    </span>
                    <span className='block'>I thrive on collaboration and iteration, knowing that the best designs come from continual feedback and improvement.</span>
                </p>
            </section>
            <section id="tools" className='flex flex-col justify-center items-center mt-[120px] md:mt-[200px] px-6'>
                <h2 className='font-semibold font-cabin tracking-[3%] leading-[120%] text-base md:text-xl lg:text-[26px] 2xl:text-[28px] mb-6 md:mb-10'>Tools I work with</h2>
                <img src={Tools} alt="" className='w-[272px] h-[50px] md:w-[384px] md:h-[60pxo] lg:w-[424px] lg:h-[70px] 2xl:w-[586px] 2xl:h-20' />
            </section>
            <section id='inspo-hub' className='text-center mt-[200px]'>
                <h2 className='text-center font-semibold font-cabin tracking-[3%] leading-[120%] text-base md:text-xl lg:text-[26px] 2xl:text-[28px] mb-6 md:mb-10'>My Inspo Hub</h2>
                <div className='flex justify-center items-center overflow-x-auto gap-4 md:gap-10 xl:gap-24 2xl:gap-[100px] py-6 md:py-8 2xl:py-10 bg-white saturate-150'>
                    <img src={Behance} alt="" className='w-[100px] md:w-[110px] lg:w-[130px] xl:w-[160px] 2xl:w-[210px]' />
                    <img src={Awwwards} alt="" className='w-[90px] md:w-[100px] lg:w-[120px] xl:w-[150px] 2xl:w-[200px]' />
                    <img src={Pinterest} alt="" className='w-[90px] md:w-[100px] lg:w-[120px] xl:w-[150px] 2xl:w-[200px]' />
                    <img src={Dribbble} alt="" className='w-[90px] md:w-[100px] lg:w-[120px] xl:w-[150px] 2xl:w-[200px]' />
                    <img src={Smashing} alt="" className='w-[90px] md:w-[100px] lg:w-[120px] xl:w-[150px] 2xl:w-[200px]' />
                    <img src={Designmodo} alt="" className='w-[90px] md:w-[100px] lg:w-[120px] xl:w-[150px] 2xl:w-[200px]' />
                </div>
            </section>
        </section>)
}

export default AdditionalInfoSection