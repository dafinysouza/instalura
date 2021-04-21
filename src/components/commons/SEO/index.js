import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export function SEO({
  headTitle,
  headDescription,
  headUrl,
  headImage,
}) {
  // Title
  const pageTitleDefault = 'Instalura';
  const hasHeadTitle = Boolean(headTitle);
  const title = hasHeadTitle
    ? (`${headTitle} | ${pageTitleDefault}`)
    : (pageTitleDefault);

  // Description
  const pageDescriptionDefault = 'Projeto desenvolvido no Bootcamp JAMStack da Alura';
  const hasDescription = Boolean(headDescription);
  const description = hasDescription
    ? (headDescription)
    : (pageDescriptionDefault);

  // Url
  const pageUrlDefault = 'https://instalura-dafinysouza.vercel.app';
  const hasUrl = Boolean(headUrl);
  const url = hasUrl
    ? (`${pageUrlDefault}/${headUrl}/`)
    : (pageUrlDefault);

  // Image
  const pageImageDefault = 'https://www.alura.com.br/assets/img/alura-share.1571848411.png';
  const hasImage = Boolean(headImage);
  const image = hasImage
    ? (headImage)
    : (pageImageDefault);

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
  headDescription: '',
  headUrl: '',
  headImage: '',
};

SEO.propTypes = {
  headTitle: PropTypes.string,
  headDescription: PropTypes.string,
  headUrl: PropTypes.string,
  headImage: PropTypes.string,
};
