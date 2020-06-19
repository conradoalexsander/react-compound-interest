import React from 'react';
import { TextInput, Row, Col } from 'react-materialize';

function Form(props) {
	return (
		<div>
			<Row>
				<Col s={4}>
					<TextInput
						width='100%'
						className='white'
						id='1'
						label='Capital Inicial'
						value={props.principal}
						onChange={event => props.onChangePrincipal(event)}
						type='number'
						min='1'
					/>
				</Col>
				<Col s={4}>
					<TextInput
						width='100%'
						className='white'
						id='2'
						label='Taxa de juros'
						value={props.tax}
						onChange={event => props.onChangeMonthlyTax(event)}
						type='number'
						min='1'
					/>
				</Col>
				<Col s={4}>
					<TextInput
						width='100%'
						className='white'
						id='3'
						label='Período (meses)'
						value={props.installments}
						onChange={event => props.onChangeInstallment(event)}
						type='number'
						min='1'
					/>
				</Col>
			</Row>
		</div>
	);
}

export default Form;
