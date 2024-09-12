export const validateEmail = (email) => {
    const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const isValidEmail = emailRegex.test(email);
    const isMissingAt = !email.includes("@");
    const isMissingDot = email.includes("@") && !email.includes(".");
  
    const isError = !isValidEmail || isMissingAt || isMissingDot;
    
    return { isValidEmail, isMissingAt, isMissingDot, isError };
  };
  