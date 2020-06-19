import React from 'react';
import Installment from '../installment';
import { Col, Row } from 'react-materialize';

// import { Container } from './styles';

function Installments({ principal, tax, installment }) {
	let cards = [];
	let count = 1;

	while (count <= installment) {
		cards.push({ principal, tax, installment: count });
		count++;
	}

	return (
		<Row>
			{cards.map(card => {
				return (
					<Col m={2} s={12} key={card.installment}>
						<Installment
							principal={card.principal}
							tax={card.tax}
							installment={card.installment}
						/>
					</Col>
				);
			})}
		</Row>
	);
}

export default Installments;
