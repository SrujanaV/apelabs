// MODULES //
import { useState, useEffect, React } from "react";
import Head from "next/head";
import Link from "next/link";

// STYLES //
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/pages/ProductInside.module.scss";

// PLUGINS //
// import ScrollOut from "scroll-out";
import Slider from "react-slick";

// IMAGES //
// import bg1 from "img/section1_bg.png";

/** Home Page */
export default function ProductInside() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendDots: (dots) => <ul>{dots}</ul>,
	};
	return (
		<>
			<section className={styles.product_inside}>
				<div className={styles.inside_left}>
					<div className={styles.left_content}>
						<div>
							<img src="img/airspin_text.png" className={styles.airspinTextImg} />
							<p className={`${styles.rupee_text} text_xl`}>₹ 1700</p>
							<div className={styles.colors}>
								<div className={styles.colors_inside}></div>
								<div className={styles.colors_inside}></div>
								<div className={styles.colors_inside}></div>
								<div className={styles.colors_inside}></div>
								<div className={styles.colors_inside}></div>
							</div>
							<p className={`${styles.content} text_reg`}>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
								nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
								volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
								ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
							</p>
							<Link href="">
								<a className={`${styles.inside_btn} cmn_btn`}>ORDER</a>
							</Link>
							<br />
							<Link href="features">
								<a className={`${styles.inside_btn} cmn_btn`}>FEATURES</a>
							</Link>
						</div>
					</div>
				</div>
				<div className={styles.inside_right}>
					<Slider {...settings}>
						<div>
							<div className={styles.product_img}>
								<img src="img/products/main_img_sec21.png" />
							</div>
						</div>
						<div>
							<div className={styles.product_img}>
								<img src="img/products/main_img_sec21.png" />
							</div>
						</div>
						<div>
							<div className={styles.product_img}>
								<img src="img/products/main_img_sec21.png" />
							</div>
						</div>
					</Slider>
				</div>
			</section>
		</>
	);
}
