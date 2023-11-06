import React from 'react';
import maskot from "../maskot.jpg";
const Header = () => {
    return (
<>
  <nav className="navbar bg-body-tertiary primary">
    <div className="container-fluid">
      <a className="navbar-brand">
        <img style={{marginRight : "20px"}} src={maskot} alt="Logo" width={60} height={54}  className="d-inline-block align-text-top" />
        
      </a>
    </div>
  </nav>
</>

    );
}

export default Header;