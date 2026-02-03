'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

type OptimizedImageProps = {
  alt: string;
  src: string;
  fill?: boolean; // whether to use fill (cover parent) or fixed
  width?: number;
  height?: number;
  className?: string;
  placeholderSrc?: string; // blurred low-quality image
} & Partial<ImageProps>;

const OptimizedImage = ({
  alt,
  src,
  fill = true,
  width,
  height,
  className = '',
  placeholderSrc,
  ...rest
}: OptimizedImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${!fill && 'inline-block'}`}
      style={!fill && width && height ? { width, height } : undefined}
    >
      {/* Main Image */}
      <Image
        alt={alt}
        src={src}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        onLoad={() => setImageLoaded(true)}
        placeholder={placeholderSrc ? 'blur' : undefined}
        blurDataURL={placeholderSrc}
        className={`object-cover transition-opacity duration-700 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...rest}
      />

      {/* Optional fallback blurred placeholder if no blurDataURL */}
      {!imageLoaded && !placeholderSrc && (
        <div className="absolute inset-0 h-full w-full animate-pulse bg-gray-800/20" />
      )}
    </div>
  );
};

export default OptimizedImage;
