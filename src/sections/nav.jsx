import EmailIcon from '../assets/email.svg'
import PropTypes from 'prop-types'
function NavBar({ isMenuOpen, menuRef, toggleNavigationMenu }) {
    return (
        <>
            <div ref={menuRef} className={` z-30 lg:rounded-[15px] justify-center fixed max-lg:top-0 max-lg:right-0 rounded-l-lg lg:bottom-3 2xl:bottom-14 lg:left-1/2 lg:-translate-x-1/2 lg:p-px ${isMenuOpen ? 'block' : 'max-lg:hidden'} max-lg:bg-none lg:bg-gradient-to-tl from-[#00000080] from-19.29% to-[#FFFFFF80] to-97.47%`}>
                <div className="bg-black lg:rounded-[15px] p-0 max-lg:bg-none">
                    <nav className='bg-[#81305759] lg:bg-[#FFFFFF33] lg:flex pl-6 pr-16 pt-6 pb-12 md:pb-10 lg:px-14 lg:py-[13px] gap-10 items-center justify-center rounded-l-lg lg:rounded-[15px]'>
                        <ul className='lg:flex lg:gap-8 justify-center items-center font-medium text-base md:text-lg font-cabin lg:text-sm'>
                            <li className='max-lg:mb-[13px]'>
                                <button onClick={toggleNavigationMenu}><a href="#">Home</a></button>
                            </li>
                            <li className='max-lg:mb-[13px]'>
                                <button onClick={toggleNavigationMenu}><a href="#projects">Project</a></button>
                            </li>
                            <li className='max-lg:mb-[13px]'>
                                <button onClick={toggleNavigationMenu}><a href="#experience">Experience</a></button>
                            </li>
                            <li className="lg:hidden mb-[13px]">
                                <button onClick={toggleNavigationMenu}><a href="">LinkedIn</a></button>
                            </li>
                            <li className="lg:hidden mb-[13px]">
                                <button onClick={toggleNavigationMenu}><a href="">X</a></button>
                            </li>
                            <li className="lg:hidden mb-[13px]">
                                <button onClick={toggleNavigationMenu}><a href="">Dribble</a></button>
                            </li>
                            <li className='max-md:hidden lg:hidden'>
                                <button onClick={toggleNavigationMenu}><a href="">Contact me</a></button>
                            </li>

                        </ul>
                        <button className="max-lg:hidden lg:flex gap-2 bg-brand lg:py-[0.625rem] lg:px-6 lg:rounded-lg font-medium font-cabin text-sm">
                            <span className='max-lg:hidden'>Email  me</span>
                            <img src={EmailIcon} alt="email icon" className='w-6 h-6' />
                        </button>
                    </nav>
                </div>
            </div>
            <div className='z-40  lg:hidden max-lg:fixed max-lg:bottom-0  max-lg:right-6 rounded-full p-px bg-gradient-to-tl from-[#00000080] from-19.29% to-[#FFFFFF80] to-97.47%'>
                <button className='bg-brand p-4 md:p-6 rounded-full'>
                    <img src={EmailIcon} alt="email icon" className='w-8 h-8 md:w-11 md:h-11' />
                </button>
            </div>
        </>
    )
}
NavBar.propTypes = {
    isMenuOpen : PropTypes.bool,
    menuRef : PropTypes.any,
    toggleNavigationMenu: PropTypes.func
}
export default NavBar