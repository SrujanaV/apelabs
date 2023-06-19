// MODULES //
import { useState, useEffect } from "react";
import Link from "next/link";

// STYLES //
import styles from "../styles/components/Header.module.scss";

const Header = () => {
	return (
		<>
			<div className="container">
				<div className={`${styles.main_header}`}>
					<div className={styles.logo}>
						<img src="img/logo.png" />
					</div>
					<div className={styles.header_links}>
						<div className={styles.other_links}>
							<Link href="">
								<a className={`text_sm text_600 text_primary ${styles.link}`}>
									APELAND
								</a>
							</Link>
							<Link href="">
								<a className={`text_sm text_600 text_primary ${styles.link}`}>
									AIRSPIN
								</a>
							</Link>
							<Link href="">
								<a className={`text_sm text_600 text_primary ${styles.link}`}>
									PRODUCT
								</a>
							</Link>
						</div>
						<Link href="">
							<a>
								<img src="img/white_ape.png" className={styles.white_ape} />
								<p className="text_xxs text_primary">ASK AP-e</p>
							</a>
						</Link>
						<Link href="">
							<a className={`text_xs text_primary ${styles.small_link}`}>HELP</a>
						</Link>
						<Link href="">
							<a className={`text_xs text_primary ${styles.small_link}`}>LOG IN</a>
						</Link>
						<Link href="">
							<a className={`${styles.small_link}`}>
								<img src="img/cart.png" />
							</a>
						</Link>
						<Link href="">
							<a className={`${styles.small_link}`}>
								<img src="img/bar.png" />
							</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
