import ArrowUp from '../assets/arrow-up.svg'
function ProjectCardComponent({ projectName, projectTypes, projectDetails, liveLinkName, liveLink, designLinkName, designLink }) {
    return (
        <div className="border">
            <div>
                <h3>{projectName}</h3>
                <div>
                    {projectTypes.map((type, index) => {
                        return <span key={index * 100} className='capitalize'>{type}{' '}</span>
                    })}
                </div>
            </div>
            <div>
                <p>
                    {projectDetails}
                </p>
            </div>
            <div>
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

export default ProjectCardComponent