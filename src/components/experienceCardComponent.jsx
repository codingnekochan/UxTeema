import PropTypes from 'prop-types'
import ArrowUp from '../assets/arrow-up.svg'
function ExperienceCardComponent({ companyName, jobRole, links }) {
    return (
        <>
            {companyName &&
                <div className='mb-14 last:mb-0'>
                    <div className='text-sm md:text-base xl:text-xl font-cabin font-regular tracking-[3%] leading-[120%] text-gray4 mb-6'>
                        <h4 className='text-nowrap italic inline text-white font-bold'>{companyName && `${companyName} :`}</h4>
                        <p className='inline'>
                            {' '}  {jobRole}
                        </p>
                    </div>
                    <div className='flex gap-6 md:gap-10 2xl:gap-12 italic items-center font-cabin tracking-[3%] leading-[120%]'>
                        {
                            links?.map((link) => {
                                return <a key={link.id} href={link.LinkURL} className='flex gap-2 text-[#FFFFFFB2] text-sm md:text-base 2xl:text-lg items-center'>
                                    {link.LinkName}
                                    <img src={ArrowUp} alt="" />
                                </a>
                            })
                        }

                    </div>
                </div>
            }
        </>
    )
}
ExperienceCardComponent.propTypes = {
    companyName: PropTypes.string,
    jobRole: PropTypes.string,
    links: PropTypes.array,
}
export default ExperienceCardComponent