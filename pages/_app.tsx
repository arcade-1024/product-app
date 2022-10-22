import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import RootLayout from "../src/common/layout/RootLayout/RootLayout";
import Head from "next/head";
import { createContext } from "react";
import { StoreProvider } from "../src/providers/StoreProvider";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		// @ts-ignore
		<StoreProvider {...pageProps}>
			<ThemeProvider attribute="class">
				<Head>
					<title>Table app</title>
				</Head>
				<RootLayout>
					<Component {...pageProps} />
				</RootLayout>
			</ThemeProvider>
		</StoreProvider>
	);
}

export default MyApp;
