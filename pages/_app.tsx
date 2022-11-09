import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import type { AppProps } from "next/app";
import Header from "../components/header/Header.component";
import AppContainer from "../components/app-container/AppContainer.component";
import NavMenu from "../components/nav-menu/NavMenu.component";
import styled from "styled-components";
import { Provider } from "react-redux";
import { store } from "../store/store";
import React from "react";
import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans();

const MainContainer = styled.main`
  display: flex;
`;

const ContentContainer = styled.div`
  width: calc(100% - 209px);
  padding: 10px 15px;
`;

const HeaderMemo = React.memo(Header);

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <style jsx global>{`
          html {
            font-family: ${openSans.style.fontFamily};
          }
        `}</style>
        <AppContainer>
          <HeaderMemo />
          <MainContainer>
            <NavMenu />
            <ContentContainer>
              <Component {...pageProps} />
            </ContentContainer>
          </MainContainer>
        </AppContainer>
      </SessionProvider>
    </Provider>
  );
}
