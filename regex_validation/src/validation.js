export let InitialErrorState = {
  error: false,
  helperText: "",
};
export const Validation = {
  nameValidation: (val) => {
    let returnValue = { ...InitialErrorState };
    let regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(val) && val.length !== 0) {
      returnValue = {
        error: true,
        helperText: "You have entered an invalid text!",
      };
    }
    return returnValue;
  },
  emailValidation: (val) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
    let returnValue = { ...InitialErrorState };
    if (!regex.test(val) && val.length !== 0) {
      returnValue = {
        error: true,
        helperText: "You have entered an invalid email address!",
      };
    }
    return returnValue;
  },
  urlValidation: (val) => {
    let regex =
      /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
    let returnValue = { ...InitialErrorState };
    if (!regex.test(val) && val.length !== 0) {
      returnValue = {
        error: true,
        helperText: "You have entered an invalid URL address!",
      };
    }
    return returnValue;
  },
  numberValidation: {
    validationType: "numberValidation",
    regex: "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
    errordisplayType: "Phone number must have 10 digits",
  },
};
