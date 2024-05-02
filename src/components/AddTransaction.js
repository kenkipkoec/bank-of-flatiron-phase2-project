import {
	Button,
	Center,
	Heading,
	Input,
	Stack,
	VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

export const AddTransaction = ({ handleAddTransaction }) => {
	const [formData, setFormData] = useState({
		date: '',
		description: '',
		category: '',
		amount: '',
	});

	const handleFormData = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		handleAddTransaction(formData);

		setFormData({
			date: '',
			description: '',
			category: '',
			amount: '',
		});
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<VStack spacing={3}>
				<Center>
					<Heading as={'h5'}>Add Transaction</Heading>
				</Center>
				<Stack direction={'row'} spacing={3}>
					<Input
						placeholder="Date"
						type="datetime-local"
						value={formData.date}
						name="date"
						onChange={handleFormData}
					/>
					<Input
						placeholder="Description"
						value={formData.description}
						name="description"
						onChange={handleFormData}
					/>
					<Input
						placeholder="Category"
						value={formData.category}
						name="category"
						onChange={handleFormData}
					/>
					<Input
						placeholder="Amount"
						value={formData.amount}
						name="amount"
						onChange={handleFormData}
					/>
				</Stack>
				<Button colorScheme="blue" type="submit">
					Add transaction
				</Button>
			</VStack>
		</form>
	);
};
