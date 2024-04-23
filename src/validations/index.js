// validateAuth

const validateEmail = (email) => {
    if (!email) {
      return "Email Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return "Invalid email address";
    }
    return "";
  };
  
  const validatePassword = (password) => {
    if (!password) {
      return "Password Required";
    }
    return "";
  };
  
  export const validateAuth = (values) => {
    let errors = {};
    errors.email = validateEmail(values.email);
    errors.password = validatePassword(values.password);
    return errors;
  };

  export const validateForgotPassword = (values) => {
    let errors = {};
    errors.email = validateEmail(values.email);
    return errors;
  };
  