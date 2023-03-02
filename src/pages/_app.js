import Layout from "@/containers/Layout";
import { wrapper } from "@/redux/store";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

function App({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
  );
}

export default wrapper.withRedux(App);
