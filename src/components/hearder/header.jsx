import React from "react";

import Logo from "./logo";
import Menu from "./menu";
import Icon from "./icon_header";

const header = () => {
  return (
    <div>
      <header className="bg-white">
        <div className="container">
          <div className="row">
            {/* logo */}
            <div className="col-md-3">
              <div className="Logo">
                <Logo />
              </div>
            </div>
            {/* menu */}
            <div className="col-md-7">
              <div className="Menu">
                <Menu />
              </div>
            </div>
            {/* icon header */}
            <div className="col-md-2">
              <div className="Icon">
                <Icon />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default header;
