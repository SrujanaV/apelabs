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
export default function Section6() {
	return (
		<>
			<section className={`${styles.section6} ${styles.section_wrap} section`}>
				<div className={`${styles.leaf1} ${styles.elements}`}>
					<img src="img/section7right.png" />
				</div>
				<div className={`${styles.leaf2} ${styles.elements}`}>
					<img src="img/products/section7product.png" />
				</div>
				<div className="container">
					<div className={`${styles.section_content} even_section section_spacing`}>
						<div className={`${styles.section_row} row`}>
							<div className={`${styles.section_left_content} col-md-6 text_center`}>
								<div>
									<h2 className={`text_primary font_secondary text_lg`}>
										FASHIONABLE DESIGN
									</h2>
									<p className={`text_primary ${styles.section_desc}`}>
										FASHIONABLE DESIGN  AirSpin has a unique metallic ring to it. You keep
										it anywhere in front of anyone, it’s impossible to ignore its stunning
										design. That’s why we proudly say that you can judge the AirSpin by
										its looks. 
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
							{/* <div className="col-md-6">
								<img src="img/products/product1.png" />
							</div> */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
