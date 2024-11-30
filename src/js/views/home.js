import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard.jsx";
import { Link, NavLink } from "react-router-dom";


export const Home = () => {

	const { store, actions } = useContext(Context)
	return (
		<div className="container">
			<div className="d-flex justify-content-between align-items-center my-4">
				<Link to="/nuevo" className="btn btn-success  addview ">Add new contact</Link>
			</div>
			<ContactCard />
			{
				store.contacts?.map(contact => < ContactCard key={contact.id}
					name={contact.name}
					phone={contact.phone}
					email={contact.email}
					address={contact.address}
					contactId={contact.id}

				/>)

			}
		</div>

	);
}
