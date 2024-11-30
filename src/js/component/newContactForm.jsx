import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export const NewContactForm = props => {

	const { store, actions } = useContext(Context);
	const navigate = useNavigate();





	const [formData, setFormData] = useState({
		full_name: '',
		phone: '',
		email: '',
		address: ''
	});

	const handleChange = e => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })

	}

	const handleCancel = () => navigate('/')

	const handleSubmit = e => {
		e.preventDefault();
		actions.createContact(formData)
		navigate("/");

	}


	return (
		<div className="container">
			<h1 className="addview ">Add a new contact</h1>
			<form onSubmit={handleSubmit}>
				<h6>Full Name</h6>
				<input type="text" className="form-control" value={formData.name} onChange={handleChange} name="name" placeholder="full name" required />
				<h6>Phone</h6>
				<input type="text" className="form-control" value={formData.phone} onChange={handleChange} name="phone" placeholder=" Enter phone" required />
				<h6>Email</h6>
				<input type="text" className="form-control" value={formData.email} onChange={handleChange} name="email" placeholder="Enter email" required />
				<h6>Adress</h6>
				<input type="text" className="form-control" value={formData.address} onChange={handleChange} name="address" placeholder="Enter address" required />
				<button type="submit" className="btn btn-primary btn-block" >Save</button>
				<br />
				<Link to="/" className="link" onClick={handleCancel}>or get back to contacts</Link>
			</form>
		</div>
	);
};

NewContactForm.propTypes = {
	match: PropTypes.object
};
