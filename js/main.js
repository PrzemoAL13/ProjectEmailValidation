let inputName;
let inputPassword;
let inputPassword2;
let inputEmail;
let buttonClear;
let buttonSend;
let buttonClose;
let elementsWithError;
let popupWindow;

const minUserNameChars = 4;
const maxUserNameChars = 20;
const minPassworChars = 8;

const msgErrorEmptyField = " contains empty field!";
const msgErrorMinChars = " is to short!";
const msgErrorMaxChars = " is to long!";
const msgErrorPassword = " - wrong password!";
const msgErrorEmail = " jest nie poprawny!";

const prepareDOMElements = () => {
	inputName = document.querySelector("#name");
	inputPassword = document.querySelector("#password");
	inputPassword2 = document.querySelector("#password2");
	inputEmail = document.querySelector("#email");
	buttonClear = document.querySelector(".clear");
	buttonSend = document.querySelector(".send");
	buttonClose = document.querySelector(".close");
	popupWindow = document.querySelector(".form__popup");
};

const prepareDOMEvents = () => {
	buttonClear.addEventListener("click", e => {
		e.preventDefault();
		clearForm([inputName, inputPassword, inputPassword2, inputEmail]);
	});

	buttonSend.addEventListener("click", e => {
		e.preventDefault();
		checkFormInputEmpty(
			[inputName, inputPassword, inputPassword2, inputEmail],
			msgErrorEmptyField
		);
		checkLengthMin(inputName, minUserNameChars, msgErrorMinChars);
		checkLengthMax(inputName, maxUserNameChars, msgErrorMaxChars);
		checkLengthMin(inputPassword, minPassworChars, msgErrorMinChars);
		checkPassword(inputPassword, inputPassword2, msgErrorPassword);
		checkEmail(inputEmail, msgErrorEmail);
		errorElementsCheck();
	});

	buttonClose.addEventListener("click", e => {
		e.preventDefault();
		clearForm([inputName, inputPassword, inputPassword2, inputEmail]);
		popupWindow.classList.remove("show-popup");
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
	inputValue.nextElementSibling.innerHTML =
		`${inputValue.previousElementSibling.innerHTML.slice(0, -1)}` + msgValue;
	inputValue.nextElementSibling.style.visibility = "visible";
};

const checkFormInputEmpty = (inputValue, msgErrorValue) => {
	inputValue.forEach(element => {
		if (element.value === "") {
			console.log("blad");
			console.log(element.value);
			console.log(element);
			console.log(msgErrorValue);
			showErrorInfo(element, msgErrorValue);
		} else {
			console.log(element.value);
			clearError(inputValue);
		}
	});
};

const checkLengthMin = (inputValue, minValue, msgValue) => {
	if (inputValue.value.length >= 1 && inputValue.value.length < minValue) {
		showErrorInfo(inputValue, msgValue);
	}
};

const checkLengthMax = (inputValue, maxValue, msgErrorValue) => {
	if (inputValue.value.length > maxValue) {
		showErrorInfo(inputValue, msgErrorValue);
	}
};

const checkPassword = (inputValue, inputValue2, msgErrorValue) => {
	if (inputValue.value !== inputValue2.value) {
		showErrorInfo(inputValue2, msgErrorValue);
	}
};

const checkEmail = (inputValue, msgErrorValue) => {
	const regExpValue =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if (inputValue.value.length >= 1) {
		if (regExpValue.test(inputValue.value)) {
		} else {
			showErrorInfo(inputValue, msgErrorValue);
		}
	}
};

const errorElementsCheck = () => {
	elementsWithError = document.querySelectorAll(".container-error");
	let localCnt = 0;
	elementsWithError.forEach(el => {
		if ((el.style.contains = ".container-error")) {
			localCnt++;
		}
	});
	console.log(localCnt);
	if (localCnt === 0) {
		popupWindow.classList.add("show-popup");
	}
};

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

document.addEventListener("DOMContentLoaded", main());
