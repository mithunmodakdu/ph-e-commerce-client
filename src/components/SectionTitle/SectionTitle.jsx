
const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="md:w-4/12 text-center mx-auto my-11">
            <p className="text-[#D99904] mb-2">---{subHeading}---</p>
            <h3 className="text-3xl uppercase border-y-2 py-2">{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;