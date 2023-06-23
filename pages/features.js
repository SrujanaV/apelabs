// MODULES //
import { useState, useEffect, React } from "react";

// STYLES //
import styles from "../styles/pages/Features.module.scss";

// PLUGINS //
// import ScrollOut from "scroll-out";

// IMAGES //
// import bg1 from "img/section1_bg.png";

/** Home Page */
export default function Features() {
	return (
		<>
			<section className={styles.features}>
				<div className={`${styles.features_img} ${styles.desktop}`}>
					<img src="img/features.png" alt="Features" />
					{/* <picture>
						<source media="(min-width:767px)" srcset="img/features.png" />
						<img src="img/features_mobile.png" alt="Features" />
					</picture> */}
				</div>
				<div className={`${styles.features_img} ${styles.mobile}`}>
					<img src="img/features_mobile.png" alt="Features" />
				</div>
			</section>
		</>
	);
}
