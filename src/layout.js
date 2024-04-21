import React from "react";
import TopAppBar from "./components/appBar/appBar";
import BottomFooter from "./components/footer/footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <TopAppBar />
            <Outlet />
            <BottomFooter />
        </div>
    );
}
export default Layout;