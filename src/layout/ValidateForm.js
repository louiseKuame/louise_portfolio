

function ValidateForm(values){

	const errors = {};


	const email_pattern = /^[^\s@]+@[^\s@]+[^s@]{2,6}$/;

	if(values.lastName === ""){
		errors.lastName = "Votre nom est réquis";
	}

	if(values.firstName === ""){
		errors.firstName = "Votre prénom est réquis";
	}

	if(values.email === ""){
		errors.email = "Votre email est réquis";
	}else if(!email_pattern.test(values.email)){
		errors.email = "Votre email n'est pas correcte";
	}

	if(values.object === ""){
		errors.object = "L'objet de votre message est réquis";
	}

	if(values.message === ""){
		errors.message = "Le message est réquis";
	}

	return  errors;

}


export default ValidateForm;