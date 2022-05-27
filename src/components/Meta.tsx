import {
  getPublicUrl,
  SitecoreContextValue,
  withSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Head from 'next/head';

interface MetaProps {
  sitecoreContext: SitecoreContextValue;
}

const publicUrl = getPublicUrl();

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const Meta = ({ sitecoreContext }: MetaProps): JSX.Element => {
  return (
    <Head>
      <title>{sitecoreContext.route?.fields?.pageTitle.value} | Page Title</title>
      <link rel="icon" href={`${publicUrl}/favicon.ico`} />
    </Head>
  );
};

export default withSitecoreContext()(Meta);
