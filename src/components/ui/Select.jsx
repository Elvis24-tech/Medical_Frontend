function Select({
    label,
    options = [],
    error,
    ...props
  }) {
    return (
      <div className="mb-4">
        {label && (
          <label
            className="
              block
              mb-2
              font-medium
            "
          >
            {label}
          </label>
        )}
  
        <select
          className="
            w-full
            border
            border-gray-300
            rounded-xl
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
          {...props}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
  
        {error && (
          <p
            className="
              text-red-500
              text-sm
              mt-1
            "
          >
            {error}
          </p>
        )}
      </div>
    );
  }
  
  export default Select;