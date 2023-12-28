/* eslint-disable react/jsx-key */
function RoleBtn(props) {
    // eslint-disable-next-line react/prop-types
    const {roles} = props
    return (
        <>
            {Object.keys(roles).map((key) => (
      <div className="text-white bg-purple-700  focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-md p-1 md:p-2 text-center mb-2 dark:bg-purple-600  dark:focus:ring-purple-900 flex justify-center items-center">
      <h2 className="font-bold md:font-extrabold text-[.55rem] sm:text-[.65rem]  lg:text-xl 2xl:text-2xl over" id={key}>
          {roles[key]}
      </h2>
    </div>
    ))}
        </>
    );
}

export default RoleBtn;
