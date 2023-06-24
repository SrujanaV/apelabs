// MODULES //
import { useState, useEffect, React } from "react";
import Head from "next/head";
import Link from "next/link";

// STYLES //
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/pages/ProductInside.module.scss";

//COMPONENTS//
import Header from "../components/Header";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

// PLUGINS //
// import ScrollOut from "scroll-out";
import Slider from "react-slick";

// IMAGES //
// import bg1 from "img/section1_bg.png";

/** Home Page */
export default function ProductInside() {
	const [activeTab, setActiveTab] = useState(0);
	const handleTabClick = (index) => {
		setActiveTab(index);
	};
	useEffect(() => {
		let winWidth = window.innerWidth;
		var prevScrollpos = window.scrollY;
		document.getElementById("header").style.backdropFilter =
			"saturate(180%) blur(20px)";
		document.getElementById("header").style.backgroundColor = "rgba(66,66,66,.8)";
		window.onscroll = function () {
			var currentScrollPos = window.scrollY;
			if (prevScrollpos > currentScrollPos) {
				document.getElementById("header").style.top = "0";
			} else {
				document.getElementById("header").style.top = "-80px";
			}
			prevScrollpos = currentScrollPos;
			if (prevScrollpos > 50) {
				document.getElementById("header").style.backdropFilter =
					"saturate(180%) blur(20px)";
				document.getElementById("header").style.backgroundColor =
					"rgba(66,66,66,.8)";
			} else {
				document.getElementById("header").style.backdropFilter = "none";
			}
		};
	}, []);
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: (
			<div className={`${styles.prev_arrow}`}>
				<img src="img/prev.png" />
			</div>
		),
		nextArrow: (
			<div className={`${styles.next_arrow}`}>
				<img src="img/next.png" />
			</div>
		),
	};
	const [activeSidebar, setActiveSidebar] = useState(false);
	const handleClick = () => {
		setActiveSidebar(!activeSidebar);
	};
	return (
		<div className={styles.product_inside_wrap}>
			<Header />
			<section className={styles.product_inside}>
				<div className={styles.inside_left}>
					<div className={styles.left_content}>
						<div>
							<img
								src="img/airspin_text.png"
								className={styles.airspinTextImg}
								width={190}
							/>
							<p className={`${styles.rupee_text} text_xl`}>₹ 1700</p>
							<div className={styles.colors}>
								<div
									className={`${styles.colors_inside} ${
										activeTab === 0 ? "active" : ""
									}`}
									onClick={() => handleTabClick(0)}
								></div>
								<div
									className={`${styles.colors_inside} ${
										activeTab === 1 ? "active" : ""
									}`}
									onClick={() => handleTabClick(1)}
								></div>
								<div
									className={`${styles.colors_inside} ${
										activeTab === 2 ? "active" : ""
									}`}
									onClick={() => handleTabClick(2)}
								></div>
								<div
									className={`${styles.colors_inside} ${
										activeTab === 3 ? "active" : ""
									}`}
									onClick={() => handleTabClick(3)}
								></div>
								<div
									className={`${styles.colors_inside} ${
										activeTab === 4 ? "active" : ""
									}`}
									onClick={() => handleTabClick(4)}
								></div>
							</div>
							<p className={`${styles.content} text_reg`}>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
								nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
								volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
								ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
							</p>
							<Link href="">
								<a className={`${styles.inside_btn} cmn_btn`}>ADD TO CART</a>
							</Link>
							<br />
							<ScrollLink
								className={`${styles.links} text_uppercase text_xl`}
								offset={0}
								activeClass={styles.active}
								to="features"
								spy={true}
								smooth={true}
								onClick={handleClick}
							>
								<a className={`${styles.inside_btn} cmn_btn`}>FEATURES</a>
							</ScrollLink>
						</div>
					</div>
				</div>
				<div className={styles.inside_right}>
					{activeTab === 0 && (
						<Slider {...settings}>
							<div>
								<div className={styles.product_img}>
									<img src="img/products/section3/Airspin-2a.png" />
								</div>
							</div>
							<div>
								<div className={styles.product_img}>
									<img src="img/products/section3/Airspin-2b.png" />
								</div>
							</div>
							<div>
								<div className={styles.product_img}>
									<img src="img/products/section3/Airspin-2c.png" />
								</div>
							</div>
						</Slider>
					)}
					{activeTab === 1 && (
						<Slider {...settings}>
							<div>
								<div className={styles.product_img}>
									<img src="img/products/section3/Airspin-1a.png" />
								</div>
							</div>
							<div>
								<div className={styles.product_img}>
									<img src="img/products/section3/Airspin-1b.png" />
								</div>
							</div>
							<div>
								<div className={styles.product_img}>
									<img src="img/products/section3/Airspin-1c.png" />
								</div>
							</div>
						</Slider>
					)}
					{activeTab === 2 && (
						<Slider {...settings}>
							<div>
								<div className={styles.product_img}>
									<img src="img/products/section3/Airspin-5a.png" />
								</div>
							</div>
							<div>
								<div className={styles.product_img}>
									<img src="img/products/section3/Airspin-5b.png" />
								</div>
							</div>
							<div>
								<div className={styles.product_img}>
									<img src="img/products/section3/Airspin-5c.png" />
								</div>
							</div>
						</Slider>
					)}
					{activeTab === 3 && (
						<Slider {...settings}>
							<div>
								<div className={styles.product_img}>
									<img src="img/products/section3/Airspin-3a.png" />
								</div>
							</div>
							<div>
								<div className={styles.product_img}>
									<img src="img/products/section3/Airspin-3b.png" />
								</div>
							</div>
							<div>
								<div className={styles.product_img}>
									<img src="img/products/section3/Airspin-3c.png" />
								</div>
							</div>
						</Slider>
					)}
					{activeTab === 4 && (
						<Slider {...settings}>
							<div>
								<div className={styles.product_img}>
									<img src="img/products/section3/Airspin-4a.png" />
								</div>
							</div>
							<div>
								<div className={styles.product_img}>
									<img src="img/products/section3/Airspin-4b.png" />
								</div>
							</div>
							<div>
								<div className={styles.product_img}>
									<img src="img/products/section3/Airspin-4c.png" />
								</div>
							</div>
						</Slider>
					)}
				</div>
			</section>
			<section className={styles.features} id="features">
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
		</div>
	);
}
