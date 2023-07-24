import { Avatar, Menu } from "@mantine/core";
import { IconUserCircle, IconLogout } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { getInitials } from "@/utils";
import { useAppDispatch } from "@/app/hooks";
import { setPlaying } from "@/reducers/songsSlice";

const MenuOptions = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authUser = Cookies.get("authUser"); 

  const handleLogout = () => {
    Cookies.remove("authUser");
    window.location.pathname = "/";
    dispatch(setPlaying(false));

  };

  const handleProfileClick = () => {
    navigate("/profile");
  };
  
  return (
    <Menu shadow="md" width={150}>
      <Menu.Target>
        <Avatar color="gray" radius="xl" style={{ cursor: "pointer" }}>
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
