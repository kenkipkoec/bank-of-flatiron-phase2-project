import { Td, Tr } from '@chakra-ui/react';

export const Transaction = ({
	transaction: { id, date, description, category, amount },
}) => {
	return (
		<Tr>
			<Td>{id}</Td>
			<Td>{date}</Td>
			<Td>{description}</Td>
			<Td>{category}</Td>
			<Td>{amount}</Td>
		</Tr>
	);
};
