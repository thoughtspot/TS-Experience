import React from "react";
import "../App.css";
import { MobileDiv } from "../components/NavbarElements";
import packageJson from "../../package.json";

import { gbl_meta, gbl_thoughtSpotHost } from "./../config";
import { useInitThoughtSpot } from "./../use-init-thoughtspot";

const Home = () => {
	return (

		<MobileDiv>
			<center>
				<ul className="no-bullets">
					<li>&nbsp;</li>
					<li><a href="/product-tour/liveboard" >LIVEBOARD</a></li>
					<li><a href="/product-tour/search" >SEARCH</a></li>
					<li><a href="https://codesandbox.io/p/github/thoughtspot/TS-Experience/main" target="_blank">DEVELOPER</a></li>
					<li><a href="https://www.thoughtspot.com/trial?tsref=producttour" >FREE TRIAL</a></li>
				</ul>
			</center>
			<center>
				&nbsp;<br /><br />
				Version: {packageJson.version}
			</center>
		</MobileDiv>
	);
};

export default Home;
