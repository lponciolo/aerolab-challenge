import React, { useEffect, useState, FunctionComponent } from 'react';
import { Skeleton } from '@chakra-ui/react';

const imgComp: FunctionComponent<{ zIndex?: number; src: string; position?: string }> = ({
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
  return <>{imgSrc ? <img {...props} src={imgSrc} alt='ProdImg' /> : <Skeleton {...props} height='20px' />}</>;
};

export default imgComp;
