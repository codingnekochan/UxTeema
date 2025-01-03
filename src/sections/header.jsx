import ActiveIcon from '../assets/active.svg'
import TwitterIcon from '../assets/twitter.svg'
import DribbbleIcon from '../assets/dribble.svg'
import LinkedinIcon from '../assets/linkedin.svg'
import ArrowLeft from '../assets/arrow-left.svg'
import PfpIcon from '../assets/pfp.svg'
import MenuIcon from '../assets/menu.svg'
import DotIcon from '../assets/pink-dot.svg'
import NavBar from '../components/nav'

function Header({ ZeeInfo }) {
    return (
        <header id='home' className='relative h-[100vh] flex justify-center items-center'>
            <NavBar />
            <div className='z-10 bg-black flex justify-between fixed w-full min-[1920px]:w-[75%] min-[3000px]:w-[30%] top-0 p-6 md:px-10 lg:pt-4  lg:px-[52px]'>
                <div>
                    <img src={ActiveIcon} alt="" />
                </div>
                <div className='max-lg:hidden flex  justify-center items-center gap-4'>
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
                <button className='lg:hidden'>
                    <img src={MenuIcon} alt="tap to open menu" className='w-7' />
                </button>
            </div>
            <section id='intro' className=' flex flex-col justify-center items-center'>
                <div className='mb-8 md:mb-10 lg:mb-8'>
                    <img src={PfpIcon} alt="avatar for portfolio website" className='w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-20 lg:h-20 2xl:w-[100px] 2xl:h-[100px] ' />
                </div>
                <div className='mb-6 text-center font-cabin tracking-[3.1%] leading-[120%] text-base md:text-lg lg:text-[25px] 2xl:text-3xl w-[342px] md:w-[460px] lg:w-[600px] 2xl:w-[800px]'>
                    {/* 342, 468 */}
                    <h1>
                        {ZeeInfo.name}
                    </h1>
                    <p className='text-center '>
                        <span className='max-md:block'>Welcome to my little corner of the internet,{' '}</span>
                        <span className='max-md:block'>where I bring creativity to life through {' '}</span>
                        <span className='max-md:block'>designs that are as functional as {' '} </span>
                        <span className='max-md:block'>they are beautiful.</span>
                    </p>
                </div>
                <div className='flex gap-2 md:gap-4 max-md:w-[206px] font-medium flex-wrap text-cabin text-xs 2xl:text-base text-gray1 justify-center items-center tracking-[3%] leading-[120%]'>
                    <p className=''> Product design</p>
                    <img src={DotIcon} alt="" />
                    <p className=''> UI/UX design</p>
                    <img src={DotIcon} alt="" className='max-md:hidden' />
                    <p className=''> UX research</p>

                </div>
                <div className="mt-6 md:mt-10 lg:mt-8 max-lg:rounded-[5px] max-lg:p-px max-lg:bg-gradient-to-br from-55.31% from-[#ffffff80]  to-[#00000080] to-95.82%">
                    <div className='bg-black rounded-[5px]'>
                        <button className='flex rounded-[5px] justify-center items-center text-[10px] gap-2 lg:text-xs 2xl:text-lg tracking-[3%] max-lg:bg-[#FFFFFF33] py-[10px] px-6 md:py-3 md:px-[30px] lg:p-0 font-medium font-cabin '>
                            Download CV
                            <img src={ArrowLeft} alt="" className='max-lg:hidden' />
                        </button>
                    </div>
                </div>
            </section>
        </header>)
}

export default Header