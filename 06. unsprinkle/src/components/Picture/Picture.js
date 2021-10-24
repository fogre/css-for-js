import React from 'react';

const Picture = ({ src, children }) => {
  const avifSrcSet = `
    ${src.replace('.jpg', '.avif 1x')},
    ${src.replace('.jpg', '@2x.avif 2x')},
    ${src.replace('.jpg', '@3x.avif 3x')}
  `;

  const jpgSrcSet = `
    ${src} 1x,
    ${src.replace('.jpg', '@2x.jpg 2x')},
    ${src.replace('.jpg', '@3x.jpg 3x')}
  `;

  return (
    <picture>
      <source
        type='image/avif'
        srcSet={avifSrcSet}
      />
      <source
        type='image/jpeg'
        srcSet={jpgSrcSet}
      />
      {children}
    </picture>
  );
};

export default Picture;