import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store";
import { Provider } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";

export default function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProp} />
      </Layout>
    </Provider>
  );
}
