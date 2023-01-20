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

var longestPalindrome = function (s) {
  let array = [];
  for (let i = 0; i < s.length; i++) {
    let sub = s.substring(i + 1).indexOf(s[i]);
    if (
      sub !== -1 &&
      s
        .substring(s.indexOf(s[i]), sub + i + 2)
        .split("")
        .reverse()
        .join("") === s.substring(s.indexOf(s[i]), sub + i + 2)
    ) {
      if (
        array?.[0]?.length > s.substring(s.indexOf(s[i]), sub + i + 2).length
      ) {
        array.pop();
        array.push(s.substring(s.indexOf(s[i]), sub + i + 2));
      } else {
        array.push(s.substring(s.indexOf(s[i]), sub + i + 2));
      }
    }
  }
  return array[0];
};
console.log(longestPalindrome("babad"));
