import { useEffect, useState } from 'react';
import { Heading, VStack } from '@chakra-ui/react';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { Search } from './components/Search';

function App() {
	const [transactions, setTransactions] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		fetch('http://localhost:4000/transactions', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((transactions) => setTransactions(transactions))
			.catch((err) => console.log(err));
	}, []);

	const handleAddTransaction = (newTransaction) => {
		setTransactions([
			...transactions,
			{
				id: transactions.length + 1,
				...newTransaction,
				date: new Date(newTransaction.date).toDateString(),
			},
		]);
	};

	const filteredTransactions = transactions.filter((transaction) =>
		transaction.description.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<VStack spacing={3}>
			<Heading as="h3">Bank Of Flatiron</Heading>
			<AddTransaction handleAddTransaction={handleAddTransaction} />
			<Search search={search} setSearch={setSearch} />
			<TransactionList transactions={filteredTransactions} />
		</VStack>
	);
}

export default App;
