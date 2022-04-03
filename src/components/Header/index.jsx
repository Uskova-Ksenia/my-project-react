import React from "react";
import "./index.css";


const Header = () => {
    return (
      <header className="header">
         <div className="header_container"> 
          <a title="Remix" className="header_home_link" href="">
           Remix Logo
          </a>
          <nav className="header_navigation">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Remix Docs</a>
              </li>
              <li>
                <a href="">GitHub</a>
              </li>
            </ul>
          </nav>
         </div>
        
      </header>
    );
  };
  
  export default Header;
  