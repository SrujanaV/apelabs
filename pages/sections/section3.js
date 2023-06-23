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
export default function Section3() {
	return (
		<>
			<section
				className={`${styles.section3} ${styles.section_wrap} section`}
				style={{
					backgroundImage: `url("img/section4bg.png")`,
					backgroundSize: `cover`,
					backgroundRepeat: `no-repeat`,
				}}
			>
				<div className={`${styles.leaf1} ${styles.elements}`}>
					<img src="img/section4lleft.png" />
				</div>
				<div className={`${styles.leaf2} ${styles.elements}`}>
					<img src="img/section4right.png" />
				</div>
				<div className="container">
					{/* <div className={`${styles.section_content} even_section section_spacing`}> */}
					<div className={`${styles.section_row} row`}>
						<div className="col-md-6">
							{/* <img src="img/products/section4prod.png" /> */}
						</div>
						<div className={`${styles.section_left_content} col-md-6 text_center`}>
							<div>
								<h2 className={`text_primary font_secondary text_lg`}>
									SWEAT AND
									<br /> WATER RESISTANT
								</h2>
								<p className={`text_primary ${styles.section_desc}`}>
									When we say our AirSpin is built to bear anything from sprinkled water
									to sweaty workout, we mean it. Because we know our weirdos. They just
									can’t live without music in their ears while working out.
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
					{/* </div> */}
				</div>
			</section>
		</>
	);
}
