import Header from "../Template/header"
import { Outlet } from "react-router-dom"
import Footer from "../Template/footer"

export default function RootUser(){
    return <>
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    </>
}