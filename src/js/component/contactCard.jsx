import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { FaTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { ModalTrash } from "../component/modalTrash.jsx";



export const ContactCard = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        console.log("contactcard render");
        console.log("Show modal:", showModal);
        console.log("store.contacts:", store.contact);
    }, [showModal, store.contact]);



    const handleDelete = () => {
        actions.deleteContact(props.contactId);
    setShowModal(false);
    };



    const handleEdit = () => {
        let contact = store.contacts.filter(el => el.id === props.contactId)[0]
        actions.selectContact(contact)
        navigate('/edit')


    };

    return (
        <div className="card">
            <div className="d-flex">
                <img className="rounded-circle" width={'150px'} src="https://www.clarin.com/2024/04/25/HKCtyMwSF_2000x1500__1.jpg" alt={props.name} />
                <div>
                    <p className="name ms-5">name: {props.name}</p>
                    <p className="phone ms-5">phone: {props.phone}</p>
                    <p className="email ms-5">email: {props.email} </p>
                    <p className="adress ms-5">address: {props.address}</p>
                </div>
                <div className="d-flex flex-column  align-items-end">
                    <button onClick={handleEdit} className="btn "><FaPencilAlt /></button>

                    <button onClick={() => setShowModal(true)} className="btn mt-2 ">
                        <FaTrashAlt />
                    </button>
                </div>
            </div>
            {showModal && (
                <ModalTrash show={showModal} onClose={() => setShowModal(false)}
                    onDelete={handleDelete}
                />
            )}
        </div>

    );

};

