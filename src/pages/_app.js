import Layout from "@/containers/Layout";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster/>
    </Layout>
  );
}
