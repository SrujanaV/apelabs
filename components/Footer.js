import styles from "../styles/components/Footer.module.scss";

//COMPONENTS//
import Link from "next/link";

const Footer = () => {
	return (
		<footer className={`${styles.main_footer} hidden_desktop`}>
			<div className={styles.footer_ape}>
				<img src="img/white_ape.png" className={`${styles.white_ape} ape_img`} />
			</div>
			<div className={`${styles.footer_links} ${styles.order}`}>
				<Link href="">
					<a className="text_reg text_600">ORDER NOW</a>
				</Link>
			</div>
			<div className={`${styles.footer_links} ${styles.learn}`}>
				<Link href="productInside">
					<a className="text_reg text_600">LEARN MORE</a>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
