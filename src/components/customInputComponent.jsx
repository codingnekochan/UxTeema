
function CustomInputComponent({gridSpan,id,label,type,placeholder,customClass}) {
    return (
        <div className={gridSpan}>
            <label htmlFor={id} className="text-xs lg:text-sm">
                {label}
            </label>
            <br />
            <input
                type={type}
                placeholder={placeholder}
                id={id}
                name={id}
                className={`w-full border ${customClass}`}
                required
            />
        </div>
    )
}

export default CustomInputComponent