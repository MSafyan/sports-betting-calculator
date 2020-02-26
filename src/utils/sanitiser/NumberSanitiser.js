import validator from "validator";

export const isValidInput = val => {
    return typeof val !== "boolean" && (validator.isNumeric(val) || validator.isFloat(val) || validator.isEmpty(val));
}

export const isValidFractionalInput = val => {
    return typeof val !== "boolean" && (validator.isNumeric(val) || validator.isFloat(val) || validator.isEmpty(val));
}

export const isValidFraction = fraction => {
	const a = fraction.split('/');
	return (a.length === 2 && !isNaN(a[0]) && !isNaN(a[1]));
}

export const isValidInputStrict = val => {
    return typeof val !== "boolean" && (validator.isNumeric(val) || validator.isFloat(val));
}

export const NumberSantiser = (val, oldVal) => {
    return isValidInput(val) ? val : oldVal;
}

export const isInputsValid = (inputs) => {
    for (let i = 0; i < inputs.length; i++) {
        if (!isValidInputStrict(inputs[i])) return false;
    }
    return true;
}