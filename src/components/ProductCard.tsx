import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material'

import React from 'react'
import { getLocale } from '../utils/i18n'

interface ProductCardProps {
	title: string
	origin: string
	price: number
	currency: 'RUB' | 'USD' | 'EUR'
	imageUrl: string
}

const ProductCard: React.FC<ProductCardProps> = ({
	title,
	origin,
	price,
	currency,
	imageUrl,
}) => {
	const theme = useTheme()
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

	// Форматирование цены
	const formattedPrice = new Intl.NumberFormat(getLocale(currency), {
		style: 'currency',
		currency,
		currencyDisplay: 'symbol',
	}).format(currency === 'RUB' ? price / 100 : price / 100)

	return (
		<Card
			sx={{
				maxWidth: isSmallScreen ? '100%' : 345, // Адаптивная ширина
				m: 2,
			}}
		>
			<CardMedia
				component='img'
				height='170'
				image={imageUrl || '/placeholder.lpg'}
				alt={title}
				sx={{ objectFit: 'contain' }}
				onError={(e) => {
					;(e.target as HTMLImageElement).src = '/placeholder.jpg'
				}}
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Страна: {origin}
				</Typography>
				<Typography variant='h6' color='text.primary' sx={{ mt: 1 }}>
					{formattedPrice}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default ProductCard
