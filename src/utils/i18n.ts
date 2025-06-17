export const getLocale = (currency: string): string => {
	switch (currency) {
		case 'RUB':
			return 'ru-RU'
		case 'USD':
			return 'en-US'
		case 'EUR':
			return 'de-DE'
		default:
			return navigator.language
	}
}
