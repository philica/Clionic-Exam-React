import { Sidebar } from './Sidebar';
import './App.css';
import logo from './images/logo.png';


function App() {
  return (
    <div>
        <div className="nk-app-root">
       
        <div className="nk-main ">
            
            <Sidebar   logo={logo}  />
           
            <div className="nk-wrap ">
                
                <div className="nk-header nk-header-fixed is-light">
                    <div className="container-fluid">
                        <div className="nk-header-wrap">
                            <div className="nk-menu-trigger d-xl-none ml-n1">
                                <a href="#" className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em className="icon ni ni-menu"></em></a>
                            </div>
                            <div className="nk-header-brand d-xl-none">
                                <a href="html/index.html" className="logo-link">
                                    {/* <img className="logo-light logo-img" src="./images/logo.png" srcset="./images/logo2x.png 2x" alt="logo"/> */}
                                    {/* <img className="logo-dark logo-img" src="./images/logo-dark.png" srcset="./images/logo-dark2x.png 2x" alt="logo-dark"/> */}
                                </a>
                            </div>
                            <div className="nk-header-search ml-3 ml-xl-0">
                                <em className="icon ni ni-search"></em>
                                <input type="text" className="form-control border-transparent form-focus-none" placeholder="Search Patients"/>
                            </div>
                            <div className="nk-header-tools">
                                <ul className="nk-quick-nav">
                                    
                                        <div className="card-tools">
                                            <div className="dropdown"><a href="#" className="dropdown-toggle dropdown-indicator btn btn-sm btn-outline-light btn-white"
                                                    data-bs-toggle="dropdown" aria-expanded="false">English</a>
                                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-xs">
                                                    <ul className="link-list-opt no-bdr">
                                                        <li><a href="#"><span>7 Days</span></a></li>
                                                        <li><a href="#"><span>15 Days</span></a></li>
                                                        <li><a href="#"><span>30 Days</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    <li className="dropdown notification-dropdown">
                                        <a href="#" className="dropdown-toggle nk-quick-nav-icon" data-toggle="dropdown">
                                            <div className="icon-status icon-status-info"><em className="icon ni ni-bell"></em></div>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-xl dropdown-menu-right">
                                            <div className="dropdown-head">
                                                <span className="sub-title nk-dropdown-title">Notifications</span>
                                                <a href="#">Mark All as Read</a>
                                            </div>
                                            <div className="dropdown-body">
                                                <div className="nk-notification">
                                                    <div className="nk-notification-item dropdown-inner">
                                                        <div className="nk-notification-icon">
                                                            <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                        </div>
                                                        <div className="nk-notification-content">
                                                            <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                            <div className="nk-notification-time">2 hrs ago</div>
                                                        </div>
                                                    </div>
                                                    <div className="nk-notification-item dropdown-inner">
                                                        <div className="nk-notification-icon">
                                                            <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                        </div>
                                                        <div className="nk-notification-content">
                                                            <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                            <div className="nk-notification-time">2 hrs ago</div>
                                                        </div>
                                                    </div>
                                                    <div className="nk-notification-item dropdown-inner">
                                                        <div className="nk-notification-icon">
                                                            <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                        </div>
                                                        <div className="nk-notification-content">
                                                            <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                            <div className="nk-notification-time">2 hrs ago</div>
                                                        </div>
                                                    </div>
                                                    <div className="nk-notification-item dropdown-inner">
                                                        <div className="nk-notification-icon">
                                                            <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                        </div>
                                                        <div className="nk-notification-content">
                                                            <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                            <div className="nk-notification-time">2 hrs ago</div>
                                                        </div>
                                                    </div>
                                                    <div className="nk-notification-item dropdown-inner">
                                                        <div className="nk-notification-icon">
                                                            <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                        </div>
                                                        <div className="nk-notification-content">
                                                            <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                            <div className="nk-notification-time">2 hrs ago</div>
                                                        </div>
                                                    </div>
                                                    <div className="nk-notification-item dropdown-inner">
                                                        <div className="nk-notification-icon">
                                                            <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                        </div>
                                                        <div className="nk-notification-content">
                                                            <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                            <div className="nk-notification-time">2 hrs ago</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown-foot center">
                                                <a href="#">View All</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown user-dropdown">
                                        <a href="#" className="dropdown-toggle mr-n1" data-toggle="dropdown">
                                            <div className="user-toggle">
                                                <div className="user sm">
                                                    
                                                </div>
                                                <div className="user-info d-none d-xl-block">
                                                    <div className="user-name dropdown-indicator">Younghoon Cho</div>
                                                    <div className="user-status">TECHNICIAN</div>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                            <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                                                <div className="user-card">
                                                    <div className="user-avatar">
                                                        <span>AB</span>
                                                    </div>
                                                    <div className="user-info">
                                                        <span className="lead-text">Abu Bin Ishtiyak</span>
                                                        <span className="sub-text">info@softnio.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown-inner">
                                                <ul className="link-list">
                                                    <li><a href="html/user-profile-regular.html"><em className="icon ni ni-user-alt"></em><span>View Profile</span></a></li>
                                                    <li><a href="html/user-profile-setting.html"><em className="icon ni ni-setting-alt"></em><span>Account Setting</span></a></li>
                                                    <li><a href="html/user-profile-activity.html"><em className="icon ni ni-activity-alt"></em><span>Login Activity</span></a></li>
                                                    <li><a className="dark-switch" href="#"><em className="icon ni ni-moon"></em><span>Dark Mode</span></a></li>
                                                </ul>
                                            </div>
                                            <div className="dropdown-inner">
                                                <ul className="link-list">
                                                    <li><a href="#"><em className="icon ni ni-signout"></em><span>Sign out</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nk-content ">
                    <div className="container-fluid">
                        <div className="nk-content-inner">
                            <div className="nk-content-body">
                                <div className="nk-block">
                                    <div className="row g-gs">
                                        <div className="col-md-5 col-lg-5 col-xxl-3">
                                            <div className="nk-block-head nk-block-head-sm">
                                                <div className="nk-block-between">
                                                    <div className="nk-block-head-content">
                                                        <h4 className="">EXAM ROOMS</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card card-bordered card-preview">
                                                <div className="card-inner p-0">
                                                    <table className="table table-hover p-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">ROOM ID</th>
                                                                <th scope="col">ROOM NAME</th>
                                                                <th scope="col">REG. DATE</th>
                                                                <th scope="col">ACTION</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="p-4">
                                                                <td scope="row">R.01</td>
                                                                <td>Sleep Apnea Lab</td>
                                                                <td>17/10/2022</td>
                                                                <td>
                                                                    <div className="card-tools shrink-0 d-none d-sm-block">
                                                                        <ul className="nav nav-switch-s2 nav-tabs bg-white">
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-edit"></em></a></li>
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-disk"></em></a></li>
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-trash"></em></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">R.02</td>
                                                                <td>Narcolepsy Lab</td>
                                                                <td>17/10/2022</td>
                                                                <td>
                                                                    <div className="card-tools shrink-0 d-none d-sm-block">
                                                                        <ul className="nav nav-switch-s2 nav-tabs bg-white">
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-edit"></em></a></li>
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-disk"></em></a></li>
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-trash"></em></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">R.03</td>
                                                                <td>Insomnia Lab</td>
                                                                <td>17/10/2022</td>
                                                                <td>
                                                                    <div className="card-tools shrink-0 d-none d-sm-block">
                                                                        <ul className="nav nav-switch-s2 nav-tabs bg-white">
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-edit"></em></a></li>
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-disk"></em></a></li>
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-trash"></em></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">R.04</td>
                                                                <td>RLS Lab</td>
                                                                <td>17/10/2022</td>
                                                                <td>
                                                                    <div className="card-tools shrink-0 d-none d-sm-block">
                                                                        <ul className="nav nav-switch-s2 nav-tabs bg-white">
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-edit"></em></a></li>
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-disk"></em></a></li>
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-trash"></em></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">R.05</td>
                                                                <td>Sleep Apnea Lab</td>
                                                                <td>17/10/2022</td>
                                                                <td>
                                                                    <div className="card-tools shrink-0 d-none d-sm-block">
                                                                        <ul className="nav nav-switch-s2 nav-tabs bg-white">
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-edit"></em></a></li>
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-disk"></em></a></li>
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-trash"></em></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                          
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-lg-5 col-xxl-3">
                                            <div className="nk-block-head nk-block-head-sm">
                                                <div className="nk-block-between">
                                                    <div className="nk-block-head-content">
                                                        <h4 className="">EXAM ROOMS</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card card-bordered card-preview">
                                                <div className="card-inner p-0">
                                                    <table className="table table-hover p-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">ROOM ID</th>
                                                                <th scope="col">ROOM NAME</th>
                                                                <th scope="col">REG. DATE</th>
                                                                <th scope="col">ACTION</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="p-4">
                                                                <td scope="row">R.01</td>
                                                                <td>Sleep Apnea Lab</td>
                                                                <td>17/10/2022</td>
                                                                <td>
                                                                    <div className="card-tools shrink-0 d-none d-sm-block">
                                                                        <ul className="nav nav-switch-s2 nav-tabs bg-white">
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-edit"></em></a></li>
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-disk"></em></a></li>
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-trash"></em></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">R.02</td>
                                                                <td>Narcolepsy Lab</td>
                                                                <td>17/10/2022</td>
                                                                <td>
                                                                    <div className="card-tools shrink-0 d-none d-sm-block">
                                                                        <ul className="nav nav-switch-s2 nav-tabs bg-white">
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-edit"></em></a></li>
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-disk"></em></a></li>
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-trash"></em></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">R.03</td>
                                                                <td>Insomnia Lab</td>
                                                                <td>17/10/2022</td>
                                                                <td>
                                                                    <div className="card-tools shrink-0 d-none d-sm-block">
                                                                        <ul className="nav nav-switch-s2 nav-tabs bg-white">
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-edit"></em></a></li>
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-disk"></em></a></li>
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-trash"></em></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">R.04</td>
                                                                <td>RLS Lab</td>
                                                                <td>17/10/2022</td>
                                                                <td>
                                                                    <div className="card-tools shrink-0 d-none d-sm-block">
                                                                        <ul className="nav nav-switch-s2 nav-tabs bg-white">
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-edit"></em></a></li>
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-disk"></em></a></li>
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-trash"></em></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">R.05</td>
                                                                <td>Sleep Apnea Lab</td>
                                                                <td>17/10/2022</td>
                                                                <td>
                                                                    <div className="card-tools shrink-0 d-none d-sm-block">
                                                                        <ul className="nav nav-switch-s2 nav-tabs bg-white">
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-edit"></em></a></li>
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-disk"></em></a></li>
                                                                            <li className="nav-item"><a href="#" className="nav-link"><em className="icon ni ni-trash"></em></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                          
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nk-footer">
                    <div className="container-fluid">
                        <div className="nk-footer-wrap">
                            <div className="nk-footer-copyright"> &copy; 2020 DashLite. Template by <a href="https://softnio.com" target="_blank">Softnio</a>
                            </div>
                            <div className="nk-footer-links">
                                <ul className="nav nav-sm">
                                    <li className="nav-item"><a className="nav-link" href="#">Terms</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Privacy</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Help</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
       
        </div>
     
    </div>
    </div>
  );
}

export default App;