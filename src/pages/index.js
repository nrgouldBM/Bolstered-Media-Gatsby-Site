import * as React from 'react';
import { Title } from '../components/text/title';
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
