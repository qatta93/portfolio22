import React from "react";
import App, { AppContext, AppProps } from 'next/app';
import { Layout } from "../src/components/Layout";
import Head from 'next/head';
import "/public/styles/styles.css";

const MyApp = ({ Component, pageProps }:AppProps) => {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
};

MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx)
  
  return { ...appProps }
 }

export default MyApp;
