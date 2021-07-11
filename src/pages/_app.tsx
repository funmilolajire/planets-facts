import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import '../../styles/globals.scss'
const progress = new ProgressBar({
  size: 2,
  color: "#070740",
  className: "page-progress-bar",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
