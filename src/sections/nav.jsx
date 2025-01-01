import EmailIcon from '../assets/email.svg'
function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Project</a>
                </li>
                <li>
                    <a href="">Experience</a>
                </li>
            </ul>
            <button className="">
                Email Me
                <img src={EmailIcon} alt="" />
            </button>
        </nav>
    )
}

export default NavBar