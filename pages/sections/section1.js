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
export default function Section1() {
	return (
		<>
			<section
				className={`${styles.section1} ${styles.section_wrap} section`}
				style={{
					backgroundImage: `url("img/section1_bg.png")`,
					backgroundSize: `cover`,
					backgroundRepeat: `no-repeat`,
				}}
			>
				<div className={`${styles.leaf1} ${styles.elements}`}>
					<img src="img/leaf1.png" />
				</div>
				<div className={`${styles.leaf2} ${styles.elements}`}>
					<img src="img/leaf2.png" />
				</div>
				<div className="container">
					<div className={`${styles.section_content} even_section section_spacing`}>
						<div className={`${styles.section_row} row`}>
							<div
								className={`${styles.section_left_content} col-md-6 col-xs-12 text_center`}
							>
								<h2 className={`text_primary font_secondary text_xl`}>
									LITSTEN TO THE BEAT OF YOUR OFFBEAT HEART
								</h2>
								<Link href="">
									<a className="cmn_white_btn">ORDER NOW</a>
								</Link>
								<br />
								<Link href="productInside">
									<a className="cmn_link">LEARN MORE</a>
								</Link>
							</div>
							<div className="col-md-6">
								<img src="img/products/product1.png" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
