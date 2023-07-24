import { Image as MantineImage, ImageProps as MantineImageProps } from "@mantine/core";

interface ImageProps extends Omit<MantineImageProps, "src"> {
  src: string | undefined;
  alt: string | undefined;
}

const Image = (props: ImageProps) => {
  const { src, alt, ...rest } = props;

  return <MantineImage {...rest} src={src} alt={alt} />;
};

export default Image;
