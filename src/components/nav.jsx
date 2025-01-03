import EmailIcon from '../assets/email.svg'
function NavBar() {
    return (
        <div className='z-10 rounded-[15px] justify-center fixed bottom-3 2xl:bottom-14 left-1/2 -translate-x-1/2 p-px max-lg:hidden bg-gradient-to-tl from-[#00000080] from-19.29% to-[#FFFFFF80] to-97.47%'>
            <div className="bg-black rounded-[15px] p-0">
                <nav className='bg-[#FFFFFF33] flex px-14 py-[13px] gap-10 items-center justify-center rounded-[15px]'>
                    <ul className='flex gap-8 items-center font-medium font-cabin lg:text-sm'>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#projects">Project</a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                    </ul>
                    <button className="flex gap-2 bg-brand py-[0.625rem] px-6 rounded-lg font-medium font-cabin text-sm">
                        Email  me
                        <img src={EmailIcon} alt="email icon" className='w-6 h-6' />
                    </button>
                </nav>
            </div>
        </div>
    )
}

export default NavBar