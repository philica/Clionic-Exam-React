import React from "react";
export function Sidebar({
  logo
}) {
  return <div className="nk-sidebar nk-sidebar-fixed is-light " data-content="sidebarMenu">
                <div className="nk-sidebar-element nk-sidebar-head">
                    <div className="nk-sidebar-brand">
                        <a href="html/index.html" className="logo-link nk-sidebar-logo">
                            <img className="logo-light logo-img" src={logo} srcset="./images/logo2x.png 2x" alt="logo" />
                            {
            /* <img className="logo-dark logo-img" src="./images/logo-dark.png" srcset="./images/logo-dark2x.png 2x" alt="logo-dark"/> */
          }
                            {
            /* <img className="logo-small logo-img logo-img-small" src="./images/logo-small.png" srcset="./images/logo-small2x.png 2x" alt="logo-small"/> */
          }
                        </a>
                    </div>
                    <div className="nk-menu-trigger mr-n2">
                        <a href="#" className="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em className="icon ni ni-arrow-left"></em></a>
                        <a href="#" className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu"><em className="icon ni ni-menu"></em></a>
                    </div>
                </div>
                <div className="nk-sidebar-element">
                    <div className="nk-sidebar-content">
                        <div className="nk-sidebar-menu" data-simplebar>
                            <ul className="nk-menu">
                                <li className="nk-menu-item">
                                    <a href="html/index.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-file-docs"></em></span>
                                        <span className="nk-menu-text">Exam Room</span>
                                    </a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>;
}

