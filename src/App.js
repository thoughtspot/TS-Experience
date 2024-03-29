import React from "react";
import "./App.css";
import { Global, css } from "@emotion/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./config";
import Cookies from 'universal-cookie';
import { isSafari, isIE } from 'react-device-detect';

import Home from "./pages/Home";
import Liveboard from "./pages/Liveboard";
import Sage from "./pages/Sage";
import { gbl_meta, gbl_thoughtSpotHost } from "./config";
// import { useInitThoughtSpot } from "./use-init-thoughtspot";

//use https://transfonter.org/ to convert fonts
const GlobalStyles = css`
	@font-face {
		font-family: "BBRollerRegular";
		src: url("/product-tour/fonts/bbrollermonoprotx-regular.ttf") format("truetype");
	}

	@font-face {
		font-family: "OptimoPlainRegular";
		src: url("/product-tour/fonts/plain-regular.ttf") format("truetype");
	}

	* {
		text-align: center;
	}
`;

// try-everywhere provides unauthenticated access. You can not use this for production.
// Please refer to <docs link> for auth options.

function App() {

	const cookies = new Cookies();
	cookies.set("ept", "ept-cookie", { secure: true, sameSite: 'none' });

	if (isSafari || isIE) {
		return <div className="unsupported_body">
			<img src="https://www.thoughtspot.com/images/logo-black-with-r.svg" class="header_logo " width="158" height="32" />

			<p>Hi there!</p>
			<p>Unfortunately, you are currently using an unsupported browser :(</p>
			<p>To view the ThoughtSpot Product Tour, please use the following supported web browsers on your mobile and desktop devices :)</p>

			<p style={{ fontSize: '14px' }}>
				- Chrome<br />
				- Edge<br />
				- Firefox<br />
				- Opera<br />
				- Android webview<br />
				- Chrome for Android<br />
				- Firefox for Android<br />
				- Opera for Android<br />
				- Samsung Internet<br />
			</p>

			<p>At this time the following browsers are NOT supported for desktop and mobile:</p>

			<p style={{ fontSize: '14px' }}>
				- Internet Explorer<br />
				- Safari<br />
				- Safari on iOS<br />
			</p>
		</div>
	}

	return (
		<Router>
			<HelmetProvider>
				<Helmet>
					<title>ThoughtSpot Product Tour</title>
					<meta name="description" content={gbl_meta.description} />
					<meta name="keywords" content={gbl_meta.meta.name.keywords} />
				</Helmet>
			</HelmetProvider>
			<Global styles={GlobalStyles} />
			<Navbar />
			<Routes>
				<Route path={(process.env.PUBLIC_URL.indexOf('-test') > -1 ? '/staging' : '') + "/product-tour/"} element={<Liveboard />} />
				<Route path={(process.env.PUBLIC_URL.indexOf('-test') > -1 ? '/staging' : '') + "/product-tour/home"} element={< Home />} />
				<Route path={(process.env.PUBLIC_URL.indexOf('-test') > -1 ? '/staging' : '') + "/product-tour/liveboard"} element={<Liveboard />} />
				<Route path={(process.env.PUBLIC_URL.indexOf('-test') > -1 ? '/staging' : '') + "/product-tour/search"} element={<Sage />} />
			</Routes>
		</Router>
	);
}

export default App;

