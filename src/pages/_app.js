import Layout from "@/containers/Layout";
import { wrapper } from "@/redux/store";
import { loadUserData } from "@/redux/user/userActions";
import "@/styles/globals.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useStore } from "react-redux";

function App({ Component, pageProps }) {
  const store = useStore();

  useEffect(() => {
    loadUserData(store);
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster />
    </Layout>
  );
}

export default wrapper.withRedux(App);
