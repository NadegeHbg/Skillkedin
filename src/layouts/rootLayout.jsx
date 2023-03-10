import { Outlet } from "react-router-dom";
import Header from "../component/header/header"
import Footer from "../component/footer/footer"

const RootLayout = () => {
    return (
        <div className="root-layout">
            <header  >
                <Header />
                {/* <HeaderDashboard /> */}
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="md:hidden">
                < Footer />
            </footer>
        </div>
    );
};

export default RootLayout;