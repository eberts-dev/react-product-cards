import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ProductCard from './components/ProductCard'
import { products } from './mocks/products'

const App: React.FC = () => {
	return (
		<Container
			sx={{
				py: 4,
				maxWidth: { xl: 1440 }, // максимальная ширина
			}}
		>
			<Typography
				variant='h3'
				component='h1'
				sx={{
					mb: 3,
					fontSize: { xs: '28px', sm: '34px', md: '40px' },
				}}
			>
				Карточки товаров
			</Typography>
			<Grid container spacing={2}>
				{products.map((product, index) => (
					<Grid
						key={`${product.title}-${index}`}
						sx={{
							width: { xs: '100%', sm: '50%', md: '31.33%' }, // Адаптивная ширина
							padding: '8px',
						}}
					>
						<ProductCard {...product} />
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default App
