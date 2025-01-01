import ArrowUp from '../assets/arrow-up.svg'
function ExperienceCardComponent({ companyName, jobRole, liveLink, liveLinkName, designLink, designLinkName }) {
    return (
        <div className='border'>
            <div className='flex'>
                <h4 className='text-nowrap italic'> {companyName}:</h4>
                <p>
                    {jobRole}
                </p>
            </div>
            <div className='flex'>
                <a href={liveLink}>
                    {liveLinkName}
                    <img src={ArrowUp} alt="" />
                </a>
                <a href={designLink}>
                    {designLinkName}
                    <img src={ArrowUp} alt="" />
                </a>
            </div>

        </div>)
}

export default ExperienceCardComponent