import { formatImgUrl } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';

const ContentfulImage: React.FC<ImageProps> = (props) => {
  const formattedSrc = formatImgUrl(props.src as string);
  const updatedProps = {
    ...props,
    src: formattedSrc,
  };

  return <Image {...updatedProps} />;
};

export default ContentfulImage;
