import {
    Button as MantineButton,
    ButtonProps as MantineButtonProps,
} from "@mantine/core";
import { ComponentPropsWithoutRef } from "react";

interface ButtonProps
    extends MantineButtonProps,
    Omit<ComponentPropsWithoutRef<"button">, "color"> {

}

const Button = (props: ButtonProps) => {
    const {
        children,
        variant = "outline",
        color = "gray",
        size = "md",
        radius = "md",
    } = props;

    return (
        <MantineButton
            {...props}
            variant={variant}
            color={color}
            size={size}
            radius={radius}
        >
            {children}
        </MantineButton>
    );
};

export default Button;