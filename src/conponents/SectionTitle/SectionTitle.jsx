const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="border-b-2 border-t-2 border-gray-300 md:w-1/4 md:mx-auto mx-3 px-4 py-5 mb-12">
            <h6 className="text-yellow-600 text-center italic">---{subHeading}---</h6>
            <h2 className="uppercase text-4xl text-center">{heading}</h2>
        </div>
    );
};

export default SectionTitle;