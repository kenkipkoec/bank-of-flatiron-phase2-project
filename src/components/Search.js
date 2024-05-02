import { Box, Input } from '@chakra-ui/react';

export const Search = ({ search, setSearch }) => {
	return (
		<Box>
			{' '}
			<Input
				placeholder="Search"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</Box>
	);
};
