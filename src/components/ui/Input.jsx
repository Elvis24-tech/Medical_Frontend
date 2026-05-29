function Input({
    label,
    error,
    className = "",
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
              text-gray-700
            "
          >
            {label}
          </label>
        )}
  
        <input
          className={`
            w-full
            border
            border-gray-300
            rounded-xl
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-blue-500
            bg-white
            ${className}
          `}
          {...props}
        />
  
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
  
  export default Input;