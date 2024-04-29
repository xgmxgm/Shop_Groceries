import shopIcon from '@/../public/shop.svg'
import cartIcon from '@/../public/cart.svg'
import cashIcon from '@/../public/cash.svg'

interface ILinks {
	icon: string,
	text: string,
	href: string,
}

export const Links: ILinks[] = [
	{
		href: "/",
		text: "Главная",
		icon: shopIcon,
	},
	{
		href: "/cart",
		text: "Корзина",
		icon: cartIcon,
	},
	{
		href: "/buy",
		text: "Купить",
		icon: cashIcon,
	},
]