import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const MainLayout = () => {
    const location = useLocation();
    // console.log(location)
    const isItLoginPage = location.pathname.includes("login");
    // console.log(isItLoginPage)

    return (
        <div>
            {
                isItLoginPage || <NavBar></NavBar>
            }

            <Outlet></Outlet>
            
            {
                isItLoginPage || <Footer></Footer>
            }
        </div>
    );
};

export default MainLayout;