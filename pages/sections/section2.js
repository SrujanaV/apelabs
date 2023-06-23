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
		arrows: false,
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
					<div className={`${styles.section_content} even_section`}>
						<div className={styles.slider_wrap}>
							<Slider {...settings}>
								<div>
									<div className={`${styles.product_wrap}`}>
										<div className={`${styles.product_img} product_img`}>
											<img src="img/products/section3/Airspin-1a.png" />
										</div>
										<div className={`${styles.product_img} product_img`}>
											<img src="img/products/section3/Airspin-1b.png" />
										</div>
										<div className={`${styles.product_img} product_img`}>
											<img src="img/products/section3/Airspin-1c.png" />
										</div>
									</div>
								</div>
								<div>
									<div className={`${styles.product_wrap}`}>
										<div className={`${styles.product_img} product_img`}>
											<img src="img/products/section3/Airspin-2a.png" />
										</div>
										<div className={`${styles.product_img} product_img`}>
											<img src="img/products/section3/Airspin-2b.png" />
										</div>
										<div className={`${styles.product_img} product_img`}>
											<img src="img/products/section3/Airspin-2c.png" />
										</div>
									</div>
								</div>
								<div>
									<div className={`${styles.product_wrap}`}>
										<div className={`${styles.product_img} product_img`}>
											<img src="img/products/section3/Airspin-3a.png" />
										</div>
										<div className={`${styles.product_img} product_img`}>
											<img src="img/products/section3/Airspin-3b.png" />
										</div>
										<div className={`${styles.product_img} product_img`}>
											<img src="img/products/section3/Airspin-3c.png" />
										</div>
									</div>
								</div>
								<div>
									<div className={`${styles.product_wrap}`}>
										<div className={`${styles.product_img} product_img`}>
											<img src="img/products/section3/Airspin-4a.png" />
										</div>
										<div className={`${styles.product_img} product_img`}>
											<img src="img/products/section3/Airspin-4b.png" />
										</div>
										<div className={`${styles.product_img} product_img`}>
											<img src="img/products/section3/Airspin-4c.png" />
										</div>
									</div>
								</div>
								<div>
									<div className={`${styles.product_wrap}`}>
										<div className={`${styles.product_img} product_img`}>
											<img src="img/products/section3/Airspin-5a.png" />
										</div>
										<div className={`${styles.product_img} product_img`}>
											<img src="img/products/section3/Airspin-5b.png" />
										</div>
										<div className={`${styles.product_img} product_img`}>
											<img src="img/products/section3/Airspin-5c.png" />
										</div>
									</div>
								</div>
							</Slider>
						</div>
						<p className={`${styles.section_text} text_600`}>Pick your colour</p>
						<ul></ul>
						<div className={styles.button_wrap}>
							<Link href="productInside">
								<a className="cmn_btn black_btn hidden_xs">ORDER NOW</a>
							</Link>
							<br />
							<Link href="">
								<a className={`${styles.cmn_link} cmn_link hidden_xs`}>LEARN MORE</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
