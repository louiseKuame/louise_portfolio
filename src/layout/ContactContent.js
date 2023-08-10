import { useState } from 'react';
import ValidateForm from "./ValidateForm";
import * as React from "react";




function ContactContent(){

	const [values, setValues] = useState({
		lastName: "",
		firstName: "",
		email : "",
		object : "",
		message : ""
	})

	const [errors, setErrors] = useState({});

	function handleInput(event){
		const newObj = {...values, [event.target.name] : event.target.value };
		console.log(newObj);
		setValues(newObj);
	}

	function handleValidation(event){
		event.preventDefault();
		setErrors(ValidateForm(values));
	}

	return (
		<>
			 <section id="contact">
		        <div className="red-divider"></div>
		        <div className="heading">
		            <h2>Me contacter</h2>
		        </div>

		        <div className="container">

		            <div id="contact-form">
		                <div className="row" id="contact">
		                    <div className="col-md-6 col-lg-4">
		                        <h4>Adresse</h4>
		                        <p>18 rue duquesne, Gatineau, J8Y 3J3</p>
		                    </div>

		                    <div className="col-md-6 col-lg-4">
		                        <h4>Contact</h4>
		                        <p>(+1) 5142963045</p>
		                    </div>

		                    <div className="col-md-6 col-lg-4">
		                        <h4>Adresse email</h4>
		                        <p> lyzkuam@gmail.com</p>
		                    </div>


		                </div>
		                <form onSubmit={ handleValidation }>
		                    <div className="row">
		                        <div className="col-md-6 col-lg-4">
		                            <label>Nom</label>
		                            <input type="text" name="lastName" className="form-control"  onChange={ handleInput } />
		                            { errors.lastName && <p style={{ color: "red"}}> { errors.lastName }</p> }
		                        </div>
		                        <div className="col-md-6 col-lg-4">
		                            <label>Prénom(s)</label>
		                            <input type="text" name="firstName" className="form-control"  onChange={ handleInput } />
		                            { errors.firstName && <p style={{ color: "red"}}> { errors.firstName }</p> }
		                        </div>

		                        <div className="col-md-6 col-lg-4">
		                            <label>Email</label>
		                            <input type="text" name="email" className="form-control" onChange={ handleInput } />
		                            { errors.email && <p style={{ color: "red"}}> { errors.email }</p> }
		                        </div>

		                        <div className="col-md-12 col-lg-12">
		                            <label>Object</label>
		                            <input type="text" name="object" className="form-control" onChange={ handleInput } />
		                            { errors.object && <p style={{ color: "red"}}> { errors.object }</p> }
		                        </div>

		                        <div className="col-md-12 col-lg-12">
		                            <label>Message</label>
		                            <textarea className="form-control" onChange={ handleInput } name="message" rows="6" ></textarea>
		                            { errors.message && <p style={{ color: "red"}}> { errors.message }</p> }
		                        </div>

		                        <div className="col-md-12 col-lg-12" >
		                            <button className="button" type="submit"> Envoyer</button>
		                        </div>


		                    </div>

		                </form>


		            </div>
		        </div>

		    </section>
	    </>

	)
}

export default ContactContent;