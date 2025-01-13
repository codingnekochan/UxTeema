import ArrowUp from '../assets/arrow-up.svg'
import ShowingIcon from '../assets/showing.svg'
import HidingIcon from '../assets/hiding.svg'
import PropTypes from 'prop-types'
import { useState } from 'react'
function ProjectCardComponent({
    projectName,
    projectTypes,
    projectDetails,
    liveLinkName,
    liveLink,
    designLinkName,
    designLink,
    projectCardRef,
    projectDetailsRef,
}) {
    const [detailsIsShowing, setDetailsIsShowing] = useState(false)
    const handleShowDetails = () => {
        setDetailsIsShowing(!detailsIsShowing)
    }
    return (
        <div
            onMouseEnter={handleShowDetails}
            onMouseLeave={handleShowDetails}
            ref={projectCardRef}
            className="h-[224px] md:h-[444px] 2xl:h-[500px]  bg-gradient-to-br from-55.31% from-[#ffffff80]  to-[#00000080] to-95.82% p-px 2xl:p-[2px] min-[3000px]:p-[3px] rounded-[20px] relative"
        >
            <div className='bg-center h-full rounded-[20px] bg-[url("/src/assets/dark.svg")] bg-no-repeat bg-cover'>
                <div className={`h-full p-6 md:p-10 flex flex-col justify-between ${detailsIsShowing ? ' bg-[#000000de]' : ''} rounded-[20px]`}>
                    <div className='relative'>
                        <div className='flex gap-4 md:gap-6 xl:gap-4 justify-start items-center font-cabin mb-4 md:mb-6 lg:mb-4 2xl:mb-6'>
                            <h3 className='font-semibold lg:font-bold text-base md:text-2xl xl:text-[26px] tracking-[3%] leading-[120%]'>{projectName}</h3>
                            <div className='flex gap-2'>
                                {projectTypes.map((type, index) => {
                                    return (
                                        <span
                                            key={index * 100}
                                            className='capitalize text-nowrap text-[8px] md:text-[10px] xl:text-xs  tracking-[3%] leading-[120%] font-semibold text-gray3'>
                                            {type}{' '}
                                        </span>
                                    )
                                })}
                            </div>
                            <div className='absolute right-0'>
                             <img src={HidingIcon} />
                            </div>
                        </div>
                        <div
                            ref={projectDetailsRef}
                            className={detailsIsShowing ? '' : 'hidden'}
                        >
                            <p className='font-cabin font-regular tracking-[3%] leading-[120%] text-gray2 text-xs md:text-lg lg:text-sm 2xl:text-base'>
                                {projectDetails}
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center italic items-center font-cabin tracking-[3%] leading-[120%] self-end gap-8 md:gap-6 xl:gap-10'>
                        <a href={liveLink} className='flex gap-2 text-[#FFFFFFB2] text-sm md:text-base 2xl:text-lg items-center'>
                            {liveLinkName}
                            <img src={ArrowUp} alt="" className='w-[18px] md:w-6 2xl:w-7' />
                        </a>
                        <a href={designLink} className='flex gap-2 text-[#FFFFFFB2] text-sm md:text-base 2xl:text-lg items-center'>
                            {designLinkName}
                            <img src={ArrowUp} alt="" className='w-[18px] md:w-6 2xl:w-7' />
                        </a>
                    </div>
                </div>
            </div>
        </div>)
}

ProjectCardComponent.propTypes = {
    projectName: PropTypes.string,
    projectTypes: PropTypes.array,
    projectDetails: PropTypes.string,
    liveLink: PropTypes.string,
    liveLinkName: PropTypes.string,
    designLink: PropTypes.string,
    designLinkName: PropTypes.string,
    projectCardRef: PropTypes.any,
    projectDetailsRef: PropTypes.any,
    detailsIsShowing: PropTypes.bool,
    handleShowDetails: PropTypes.func
}

export default ProjectCardComponent