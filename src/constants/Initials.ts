export const getInitials = (email:string) => {
    if (!email) return "";
    const [firstName, lastName] = email.split(".");
    const initials = `${firstName[0]}${lastName[0]}`;
    return initials.toUpperCase();
  };