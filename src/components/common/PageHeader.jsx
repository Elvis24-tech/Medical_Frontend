function PageHeader({
    title,
    subtitle,
    action,
  }) {
    return (
      <div
        className="
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-4
          mb-8
        "
      >
        <div>
          <h1
            className="
              text-3xl
              font-bold
            "
          >
            {title}
          </h1>
  
          <p
            className="
              text-gray-500
              mt-1
            "
          >
            {subtitle}
          </p>
        </div>
  
        {action && (
          <div>{action}</div>
        )}
      </div>
    );
  }
  
  export default PageHeader;