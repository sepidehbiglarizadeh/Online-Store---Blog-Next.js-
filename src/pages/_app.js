import Layout from "@/containers/Layout";
import AuthProvider from "@/context/AuthContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </AuthProvider>
  );
}
