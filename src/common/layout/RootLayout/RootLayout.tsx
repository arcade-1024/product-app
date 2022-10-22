import React, { ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";

export interface RootLayoutInterface {
	children: ReactNode;
}
const RootLayout = ({ children }: RootLayoutInterface) => {
	const { theme, systemTheme, setTheme } = useTheme();
	const [themes, setThemes] = useState("");
	useEffect(() => {
		const currentTheme = theme === "system" ? systemTheme : theme;

		if (currentTheme === "dark") {
			setThemes("dark");
		}
		if (currentTheme === "light") {
			setThemes("light");
		}
	}, [theme, systemTheme]);

	return <div className={`${themes}`}>{children}</div>;
};

export default RootLayout;
