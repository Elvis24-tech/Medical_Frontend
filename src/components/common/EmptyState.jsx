function EmptyState({
    title = "No Data",
    message = "Nothing found.",
  }) {
    return (
      <div
        className="
          bg-white
          border
          rounded-2xl
          p-10
          text-center
        "
      >
        <h2
          className="
            text-2xl
            font-bold
            mb-3
          "
        >
          {title}
        </h2>
  
        <p className="text-gray-500">
          {message}
        </p>
      </div>
    );
  }
  
  export default EmptyState;