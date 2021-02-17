import React, { FC, Fragment, ReactElement } from 'react';
import { CacheProvider } from '@emotion/react';
import { cache } from '@emotion/css';
import '../base/index.css';

type TProps = {
  Component: any;
  pageProps: any;
};

const MyApp: FC<TProps> = (props: TProps): ReactElement<TProps> => {
  const { Component, pageProps }: TProps = props;

  return (
    <Fragment>
      <CacheProvider value={cache}>
        <Component {...pageProps} />
      </CacheProvider>
    </Fragment>
  );
};

export default MyApp;
