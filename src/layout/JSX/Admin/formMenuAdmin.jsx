import ListMenus from "../Template/listMenus"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import AdminAddMenuForm from "./adminAddMenuForm";

export default function FormMenuAdmin(){

    const [modalShow, setModalShow] = useState(false);

    return <>
    <div className="rounded-3 bg-light col-10 mx-auto p-3 mt-3 mb-3">
        <h1 className="text-center mb-3">Form Menu Admin</h1>
        <Button variant="primary" className="mb-3" onClick={() => setModalShow(true)}>
            Add New Menu
        </Button>

        <ListMenus/>
        <AdminAddMenuForm
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    </div>
    
    </>
}