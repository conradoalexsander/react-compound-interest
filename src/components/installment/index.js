import React from 'react';

import './styles.css';

// import { Container } from './styles';

function Installment({ principal, tax, installment }) {
	const brlCurrency = value => {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}).format(value);
	};

	const interestCalc = (principal, tax, installment) => {
		principal = Number(principal);
		tax = Number(tax / 100);
		installment = Number(installment);

		let total = principal * (1 + tax) ** installment;

		let gain = total - principal;

		let gainTax = total !== 0 ? ((gain / principal) * 100).toFixed(2) : 0;

		const amount = { total, gain, gainTax };

		return amount;
	};

	const installmentValue = interestCalc(principal, tax, installment);

	return (
		<div className="card">
			<div className="row">
				<div className="col s1 installment-number">
					<p>{installment}</p>
				</div>
				<div className="col s9 left-align">
					<ul>
						<li
							className={` card-bold-text ${
								installmentValue.gain >= 0 ? 'profit' : 'loss'
							}`}
						>
							{brlCurrency(installmentValue.total)}
						</li>

						<li
							className={` card-bold-text ${
								installmentValue.gain >= 0 ? 'profit' : 'loss'
							}`}
						>
							{brlCurrency(installmentValue.gain)}
						</li>

						<li
							className={`  ${installmentValue.gain >= 0 ? 'profit' : 'loss'}`}
						>
							{`${installmentValue.gainTax}%`}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Installment;
