import Layout from "@/containers/Layout";
import AuthProvider from "@/context/AuthContext";
import { wrapper } from "@/redux/store";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </AuthProvider>
  );
}

export default wrapper.withRedux(App);
