import ProjectCardComponent from "../components/projectCardComponent"
function ProjectsSection({ ZeeInfo }) {
    return (
        <section id='projects'>
            <h2>Projects</h2>
            <div className="project-list">
                {
                    ZeeInfo.projects.map((project, index) => {
                        return <ProjectCardComponent key={index*2} projectName={project.projectName} projectDetails={project.projectDetails} projectTypes={project.projectTypes} liveLink={project.liveLink} liveLinkName={project.liveLinkName} designLink={project.designLink} designLinkName={project.designLinkName}/>
                    })
                }
            </div>

        </section>)
}

export default ProjectsSection