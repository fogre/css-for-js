import React from 'react';

const Picture = ({ src, children }) => {
  const avifSrcset = `
    ${src.replace('.jpg', '.avif')},
    ${src.replace('.jpg', '@2x.avif 2x')},
    ${src.replace('.jpg', '@3x.avif 3x')}
  `;

  const jpgSrcset = `
    ${src},
    ${src.replace('.jpg', '@2x.jpg 2x')},
    ${src.replace('.jpg', '@3x.jpg 3x')}
  `;

  console.log(jpgSrcset);

  return (
    <picture>
      <source
        type='image/avif'
        srcSet={avifSrcset}
      />
      <source
        type='image/jpg'
        srcSet={jpgSrcset}
      />
      {children}
    </picture>
  );
};

export default Picture;