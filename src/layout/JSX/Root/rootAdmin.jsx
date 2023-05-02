import HeaderAdmin from "../Template/headerAdmin"; 
import { Outlet } from "react-router-dom";
import Background from '../../../assets/BackgroundMie.webp'

export default function RootAdmin(){
    return <>
        <HeaderAdmin/>
        <Outlet />
    </>
}