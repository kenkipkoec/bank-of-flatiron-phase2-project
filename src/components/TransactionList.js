import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { Transaction } from './Transaction';

export const TransactionList = ({ transactions }) => {
	return (
		<TableContainer>
			<Table variant={'simple'} size={'md'}>
				<Thead>
					<Tr>
						<Th>Id</Th>
						<Th>Date</Th>
						<Th>Description</Th>
						<Th>Category</Th>
						<Th>Amount</Th>
					</Tr>
				</Thead>
				<Tbody>
					{transactions.map((transaction) => (
						<Transaction
							key={transaction.id}
							transaction={transaction}
						/>
					))}
				</Tbody>
			</Table>
		</TableContainer>
		// <table>
		// 	<th>
		// 		<td>Id</td>
		// 		<td>Date</td>
		// 		<td>Deacription</td>
		// 		<td>Category</td>
		// 		<td>Amount</td>
		// 	</th>
		// 	<tbody>
		// 		{transactions.map((transaction) => (
		// 			<tr key={transaction.id}>
		// 				<td>{transaction.id}</td>
		// 				<td>{transaction.date}</td>
		// 				<td>{transaction.description}</td>
		// 				<td>{transaction.category}</td>
		// 				<td>{transaction.amount}</td>
		// 			</tr>
		// 		))}
		// 	</tbody>
		// </table>
	);
};
