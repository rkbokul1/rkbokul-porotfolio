import React from "react";

const SkillCard = ({ skill }) => {
    const { color, icon, name } = skill;
    return (
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
            <p className="text-xs btn md:btn-lg disabled flex items-center relative bottom-0 hover:bottom-2 transition-all duration-300">
                <span className={`${color} mr-2`}>{icon}</span>
                <span className="">{name}</span>
            </p>
        </div>
    );
};

export default SkillCard;
