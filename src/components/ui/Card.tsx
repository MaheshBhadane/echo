/* eslint-disable @typescript-eslint/naming-convention */
import {
  Card as MantineCard,
  CardProps as MantineCardProps
} from "@mantine/core";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface CardProps
  extends Omit<MantineCardProps, "children">,
    Omit<ComponentPropsWithoutRef<"div">, "color"> {
  children: ReactNode;
}

const Card = (props: CardProps) => {
  const {
    children,
    shadow = "md",
    padding = "lg",
    radius = "md",
    withBorder
  } = props;

  return (
    <MantineCard
      {...props}
      shadow={shadow}
      padding={padding}
      radius={radius}
      withBorder={withBorder}
    >
      {children}
    </MantineCard>
  );
};

export default Card;
