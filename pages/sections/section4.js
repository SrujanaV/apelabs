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
export default function Section4() {
	return (
		<>
			<section
				className={`${styles.section4} ${styles.section_wrap} section`}
				style={{
					backgroundImage: `url("img/section5bg.png")`,
					backgroundSize: `cover`,
					backgroundRepeat: `no-repeat`,
				}}
			>
				<div className={`${styles.leaf1} ${styles.elements}`}>
					<img src="img/section5r1.png" />
				</div>
				<div className={`${styles.leaf2} ${styles.elements}`}>
					<img src="img/section5r2.png" />
				</div>
				<div className={styles.product_img}>
					<img src="img/products/section5product.png" />
				</div>
				<div className="container">
					<div className={`${styles.section_content} even_section section_spacing`}>
						<div className={`${styles.section_row} row`}>
							<div className={`${styles.section_left_content} col-md-5 text_center`}>
								<div>
									<h2 className={`text_primary font_secondary text_lg`}>
										UP TO 8 HOURS
										<br /> LISTENING TIME
									</h2>
									<p className={`text_primary ${styles.section_desc}`}>
										You’ll be bored, but our AirSpin won’t stop. You’ll be short of a
										playlist, but never short of battery. Your long drive would finish,
										but your battery won’t. All because of up to 8 hours of listening time
										in AirSpin.{" "}
									</p>
								</div>
								<Link href="">
									<a className="cmn_white_btn hidden_xs">ORDER NOW</a>
								</Link>
								<br />
								<Link href="">
									<a className="cmn_link hidden_xs">LEARN MORE</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
