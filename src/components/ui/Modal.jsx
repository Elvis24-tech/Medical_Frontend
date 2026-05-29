function Modal({
    isOpen,
    onClose,
    title,
    children,
  }) {
    if (!isOpen) return null;
  
    return (
      <div
        className="
          fixed
          inset-0
          bg-black/40
          flex
          items-center
          justify-center
          z-50
          p-4
        "
      >
        <div
          className="
            bg-white
            rounded-2xl
            w-full
            max-w-lg
            p-6
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              mb-5
            "
          >
            <h2
              className="
                text-xl
                font-bold
              "
            >
              {title}
            </h2>
  
            <button
              onClick={onClose}
              className="
                text-gray-500
                hover:text-black
              "
            >
              ✕
            </button>
          </div>
  
          {children}
        </div>
      </div>
    );
  }
  
  export default Modal;