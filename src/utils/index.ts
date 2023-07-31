import Cookies from "js-cookie";
export const loginUser = (email: string) => {
  Cookies.set("user", email);
};

export const getInitials = (email: string) => {
  if (!email) return "";
  const [firstName, lastName] = email.split(".");
  const initials = `${firstName[0]}${lastName[0]}`;
  return initials.toUpperCase();
};

export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
};
