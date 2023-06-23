// MODULES //
import { useState, useEffect } from "react";
import Link from "next/link";

// STYLES //
import styles from "../styles/components/Header.module.scss";

const Header = () => {
	return (
		<>
			<div id="header" className={styles.header}>
				<div className="container-fluid">
					<div className={`${styles.main_header}`}>
						<Link href="/">
							<div className={styles.logo}>
								<img src="img/logo.png" />
							</div>
						</Link>
						<div className={styles.header_links}>
							<div className={`${styles.other_links} hidden_xs`}>
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
								<a className="hidden_xs">
									<img src="img/white_ape.png" className={styles.white_ape} />
									<p className="text_xxs text_primary">ASK AP-e</p>
								</a>
							</Link>
							<Link href="">
								<a className={`text_xs text_primary hidden_xs ${styles.small_link}`}>
									HELP
								</a>
							</Link>
							<Link href="">
								<a className={`text_xs text_primary hidden_xs ${styles.small_link}`}>
									LOG IN
								</a>
							</Link>
							<Link href="">
								<a className={`${styles.cart} hidden_xs`}>
									<img src="img/cart.png" />
								</a>
							</Link>
							<Link href="">
								<a className={`${styles.hamburger}`}>
									<img src="img/bar.png" />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
