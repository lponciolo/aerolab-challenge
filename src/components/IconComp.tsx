import React, { useEffect, useState, FunctionComponent } from 'react';
import { SkeletonCircle, Box } from '@chakra-ui/react';

const imgComp: FunctionComponent<{ mt?: string; ml?: number; src: string }> = ({
  src,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [imgSrc, setSrc] = useState(undefined || src);
  useEffect(() => {
    const img = new Image();
    img.src = src as string;
    img.addEventListener('load', () => {
      setSrc(src);
    });
  }, [src]);

  return <Box {...props}>{imgSrc ? <img src={imgSrc} alt='iconImg' /> : <SkeletonCircle size='10' />}</Box>;
};

export default imgComp;
