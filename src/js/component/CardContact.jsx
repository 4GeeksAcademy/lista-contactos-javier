import React from "react";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../store/appContext'

const CardContact = ({ contact }) => {
    const { store, actions } = useContext(Context)
    const eliminarContacto = () => {
        console.log(contact)
        actions.deleteContact(contact.id);

};

return (
    <li id="caja-contacto" className="list-group-item d-flex justify-content-center">
        <div className="d-flex align-items-center w-75">
            <div className="col-md-3 d-flex justify-content-center">
                <img
                    className="rounded-circle"
                    src="https://cdn.pixabay.com/photo/2022/06/05/07/04/person-7243410_1280.png"
                    alt="Contact"
                    width="170"
                    height="170"

                />
            </div>
            <div className="col-md-6">
                <h5 className="card-title mb-1">Nombre: {contact.name}</h5>
                <p className="card-text mb-1">Direccion: {contact.address}</p>
                <p className="card-text mb-1">Telefono: {contact.phone}</p>
                <p className="card-text mb-1">Email: {contact.email}</p>
            </div>
            <div className="col-md-3 d-flex justify-content-end">
                <Link to={"/editContact/" + contact.id} className="btn btn-link p-0 me-3">
                    Editar
                </Link>
            
                <button className="bg-danger"type="button" data-bs-toggle="modal" data-bs-target={"#delete-contact-" + contact.id} >
                    Eliminar
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id={"delete-contact-" + contact.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">¿Estas seguro?</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Si lo eliminas no hay vuelta atras
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Volver</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={eliminarContacto}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
)
}
export default CardContact