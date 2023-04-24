import Image, { ImageProps } from 'next/image';
import React from 'react';

const NextImage: React.FC<ImageProps> = props => {
    const {src} = props;
  return (
    <Image
      {...props}
      unoptimized
      src={src}
      priority={false}
      blurDataURL={src.toString()}
      placeholder={
        typeof src === 'string' && (src?.includes('http') || src?.includes('https'))
          ? 'blur'
          : 'empty'
      }
    />
  );
};

export default NextImage;
