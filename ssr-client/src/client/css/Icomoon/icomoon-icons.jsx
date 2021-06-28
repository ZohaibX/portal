// icon.js
import React from "react";
import IcoMoon from "react-icomoon";

const Icon = ({ ...props }) => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};

export default Icon;
