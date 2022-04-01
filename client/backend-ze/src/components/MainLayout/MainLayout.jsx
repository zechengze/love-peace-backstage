import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";

const MainLayout = () => {
    return <div style={{
        padding: '30px 0px 0px 115px'
        // padding: '0px 0px 0px 0px'
    }}>
        <Menu />
        <Outlet />
    </div>;
};

export default MainLayout;