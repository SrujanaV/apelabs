// MODULES //

// COMPONENTS //

// STYLES //
import "./../styles/globals/globals.scss";

// PLUGINS //

// PAGE METADATA //
export const metadata = {
	title: "Demo page",
	description: "This is a demo page",
};

/** Root Layout */
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="">{children}</body>
		</html>
	);
}
