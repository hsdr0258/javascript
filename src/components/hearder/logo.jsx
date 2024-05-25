import React from "react";
import Logo from "../../assets/images/logo.webp";

const logo = () => {
  return (
    <div>
      <div className="col-md-3">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default logo;
