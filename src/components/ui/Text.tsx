import {
  Text as MantineText,
  TextProps as MantineTextProps
} from "@mantine/core";

interface TextProps extends Omit<MantineTextProps, "color"> {
  color?: string;
}

const Text = (props: TextProps) => {
  const { children, size = "md", color = "gray", weight, ...rest } = props;

  return (
    <MantineText size={size} color={color} weight={weight} {...rest}>
      {children}
    </MantineText>
  );
};

export default Text;
