import React from "react";
import {
  TextInput as MantineTextInput,
  TextInputProps as MantineTextInputProps
} from "@mantine/core";

interface TextInputProps extends MantineTextInputProps {
  customProp?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const { label, placeholder, style, onChange, ...rest } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <MantineTextInput
        ref={ref}
        {...rest}
        style={style}
        label={label}
        size="md"
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  }
);

export default TextInput;
