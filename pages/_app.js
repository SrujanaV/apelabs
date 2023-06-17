// import head component
import Head from "next/head";
import Link from "next/link";

//  import css
import "../styles/globals/globals.scss";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				{/* <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
				<Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
				<Link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
					rel="stylesheet"
				></Link> */}
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
