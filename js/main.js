const prepareVars = () => {
	let inputName;
	let inputPassword;
	let inputPassword2;
	let inputEmail;
	let buttonClear;
	let buttonSend;
	let buttonClose;
};
const prepareDOMElements = () => {
	inputName = document.querySelector("#name");
	inputPassword = document.querySelector("#password");
	inputPassword2 = document.querySelector("#password2");
	inputEmail = document.querySelector("#email");
	buttonClear = document.querySelector(".clear");
	buttonSend = document.querySelector(".send");
	buttonClose = document.querySelector(".close");
};

const prepareDOMEvents = () => {
	buttonClear.addEventListener("click", e => {
		e.preventDefault();
		clearForm([inputName, inputPassword, inputPassword2, inputEmail]);
	});

	buttonSend.addEventListener("click", e => {
		e.preventDefault();
		checkForm([inputName, inputPassword, inputPassword2, inputEmail]);
	});
};

//=====================================================Clear Form
const clearForm = inputValue => {
	inputValue.forEach(element => {
		element.value = "";
	});
	clearError(inputValue);
};
//=====================================================Clear error
const clearError = inputValue => {
	inputValue.forEach(element => {
		element.classList.remove("container-error");
		element.nextElementSibling.style.visibility = "hidden";
	});
};
//=====================================================show error info
const showErrorInfo = (inputValue, msgValue) => {
	inputValue.classList.add("container-error");
	inputValue.nextElementSibling.innerHTML = msgValue;
	inputValue.nextElementSibling.style.visibility = "visible";
};

const checkForm = inputValue => {
	inputValue.forEach(element => {
		if (element.value === "") {
			showErrorInfo(element, "Empty field!");
		} else {
			clearError(inputValue);
		}
	});
};

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

prepareVars();
document.addEventListener("DOMContentLoaded", main());
