export const validationRules = {
  email: {
    required: "Email field is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },
  password: {
    required: "Password field is required",
    minLength: {
      value: 6,
      message: "Password should have at least 6 characters",
    },
    maxLength: {
      value: 20,
      message: "Password should have at most 20 characters",
    },
  },
};
