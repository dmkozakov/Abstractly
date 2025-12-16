import { Thumb } from "./Image.styled";

interface Props {
  src: string;
  alt: string;
  jpg: string;
  avif?: string;
  webp?: string;
  width?: string;
  height?: string;
  sizes?: string;
  loading?: "lazy" | "eager" | undefined;
  decoding?: "auto" | "async" | "sync" | undefined;
}

export type ThumbProps = Pick<Props, "width" | "height">;

export default function Image({
  src,
  alt,
  jpg,
  webp,
  avif,
  width,
  height = "auto",
  sizes = "100vw",
  loading = "lazy",
  decoding = "async",
  ...attrs
}: Props) {
  return (
    <Thumb width={width} height={height} {...attrs}>
      <picture>
        {avif && <source srcSet={avif} sizes={sizes} type="image/avif" />}

        {webp && <source srcSet={webp} sizes={sizes} type="image/webp" />}

        <img src={src} srcSet={jpg} sizes={sizes} alt={alt} loading={loading} decoding={decoding} />
      </picture>
    </Thumb>
  );
}
