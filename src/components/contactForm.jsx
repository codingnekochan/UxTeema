import PropTypes from 'prop-types'
import SendIcon from '../assets/send.svg'
import CustomInputComponent from './customInputComponent'
function ContactForm({
    handleSubmit,
    name,
    handleSetName,
    email,
    handleSetEmail,
    message,
    handleSetMessage }) {
    return (
        <form className="gap-10 lg:flex lg:items-end" onSubmit={handleSubmit}>
            <div className="lg:w-[83%] grid grid-cols-2 gap-10">
                <CustomInputComponent
                    label={"Your full name / Company name*"}
                    id={"name"}
                    placeholder={"Name"}
                    type={"text"}
                    gridSpan={"max-lg:col-span-full"}
                    value={name}
                    onChange={handleSetName}
                />

                <CustomInputComponent
                    label={"Email address*"}
                    id={"email"}
                    placeholder={"Email"}
                    type={"email"}
                    gridSpan={"max-lg:col-span-full"}
                    value={email}
                    onChange={handleSetEmail}
                />
                <div className="col-span-full">
                    <label htmlFor='message' className="text-base md:text-lg xl:text-xl">
                        Message
                    </label>
                    <br />
                    <textarea
                        placeholder="A few words"
                        name="message"
                        rows={5}
                        value={message}
                        onChange={handleSetMessage}
                        spellCheck={true}
                        className={`w-full h-[113px] md:h-[130px] xl:h-[228px] rounded-[10px] font-satoshi leading-[1.35] border border-[#64646480] bg-black mt-2 placeholder:text-[#9797974D] px-8 lg:mt-4 placeholder:text-xs md:placeholder:text-sm xl:placeholder:text-base 2xl:placeholder:text-lg py-3 md:py-5 lg:py-4 no-scrollbar`}
                        required
                    ></textarea>
                </div>
            </div>
            <div className="mb-8 mt-4 max-lg:flex max-lg:items-center max-lg:justify-end md:mb-20 md:mt-8 lg:mb-0 lg:mt-0">
                <button type={"submit"}>
                    <img
                        src={SendIcon}
                        alt="send button"
                        className="w-9 h-9 md:w-12 md:h-12 lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] 2xl:w-[80px] 2xl:h-[80px]"
                    />
                </button>
            </div>
        </form >
    )
}
ContactForm.propTypes = {
    handleSubmit: PropTypes.func,
    email: PropTypes.string,
    handleSetEmail :PropTypes.func,
    name : PropTypes.string,
    handleSetName :PropTypes.func,
    message :PropTypes.string,
    handleSetMessage :PropTypes.func,
}

export default ContactForm