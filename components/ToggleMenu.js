import { useState } from "react";

//COMPONENTS//
import Link from "next/link";

const ToggleMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<button onClick={toggleMenu}>Toggle Menu</button>
			{isOpen && (
				<div className="menu">
					<Link href="">
						<a className={`text_sm text_600 text_primary ${styles.link}`}>APELAND</a>
					</Link>
					<Link href="">
						<a className={`text_sm text_600 text_primary ${styles.link}`}>AIRSPIN</a>
					</Link>
					<Link href="">
						<a className={`text_xs text_primary hidden_xs ${styles.small_link}`}>
							HELP
						</a>
					</Link>
					<Link href="">
						<a className={`text_xs text_primary hidden_xs ${styles.small_link}`}>
							CONTACT US
						</a>
					</Link>
					<Link href="">
						<a className={`text_xs text_primary hidden_xs ${styles.small_link}`}>
							TRACK ORDER
						</a>
					</Link>
				</div>
			)}
			<style jsx>{`
				.menu {
					position: absolute;
					width: 100%;
					height: 100vh;
					background-color: black;
				}
			`}</style>
		</div>
	);
};

export default ToggleMenu;
