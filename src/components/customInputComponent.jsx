
function CustomInputComponent({gridSpan,id,label,type,placeholder}) {
    return (
        <div className={gridSpan}>
            <label htmlFor={id} className="text-base md:text-lg xl:text-xl">
                {label}
            </label>
            <br />
            <input
                type={type}
                placeholder={placeholder}
                id={id}
                name={id}
                className={`w-full rounded-[10px] font-satoshi leading-[1.35] border border-[#64646480] bg-black mt-2 placeholder:text-[#9797974D] px-8 lg:mt-4 placeholder:text-xs md:placeholder:text-sm xl:placeholder:text-base 2xl:placeholder:text-lg py-3 md:py-5 lg:py-4 2xl:py-5`}
                required
            />
        </div>
    )
}

export default CustomInputComponent