import * as React from 'react';
import '../index.css';
import Hero from '../sections/home/Hero';
import Navbar from '../sections/Navbar';

const IndexPage = () => {
	return (
		<React.Fragment>
			<Navbar />
			<main>
				<Hero />
			</main>
		</React.Fragment>
	);
};

export default IndexPage;
