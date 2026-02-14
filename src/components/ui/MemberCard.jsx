const MemberCard = ({ member, onClick }) => {
  const handleClick = () => {
    if (member.portfolioUrl) {
      window.open(member.portfolioUrl, "_blank");
    } else if (onClick) {
      onClick(member);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-green-950 rounded-xl overflow-hidden shadow-md transition-transform duration-300 cursor-pointer h-full hover:-translate-y-2 hover:shadow-xl">
      <div className="h-64 overflow-hidden md:h-52">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {member.name}
        </h3>
        <p className="text-indigo-600 font-semibold mb-4">{member.role}</p>
        <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
        <div className="flex flex-wrap gap-2">
          {member.skills?.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
