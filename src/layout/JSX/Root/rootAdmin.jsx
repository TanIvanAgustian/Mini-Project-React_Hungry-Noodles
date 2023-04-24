import HeaderAdmin from "../Template/headerAdmin"; 
import { Outlet } from "react-router-dom";

export default function RootAdmin(){
    return <>
        <HeaderAdmin/>
        <Outlet />
    </>
}