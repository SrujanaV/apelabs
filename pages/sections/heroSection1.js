// MODULES //
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

// STYLES //
import styles from "../../styles/pages/Apelabs.module.scss";

// PLUGINS //
import ScrollOut from "scroll-out";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// IMAGES //
// import bg1 from "img/section1_bg.png";

//Registering ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/** Home Page */
export default function heroSection1() {
	// useEffect(() => {
	// 	let winWidth = window.innerWidth;
	// 	let winHeight = window.innerHeight;

	// 	gsap.to(".hero_wrap", {
	// 		xPercent: -100,
	// 		x: () => winWidth,
	// 		ease: "none",
	// 		scrollTrigger: {
	// 			trigger: ".hero_wrap",
	// 			start: "top top",
	// 			// end: "bottom 80%",
	// 			end: "+=200",
	// 			scrub: true,
	// 			pin: true,
	// 			pinSpacing: false,
	// 			invalidateOnRefresh: true,
	// 			anticipatePin: 1,
	// 			markers: true,
	// 		},
	// 	});
	// }, []);

	return (
		<>
			<section
				className={`${styles.hero_wrap} hero_wrap`}
				style={{
					backgroundImage: `url("img/hero_large.jpg")`,
					backgroundSize: `100% 100%`,
					backgroundRepeat: `no-repeat`,
				}}
			>
				<div
					className={`${styles.heroSection1} ${styles.section_wrap} section`}
					// style={{
					// 	backgroundImage: `url("img/hero_bg.jpg")`,
					// 	backgroundSize: `cover`,
					// 	backgroundRepeat: `no-repeat`,
					// }}
				>
					<div className={`${styles.leaf1} ${styles.elements}`}>
						<img src="img/left1.png" />
					</div>
					<div className={`${styles.leaf2} ${styles.elements}`}>
						<img src="img/left2.png" />
					</div>
					<div className={`${styles.section_content} even_section section_spacing`}>
						<div className={styles.hero_content}>
							<div className={styles.logo_img}>
								<img src="img/apelabs.png" />
							</div>
							<h2 className={`${styles.hero_text} text_primary text_600 text_md`}>
								JOIN A TRIBE
								<br /> AS OFFBEAT AS YOU
							</h2>
							<div className={styles.hero_img}>
								<img src="img/mastmask.png" />
							</div>
						</div>
					</div>
				</div>
				<div className={`${styles.heroSection2} ${styles.section_wrap} section`}>
					<div className={`${styles.hero_left1} ${styles.elements}`}>
						<img src="img/hero_left1.png" />
					</div>
					<div className={`${styles.hero_left2} ${styles.elements}`}>
						<img src="img/hero_left2.png" />
					</div>
					<div className={`even_section section_spacing`}>
						<div className={styles.hero2_content}>
							<div className={styles.airspin_text_img}>
								<img src="img/airspin_text.png" />
							</div>
							<div className={styles.logo_img}>
								<img src="img/airspin.png" className={styles.airspin_img} />
							</div>
							<div className={styles.button_section}>
								<Link href="">
									<a className="cmn_white_btn">ORDER NOW</a>
								</Link>
								<br />
								<Link href="productInside">
									<a className="transparent_btn">LEARN MORE</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
