function Loader() {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-gray-50
        "
      >
        <div
          className="
            h-14
            w-14
            rounded-full
            border-4
            border-blue-600
            border-t-transparent
            animate-spin
          "
        />
      </div>
    );
  }
  
  export default Loader;