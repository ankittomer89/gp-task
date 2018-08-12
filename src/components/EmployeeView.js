import React from "react";
import { Persona, PersonaSize } from "office-ui-fabric-react/lib/Persona";

export default ({employee}) => {
  return (
    <div className="view-persona">
      <Persona
        text={`${employee.first_name} ${employee.last_name}`}
        secondaryText={`Id: ${employee.id}`}
        size={PersonaSize.size100}
        imageAlt={`${employee.first_name} ${employee.last_name}`}
        imageUrl={employee.avatar}
        coinSize={128}
      />
    </div>
  );
};
