function Table({
    columns,
    data,
  }) {
    return (
      <div
        className="
          overflow-x-auto
          bg-white
          rounded-2xl
          border
        "
      >
        <table className="w-full">
          <thead
            className="
              bg-gray-100
            "
          >
            <tr>
              {columns.map((column) => (
                <th
                  key={column.accessor}
                  className="
                    text-left
                    px-6
                    py-4
                    font-semibold
                  "
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
  
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="
                  border-t
                  hover:bg-gray-50
                "
              >
                {columns.map((column) => (
                  <td
                    key={column.accessor}
                    className="
                      px-6
                      py-4
                    "
                  >
                    {column.render
                      ? column.render(item)
                      : item[
                          column.accessor
                        ]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Table;