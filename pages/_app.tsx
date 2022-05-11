import React from "react";
import App, { AppContext, AppProps } from 'next/app';
import { Layout } from "../src/components/Layout";
import "/public/styles/styles.css";

const MyApp = ({ Component, pageProps }:AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx)
  
  return { ...appProps }
 }

export default MyApp;
