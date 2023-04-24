import Header from "../Template/Header"
import { Outlet } from "react-router-dom"

export default function RootUser(){
    return <>
        <Header/>
        <Outlet/>
    </>
}