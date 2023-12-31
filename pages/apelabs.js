// MODULES //
import { useState, useEffect } from "react";

// STYLES //
import styles from "../styles/pages/Apelabs.module.scss";

// COMPONENTS //
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";
import Link from "next/link";

// Sections //
import HeroSection1 from "./sections/heroSection1";
import Section1 from "./sections/section1";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section4 from "./sections/section4";
import Section5 from "./sections/section5";
import Section6 from "./sections/section6";

// PLUGINS //
import ScrollOut from "scroll-out";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// IMAGES //
// import bg1 from "img/section1_bg.png";

//Registering ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/** Home Page */
export default function Apelabs() {
	useEffect(() => {
		let winWidth = window.innerWidth;
		let winHeight = window.innerHeight;
		var prevScrollpos = window.scrollY;
		document.getElementById("header").style.top = "0";
		document.getElementById("footer").style.opacity = "0";
		window.onscroll = function () {
			var currentScrollPos = window.scrollY;
			if (prevScrollpos > currentScrollPos) {
				document.getElementById("header").style.top = "0";
			} else {
				document.getElementById("header").style.top = "-80px";
			}
			prevScrollpos = currentScrollPos;
			if (prevScrollpos > 50) {
				document.getElementById("header").style.backdropFilter =
					"saturate(180%) blur(20px)";
				document.getElementById("header").style.backgroundColor =
					"rgba(66,66,66,.8)";
			} else {
				document.getElementById("header").style.backdropFilter = "none";
				document.getElementById("header").style.backgroundColor = "transparent";
			}

			if (currentScrollPos > 1.5 * winHeight) {
				document.getElementById("footer").style.opacity = "1";
			} else {
				document.getElementById("footer").style.opacity = "0";
			}
		};
	}, []);
	return (
		<div>
			<Head>
				<title>Apelabs</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className={`${styles.apelabs}`}>
				<HeroSection1 />
				<Section1 />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<Section6 />
			</main>
			<Footer />
		</div>
	);
}
