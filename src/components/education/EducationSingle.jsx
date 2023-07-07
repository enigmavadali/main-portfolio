const EducationSingle = ({ institute, program, dates }) => {
    return (
        <div className="w-full rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark mt-6 sm:mt-6 gap-2 sm:gap-0 border-left-theme">
            {/* <div>
                <img
                    src={img}
                    className="rounded-t-xl border-none float-left"
                    alt="Single Project"
                />
            </div> */}
            <div className="text-center px-5 py-6">
                <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                    {program}
                </p>
                <span className="text-lg text-ternary-dark dark:text-ternary-light ">
                    {institute}
                </span>
                <span className="px-5 text-lg text-ternary-dark dark:text-ternary-light">
                    {dates}
                </span>
            </div>
        </div>
        
    );
};

export default EducationSingle;