// MODULES //
import { useState, useEffect, React } from "react";
import Head from "next/head";
import Link from "next/link";

// STYLES //
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/pages/Apelabs.module.scss";

// PLUGINS //
import ScrollOut from "scroll-out";
import Slider from "react-slick";

// IMAGES //
// import bg1 from "img/section1_bg.png";

/** Home Page */
export default function section2() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		appendDots: (dots) => <ul>{dots}</ul>,
	};
	return (
		<>
			<section
				className={`${styles.section2} ${styles.section_wrap} section`}
				style={{
					backgroundImage: `url("img/section2_bg.jpg")`,
					backgroundSize: `cover`,
					backgroundRepeat: `no-repeat`,
				}}
			>
				{/* <div className={`${styles.leaf1} ${styles.elements}`}>
					<img src="img/section4lleft.png" />
				</div>
				<div className={`${styles.leaf2} ${styles.elements}`}>
					<img src="img/section4right.png" />
				</div> */}
				<div className="container">
					<div className={`${styles.section_content} even_section section_spacing`}>
						<Slider {...settings}>
							<div>
								<div className={`${styles.product_wrap}`}>
									<div className="product_img">
										<img src="img/products/left21.png" />
									</div>
									<div className="product_img">
										<img src="img/products/main_img_sec21.png" />
									</div>
									<div className="product_img">
										<img src="img/products/right21.png" />
									</div>
								</div>
							</div>
							<div>
								<div className={`${styles.product_wrap}`}>
									<div className="product_img">
										<img src="img/products/left21.png" />
									</div>
									<div className="product_img">
										<img src="img/products/main_img_sec21.png" />
									</div>
									<div className="product_img">
										<img src="img/products/right21.png" />
									</div>
								</div>
							</div>
							<div>
								<div className={`${styles.product_wrap}`}>
									<div className="product_img">
										<img src="img/products/left21.png" />
									</div>
									<div className="product_img">
										<img src="img/products/main_img_sec21.png" />
									</div>
									<div className="product_img">
										<img src="img/products/right21.png" />
									</div>
								</div>
							</div>
							<div>
								<div className={`${styles.product_wrap}`}>
									<div className="product_img">
										<img src="img/products/left21.png" />
									</div>
									<div className="product_img">
										<img src="img/products/main_img_sec21.png" />
									</div>
									<div className="product_img">
										<img src="img/products/right21.png" />
									</div>
								</div>
							</div>
							<div>
								<div className={`${styles.product_wrap}`}>
									<div className="product_img">
										<img src="img/products/left21.png" />
									</div>
									<div className="product_img">
										<img src="img/products/main_img_sec21.png" />
									</div>
									<div className="product_img">
										<img src="img/products/right21.png" />
									</div>
								</div>
							</div>
						</Slider>
						<p className={styles.section_text}>Pick your colour</p>
						<ul></ul>
						<div className={styles.button_section}>
							<Link href="productInside">
								<a className="cmn_btn black_btn">ORDER NOW</a>
							</Link>
							<br />
							<Link href="">
								<a className={`${styles.cmn_link} cmn_link`}>LEARN MORE</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
