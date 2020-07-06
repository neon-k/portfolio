import React, { FC, ReactElement, Fragment } from 'react';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import '../base/index.css';

import { initializeStore } from '../store';

type TProps = {
  Component: any;
  pageProps: any;
  store: Store;
};

const MyApp: FC<TProps> = (props: TProps): ReactElement<TProps> => {
  const { Component, pageProps }: TProps = props;

  return (
    <Fragment>
      <Provider store={initializeStore()}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
};

export default withRedux(initializeStore)(MyApp);
