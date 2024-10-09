import { Link, Outlet } from "react-router-dom";

function Layout() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">


                        <nav className="navbar page">
                            <div className="logo">
                                <a href="#">Nykaa</a>
                            </div>
                            <ul className="nav-menu">
                                <li><Link to={'/home'}>Home</Link></li>
                                <li><Link to={'/GetAll'}>Products</Link></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                            <div className="nav-icons">
                                <a href="#" className="shopping-cart">
                                    <Link to={'/Add'}>
                                        <i className="fas fa-shopping-cart"> add</i>
                                    </Link>
                                </a>
                                <a href="#" className="search">
                                    <i className="fas fa-search"></i>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col-md-12">
                        <div className="content">

                        </div>
                    </div> */}
                    <Outlet>

                    </Outlet>
                </div>
            </div>
           

        </>
    )

}
export default Layout;