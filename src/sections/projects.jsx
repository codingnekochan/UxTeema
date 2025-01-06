import ProjectCardComponent from "../components/projectCardComponent"
import DashIcon from '../assets/dash.svg'
function ProjectsSection({ ZeeInfo }) {
    return (
        <section id='projects' className="px-6 md:px-10 lg:px-14 xl:px-[120px] mt-[200px]">
            <div className="flex justify-start items-center gap-4 md:gap-5 lg:gap-6 2xl:gap-7 mb-6 md:mb-10 2xl:mb-12">
                <img src={DashIcon} alt="" className="w-6 md:w-7 lg:w-8 2xl:w-9" />
                <h2 className="font-bold font-cabin tracking-[3%] leading-[120%] text-xl md:text-[26px]  lg:text-3xl 2xl:text-4xl">Project</h2>
            </div>
            <div className="project-list grid grid-cols-1 lg:grid-cols-2 gap-10 md:px-[52px] xl:px-14 ">
                {
                    ZeeInfo.projects.map((project, index) => {
                        return <ProjectCardComponent key={index*2} projectName={project.projectName} projectDetails={project.projectDetails} projectTypes={project.projectTypes} liveLink={project.liveLink} liveLinkName={project.liveLinkName} designLink={project.designLink} designLinkName={project.designLinkName}/>
                    })
                }
            </div>

        </section>)
}

export default ProjectsSection