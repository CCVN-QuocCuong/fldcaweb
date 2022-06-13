// import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../hooks"
// import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"
import { NavDropdown } from 'react-bootstrap';
import Breadcrumb from './Breadcum';

// import logo from 'assets/images/logo.png';
import { logout } from '../../store/actions/auth'
import LoadingOverlay from 'react-loading-overlay-ts'
import avatar from '../../assets/images/avatar.png'
import "./style.css"

function AdminLayout(props) {
    const dispatch = useAppDispatch()
    const { children } = props

    const isLoading = useAppSelector((state) => state.app.isLoading)
    const dataUser = JSON.parse(localStorage.getItem('dataUser') || "")

    const currentRoute = localStorage.getItem("currentRoute") || "homepage"

    const onLogout = () => {
        dispatch(logout())
        window.location.href = "/login"
    }

    return (
        <LoadingOverlay
            active={isLoading}
            spinner
        >
            <div className="wrapper">
                {/* <nav id="sidebar" className={`sidebar js-sidebar ${isShowMenu ? '' : 'collapsed'}`}>
                    <div className="sidebar-content js-simplebar">
                        <Link className="sidebar-brand" to="/">
                            <img src={logo} alt="logo" />
                        </Link>

                        <ul className="sidebar-nav">
                            <li className={`sidebar-item ${currentRoute === "homepage" ? 'active' : ''}`}>
                                <Link className="sidebar-link" to="/">
                                    <i className='fa fa-home col-1'></i>
                                    <span className="align-middle col-1"> Home</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav> */}

                <div className="main" style={{ backgroundColor: "white" }}>
                    <nav className="navbar navbar-expand navbar-light navbar-bg">
                        {/* <span className="sidebar-toggle js-sidebar-toggle" onClick={() => toggleMenu()}>
                            <i className="hamburger align-self-center"></i>
                        </span> */}
                        <span style={{ fontSize: 25, fontWeight: 'bold' }}>
                        Field Logging Installation
                        </span>

                        <div className="navbar-collapse collapse">
                            <ul className="navbar-nav navbar-align">
                                <li className="nav-item dropdown">
                                    <span className="nav-icon dropdown-toggle" id="alertsDropdown" data-bs-toggle="dropdown">
                                        <div className="position-relative">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell align-middle"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                            <span className="indicator">4</span> */}
                                        </div>
                                    </span>
                                </li>
                                <li className="nav-item dropdown">
                                    <span className="nav-icon dropdown-toggle" id="alertsDropdown" data-bs-toggle="dropdown">

                                    </span>
                                </li>
                                <li className="nav-item dropdown">
                                    <span className="nav-icon dropdown-toggle" id="alertsDropdown" data-bs-toggle="dropdown">

                                    </span>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavDropdown
                                        id="nav-dropdown-dark-example"
                                        title={
                                            <b className="">
                                                <img src={avatar} alt="" className="avatar" /> {dataUser.email}
                                            </b>
                                        }
                                    >
                                        {/* <NavDropdown.Item>My Account</NavDropdown.Item>
                                        <NavDropdown.Divider /> */}
                                        <NavDropdown.Item onClick={() => onLogout()}>Logout</NavDropdown.Item>
                                    </NavDropdown>

                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Breadcrumb currentRoute={currentRoute} />
                    <main className="content">
                        <div className="container-fluid border-content p-0">
                            {children}
                        </div>
                    </main>

                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row text-muted">
                                <div className="col-6 text-start">
                                    <p className="mb-0">
                                        <Link className="text-muted" to="/"><strong>Field Logging</strong></Link> &copy;
                                    </p>
                                </div>
                                <div className="col-6 text-end">
                                    {/* <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <Link className="text-muted" to="/">Support</Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link className="text-muted" to="/">Help Center</Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link className="text-muted" to="/">Privacy</Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link className="text-muted" to="/">Terms</Link>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </LoadingOverlay>

    );
}

export default AdminLayout;