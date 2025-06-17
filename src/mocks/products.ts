type Product = {
	title: string
	origin: string
	price: number
	currency: 'RUB' | 'USD' | 'EUR'
	imageUrl: string
}

export const products: Product[] = [
	{
		title: 'iPhone 13',
		origin: 'США',
		price: 69990,
		currency: 'USD',
		imageUrl:
			'https://www.dxomark.com/wp-content/uploads/medias/post-95995/Apple-iPhone-13-featured-image-packshot-review.jpg',
	},
	{
		title: 'Чайник Bosch',
		origin: 'Германия',
		price: 34900,
		currency: 'RUB',
		imageUrl:
			'https://greenwest39.ru/sites/greenwest39.ru/files/field/image/bosch-twk6a511.jpeg',
	},
	{
		title: 'BMW X5',
		origin: 'Германия',
		price: 7300000,
		currency: 'USD',
		imageUrl:
			'https://www.bmw.ru/content/dam/bmw/common/all-models/x-series/x5/2023/navigation/bmw-x-series-x5-40i-modelfinder.png',
	},
	{
		title: 'Вода ПЕЙ',
		origin: 'Россия',
		price: 39000,
		currency: 'RUB',
		imageUrl:
			'https://watertodrink.ru/upload/iblock/220/220730ad902d669ee7d59f449878d7af.jpg',
	},
	{
		title: 'Gordon Black',
		origin: 'Великобритания',
		price: 1729000,
		currency: 'RUB',
		imageUrl:
			'https://a-cdn.lakestone.ru/image/cache/catalog/Gordon%20Black/33_003-600x600.jpg',
	},
	{
		title: 'Игрушка Стич',
		origin: 'Россия',
		price: 500000,
		currency: 'RUB',
		imageUrl: 'https://ir.ozone.ru/s3/multimedia-i/c1000/6434137842.jpg',
	},
	{
		title: 'Вино Chateau Margaux',
		origin: 'Франция',
		price: 25000,
		currency: 'EUR',
		imageUrl:
			'https://luding-group.ru/upload/iblock/4e7/wm_4e704502839c7256470884cb5aa380d1.png',
	},
]
