import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import type { AppProps } from "next/app";
import Header from "../components/header/Header.component";
import AppContainer from "../components/app-container/AppContainer.component";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={session}>
      <AppContainer>
        <Header />
        <Component {...pageProps} />
      </AppContainer>
    </SessionProvider>
  );
}
