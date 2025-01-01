import SendIcon from '../assets/send.svg'
import CustomInputComponent from './customInputComponent'
function ContactForm({handleSubmit}) {
    return (
        <form className="gap-10 lg:flex lg:items-end border" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-10">
                <CustomInputComponent
                    label={"Your full name / Company name*"}
                    id={"name"}
                    placeholder={"Name"}
                    type={"text"}
                    customClass={"py-3 lg:py-4 "}
                    gridSpan={"max-lg:col-span-full"}
                />
           
                <CustomInputComponent
                    label={"Email address*"}
                    id={"email"}
                    placeholder={"Email"}
                    type={"email"}
                    customClass={"py-3 lg:py-4 "}
                    gridSpan={"max-lg:col-span-full"}
                />
                <CustomInputComponent
                    label={"Message*"}
                    id={"message"}
                    placeholder={"A few words"}
                    type={"textarea"}
                    customClass={"py-12"}
                    gridSpan={"col-span-full"}
                />
            </div>
            <div className="mb-8 mt-4 max-lg:flex max-lg:items-center max-lg:justify-end md:mb-20 md:mt-8 lg:mb-0 lg:mt-0">
                <button type={"submit"}>
                    <img
                        src={SendIcon}
                        alt="send button"
                        className="md:h-6 md:w-6 lg:h-8 lg:w-8"
                    />
                </button>
            </div>
        </form>
        )
}

export default ContactForm