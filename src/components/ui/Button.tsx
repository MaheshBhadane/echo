/* eslint-disable @typescript-eslint/naming-convention */
import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps
} from "@mantine/core";
import { ComponentPropsWithoutRef } from "react";
import Loader from "./Loader";

interface ButtonProps
  extends MantineButtonProps,
    Omit<ComponentPropsWithoutRef<"button">, "color"> {
  isLoading?: boolean;
  btnType?: string;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    fullWidth,
    className,
    btnType = "primary",
    variant = "outline",
    color = "gray",
    size = "md",
    radius = "md",
    type = "button",
    isLoading = false,
    disabled,
    onClick,
    value
  } = props;

  return (
    <MantineButton
      {...props}
      className={`${btnType} size-${size} ${className ?? ""} ${
        fullWidth ? "fullWidth" : ""
      }`}
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      type={type}
      disabled={disabled}
      loading={isLoading}
      onClick={onClick}
    >
      {children}
      {isLoading ? <Loader /> : value}
    </MantineButton>
  );
};

export default Button;
