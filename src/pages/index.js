import * as React from 'react';
import '../index.css';
import Hero from '../components/organisms/Hero';
import Navbar from '../components/organisms/Navbar';
import BrandLogos from '../components/organisms/BrandLogos';

const IndexPage = () => {
	return (
		<React.Fragment>
			<Navbar />
			<main>
				<Hero />
				<BrandLogos />
			</main>
		</React.Fragment>
	);
};

export default IndexPage;
