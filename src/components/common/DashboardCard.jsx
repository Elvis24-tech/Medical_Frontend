function DashboardCard({
    title,
    value,
    icon,
  }) {
    return (
      <div
        className="
          bg-white
          rounded-2xl
          shadow-sm
          border
          p-6
          hover:shadow-md
          transition
        "
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className="
                text-gray-500
                text-sm
              "
            >
              {title}
            </p>
  
            <h2
              className="
                text-3xl
                font-bold
                mt-2
              "
            >
              {value}
            </h2>
          </div>
  
          <div
            className="
              h-14
              w-14
              rounded-xl
              bg-blue-100
              flex
              items-center
              justify-center
            "
          >
            {icon}
          </div>
        </div>
      </div>
    );
  }
  
  export default DashboardCard;