import React from 'react';
import { VisitorIdentification } from '@sitecore-jss/sitecore-jss-nextjs';
import Navigation from 'src/Navigation';
import Meta from 'components/Meta';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.

const Layout = (): JSX.Element => {
  return (
    <>
      <Meta />

      <VisitorIdentification />

      <Navigation />
    </>
  );
};

export default Layout;
