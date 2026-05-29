function ErrorMessage({
    message,
  }) {
    if (!message) return null;
  
    return (
      <div
        className="
          bg-red-100
          border
          border-red-300
          text-red-700
          p-4
          rounded-xl
          mb-4
        "
      >
        {message}
      </div>
    );
  }
  
  export default ErrorMessage;