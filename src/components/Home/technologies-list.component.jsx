import React from "react";

const TechnologiesList = ({ techs }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
      {techs.map((tech) => (
        <div key={tech.id} className="flex flex-col items-center">
          <div className="text-4xl text-indigo-500 mb-2">
            {tech.icon}
          </div>
          <span className="text-sm">{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TechnologiesList;
