import ArrowUp from '../assets/arrow-up.svg'
import ShowingIcon from '../assets/showing.svg'
import HidingIcon from '../assets/hiding.svg'
import PropTypes from 'prop-types'
function ProjectCardComponent({
    projectName,
    projectTypes,
    projectDetails,
    links,
    thumbnail,
    projectCardRef,
    projectDetailsRef,
    handleShowDetails
}) {

    return (
        <div
            onClick={handleShowDetails}
            ref={projectCardRef}
            tabIndex={0}
            className='flip-card h-[224px] md:h-[444px] 2xl:h-[500px] rounded-[20px] relative'>
            <div
                className=" flip-card-inner h-full bg-gradient-to-br from-55.31% from-[#ffffff80]  to-[#00000080] to-95.82% p-px 2xl:p-[2px] min-[3000px]:p-[3px] rounded-[20px] relative"
            >
                <div style={{ backgroundImage: `url(https://our-portfolio-backend.fly.dev${thumbnail})`}} className={`flip-card-front bg-center h-full rounded-[20px] bg-[url('https://our-portfolio-backend.fly.dev${thumbnail}')] bg-no-repeat bg-cover`}>
                    <div className='h-full p-6 md:p-10 flex flex-col justify-between rounded-[20px]'>
                        <div className=''>
                            <div className='flex gap-4 md:gap-6 xl:gap-4 justify-start items-center font-cabin mb-4 md:mb-6 lg:mb-4 2xl:mb-6'>
                                <h3 className='font-semibold lg:font-bold text-base md:text-2xl xl:text-[26px] tracking-[3%] leading-[120%]'>{projectName}</h3>
                                <div className='flex gap-2'>
                                    {projectTypes?.map((type) => {
                                        return (
                                            <span
                                                key={type.documentId}
                                                className='capitalize text-nowrap text-[8px] md:text-[10px] xl:text-xs  tracking-[3%] leading-[120%] font-semibold text-gray3'>
                                                {type.type}{' '}
                                            </span>
                                        )
                                    })}
                                </div>
                                <div className='absolute top-6 right-6 md:top-12 md:right-8  lg:translate-x-2 xl:translate-x-0 xl:right-10'>
                                    <img src={HidingIcon} />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center italic items-center font-cabin tracking-[3%] leading-[120%] self-end gap-8 md:gap-6 xl:gap-10'>
                            {
                                links?.map((link) => {
                                    return (
                                        <a key={link.id} href={link.LinkURL} className='flex gap-2 text-[#FFFFFFB2] text-sm md:text-base 2xl:text-lg items-center'>
                                            {link.LinkName}
                                            <img src={ArrowUp} alt="" className='w-[18px] md:w-6 2xl:w-7' />
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(https://our-portfolio-backend.fly.dev${thumbnail})` }} className={`flip-card-back bg-center h-full rounded-[20px] bg-no-repeat bg-cover`}>
                    <div className={`h-full p-6 md:p-10 flex flex-col justify-between bg-[#000000de] rounded-[20px]`}>
                        <div className='relative'>
                            <div className='flex gap-4 md:gap-6 xl:gap-4 justify-start items-center font-cabin mb-4 md:mb-6 lg:mb-4 2xl:mb-6'>
                                <h3 className='font-semibold lg:font-bold text-base md:text-2xl xl:text-[26px] tracking-[3%] leading-[120%]'>{projectName}</h3>
                                <div className='flex gap-2'>
                                    {projectTypes?.map((type) => {
                                        return (
                                            <span
                                                key={type.documentId}
                                                className='capitalize text-nowrap text-[8px] md:text-[10px] xl:text-xs  tracking-[3%] leading-[120%] font-semibold text-gray3'>
                                                {type.type}{' '}
                                            </span>
                                        )
                                    })}
                                </div>
                                <div className='absolute right-0'>
                                    <img src={ShowingIcon} />
                                </div>
                            </div>
                            <div
                                ref={projectDetailsRef}
                            >
                                <p className='font-cabin font-regular tracking-[3%] leading-[120%] text-gray2 text-xs md:text-lg lg:text-sm 2xl:text-base'>
                                    {projectDetails}
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-center italic items-center font-cabin tracking-[3%] leading-[120%] self-end gap-8 md:gap-6 xl:gap-10'>
                            {
                                links?.map((link) => {
                                    return (
                                        <a key={link.id} href={link.LinkURL} className='flex gap-2 text-[#FFFFFFB2] text-sm md:text-base 2xl:text-lg items-center'>
                                            {link.LinkName}
                                            <img src={ArrowUp} alt="" className='w-[18px] md:w-6 2xl:w-7' />
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

ProjectCardComponent.propTypes = {
    projectName: PropTypes.string,
    projectTypes: PropTypes.array,
    projectDetails: PropTypes.string,
    links: PropTypes.array,
    projectCardRef: PropTypes.any,
    projectDetailsRef: PropTypes.any,
    detailsIsShowing: PropTypes.bool,
    handleShowDetails: PropTypes.func
}

export default ProjectCardComponent