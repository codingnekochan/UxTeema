import ExperienceCardComponent from "../components/experienceCardComponent"
import DashIcon from '../assets/dash.svg'

function Experience({ ZeeInfo }) {
    return (
        <section id="experience" className="px-6 md:px-10 lg:px-14 xl:px-[120px] mt-[120px] md:mt-[200px]">
            <div className="flex justify-start items-center gap-4 md:gap-5 lg:gap-6 2xl:gap-7 mb-6 md:mb-10 2xl:mb-12">
                <img src={DashIcon} alt="" className="w-6 md:w-7 lg:w-8 2xl:w-9" />
                <h2 className="font-bold font-cabin tracking-[3%] leading-[120%] text-xl md:text-[26px]  lg:text-3xl 2xl:text-4xl">Experience</h2>
            </div>            {
                ZeeInfo.experiences.map((experience, index) => {
                    return <section key={index * 3} className=" md:pl-12 lg:pl-14 xl:px-14">
                        <div className="flex items-center gap-4 md:gap-8 xl:gap-10 font-medium font-cabin tracking-[3%] leading-[120%] mb-6 md:mb-10 lg:mb-6 2xl:mb-10">
                            <h3 className="capitalize text-base md:text-xl lg:text-2xl xl:text-3xl">{experience.type}</h3>
                            <p className="italic text-xs md:text-base lg:text-lg xl:text-2xl text-[#A3A3A3]">
                                {experience.duration}
                            </p>
                        </div>
                        <div>
                            {
                                experience.experience.map((experience, index) => {
                                    return <ExperienceCardComponent key={index * 7} companyName={experience?.companyName} jobRole={experience?.jobRole} liveLink={experience?.liveLink} liveLinkName={experience?.liveLinkName} designLink={experience?.designLink} designLinkName={experience?.designLinkName} />

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