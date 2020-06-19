import React, { useState } from 'react';
import { Container } from 'react-materialize';

import Form from '../components/form';

import Installments from '../components/installments';

function App() {
	const [principal, setPrincipal] = useState('');
	const [tax, setTax] = useState('');
	const [installment, setInstallment] = useState('');

	const onChangePrincipal = event => {
		setPrincipal(event.target.value);
	};
	const onChangeMonthlyTax = event => {
		setTax(event.target.value);
	};
	const onChangeInstallment = event => {
		setInstallment(event.target.value);
	};

	//	useEffect(() => setParcelas(installment), [installment, principal, tax]);

	return (
		<div>
			<Container>
				<h1 className="alig">React - Juros Compostos</h1>
				<Form
					principal={principal}
					tax={tax}
					installments={installment}
					onChangePrincipal={event => onChangePrincipal(event)}
					onChangeMonthlyTax={event => onChangeMonthlyTax(event)}
					onChangeInstallment={event => onChangeInstallment(event)}
				/>
				<Installments
					principal={principal}
					tax={tax}
					installment={installment}
				/>
			</Container>
		</div>
	);
}

export default App;
