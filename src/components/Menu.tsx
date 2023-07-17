import { Menu } from "@mantine/core";
import { IconUserCircle, IconLogout } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const MenuOptions = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        Cookies.remove("authUser");
        window.location.pathname = "/"
    };

    const handleProfileClick = () => {
        navigate("/profile");
    };

    return (
        <Menu shadow="md" width={150}>
            <Menu.Target>
                <IconUserCircle size="2rem" color="#070707" cursor="pointer" />
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
