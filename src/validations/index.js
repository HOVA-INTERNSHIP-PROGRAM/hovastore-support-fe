// validateAuth

export const validateAuth = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password Required";
  }

  return errors;
};

export const validateForgotPassword = (values) => {
  let errors = {};
  if (!values.password) {
    return "Password Required";
  };
  return errors;
};


// feedback Validation
export const validateFeedbacks = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.names) {
    errors.names = "Your Names Required";
  }

  if (!values.feedback) {
    errors.feedback = "feedback Required";
  }

  return errors;
};
