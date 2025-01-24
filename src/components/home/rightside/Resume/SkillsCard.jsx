const SkillsCard = ({ status, skill, fill, icon }) => {
  return (
    <div>
      {status && (
        <div className="w-full px-6">
        {/* <div className="w-full my-3 px-3 py-1.5 border-b-[1px] border-b-[#6161613d] pb-3"> */}
          <h1 className="my-3 text-textColor hover:text-[#fff] duration-300">{skill}</h1>
          <div className={`w-full h-[3px] bg-[#999] relative`}>
            <span
              className={`absolute left-0 top-0 h-full ${fill} bg-designColor`}
            ></span>
          </div>
          <div className={`mt-4 w-full h-[1px] bg-[#99999915] relative`}>
          </div>
        </div>
      )}
      {!status && (
        <div className="w-full pl-5 my-1">
          <div className="text-designColor flex gap-1.5 items-center">
            {icon}
            <span className="text-textColor hover:text-[#fff] duration-300">{skill}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsCard;
