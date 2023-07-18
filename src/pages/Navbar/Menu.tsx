import { Avatar, Menu } from "@mantine/core";
import { IconUserCircle, IconLogout } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const MenuOptions = () => {
  const navigate = useNavigate();
  const authUser = Cookies.get("authUser"); 

  const handleLogout = () => {
    Cookies.remove("authUser");
    window.location.pathname = "/";
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const getInitials = (email:string) => {
    if (!email) return "";
    const [firstName, lastName] = email.split(".");
    const initials = `${firstName[0]}${lastName[0]}`;
    return initials.toUpperCase();
  };
  
  return (
    <Menu shadow="md" width={150}>
      <Menu.Target>
        <Avatar color="cyan" radius="xl" style={{ cursor: "pointer" }}>
          {getInitials(authUser!)}
        </Avatar>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          icon={<IconUserCircle size={16} />}
          onClick={handleProfileClick}
        >
          Profile
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item
          color="red"
          icon={<IconLogout size={16} />}
          onClick={handleLogout}
        >
          Log Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default MenuOptions;
