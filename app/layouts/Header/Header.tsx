import React from "react";
import { LogoMain, NavLinks } from "./";

export const Header: React.FC = () => {
	return (
		<header className="header">
			<LogoMain className="header__logo" />
			<NavLinks />
		</header>
	);
};
