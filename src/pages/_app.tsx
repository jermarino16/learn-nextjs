import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store";
import { Provider } from "react-redux";

export default function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Component {...props.pageProp} />
    </Provider>
  );
}
