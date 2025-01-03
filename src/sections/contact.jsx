import ContactForm from "../components/contactForm"
import DashIcon from '../assets/dash.svg'

function Contact() {
    return (
        <section id="contact" className="px-6 md:px-10 lg:px-14 xl:px-[120px] mt-[120px] md:mt-[200px] mb-10 md:mb-20 xl:mb-[110px] 2xl:mb-[150px]">
            <div className="flex justify-start items-center gap-4 md:gap-5 lg:gap-6 2xl:gap-7 mb-6 md:mb-10 2xl:mb-12">
                <img src={DashIcon} alt="" className="w-6 md:w-7 lg:w-8 2xl:w-9" />
                <h2 className="font-bold font-cabin tracking-[3%] leading-[120%] text-xl md:text-[26px] lg:text-3xl 2xl:text-4xl">Get in touch</h2>
            </div> 
            <div className="md:pl-12 lg:pl-14 xl:px-14">
                <p className="font-satoshi text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-[1.35] font-normal w-[94%] md:w-full xl:w-[96%] mb-6 md:mb-10 lg:mb-14 xl:mb-20">Got a project that needs a creative touch? Whether it&apos;s a fresh concept or refining what you have, let&apos;s team up to create something extraordinary. Reach out, I&apos;d love to hear from you!</p>
                <ContactForm />
            </div>
        </section>)
}

export default Contact