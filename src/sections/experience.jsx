import ExperienceCardComponent from "../components/experienceCardComponent"

function Experience({ZeeInfo}) {
    return (
        <section id="experience">
            <h2>Experience</h2>
            {
                ZeeInfo.experiences.map((experience,index)=>{
                    return <section key={index*3}>
                        <div>
                            <h3 className="capitalize">{experience.type}</h3>
                            <p>
                                2024 - Present {experience.duration}
                            </p>
                        </div>
                        <div>
                            {
                                experience.experience.map((experience,index)=>{
                                    return <ExperienceCardComponent key={index*7} companyName={experience.companyName} jobRole={experience.jobRole} liveLink={experience.liveLink} liveLinkName={experience.liveLinkName} designLink={experience.designLink} designLinkName={experience.designLinkName} />

                                })
                            }
                            <ExperienceCardComponent />
                        </div>
                    </section>
                })
            }
          
        </section>
    )
}

export default Experience