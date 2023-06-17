// MODULES //
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

// STYLES //
import styles from "../../styles/pages/Apelabs.module.scss";

// PLUGINS //
// import ScrollOut from "scroll-out";

// IMAGES //
// import bg1 from "img/section1_bg.png";

/** Home Page */
export default function Section5() {
	return (
		<>
			<section className={`${styles.section5} ${styles.section_wrap} section`}>
				<div className={`${styles.leaf1} ${styles.elements}`}>
					<img src="img/section6Lleft.png" />
				</div>
				<div className={`${styles.leaf2} ${styles.elements}`}>
					<img src="img/section6Lright.png" />
				</div>
				<div className="container">
					<div className={`${styles.section_content} even_section section_spacing`}>
						<div className={`${styles.section_row} row`}>
							<div className="col-md-5">
								<img src="img/products/section6product.png" />
							</div>
							<div className={`${styles.section_left_content} col-md-7 text_center`}>
								<div>
									<h2 className={`text_primary font_secondary text_lg`}>
										ERGONOMIC DESIGN
									</h2>
									<p className={`text_primary ${styles.section_desc}`}>
										Well, we’ve an honest confession. We take pride in throwing our
										AirSpin. Because we know, it’s strong and sturdy. Even if you spin
										your head, we bet it won’t fall off your ear. Made with a metallic
										ring, it is for the weird people. People who don’t fear even when
										their AirSpin falls.
									</p>
								</div>
								<Link href="">
									<a className="cmn_btn">ORDER NOW</a>
								</Link>
								<br />
								<Link href="">
									<a className="cmn_link">LEARN MORE</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
