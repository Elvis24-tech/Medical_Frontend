function Button({
    children,
    className = "",
    variant = "primary",
    disabled = false,
    ...props
  }) {
    const variants = {
      primary:
        "bg-blue-600 hover:bg-blue-700 text-white",
  
      danger:
        "bg-red-600 hover:bg-red-700 text-white",
  
      success:
        "bg-green-600 hover:bg-green-700 text-white",
  
      outline:
        "border border-gray-300 bg-white hover:bg-gray-100 text-gray-700",
    };
  
    return (
      <button
        disabled={disabled}
        className={`
          px-5
          py-3
          rounded-xl
          font-medium
          transition
          disabled:opacity-50
          disabled:cursor-not-allowed
          ${variants[variant]}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
  
  export default Button;