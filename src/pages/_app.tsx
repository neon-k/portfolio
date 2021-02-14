import React, { FC, ReactElement } from 'react';
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
    <CacheProvider value={cache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
};

export default MyApp;
