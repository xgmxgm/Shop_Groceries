export interface IGroceries {
	id: number,
	type: "vegetables" | "fruit" | "spices",
	img: string,
	title: string,
	price: number,
	bgColor: string,
	bgForbutton: string,
}

export const Groceries: IGroceries[] = [
	{
		id: 1,
		type: "fruit",
		img: "/fresh-orange.png",
		title: "Aпельсин",
		price: 1.99,
		bgColor: "#FFD8B9",
		bgForbutton: "#FFBD87"
	},
	{
		id: 2,
		type: "fruit",
		img: "/kiwi_2.webp",
		title: "Киви",
		price: 12.99,
		bgColor: "#E0FFB0",
		bgForbutton: "#C3E988"
	},
	{
		id: 3,
		type: "fruit",
		img: "/strawberry.webp",
		title: "Клубника",
		price: 4.99,
		bgColor: "#F4CDCB",
		bgForbutton: "#F7AAA6"
	},
	{
		id: 4,
		type: "fruit",
		img: "/blueberries.png",
		title: "Черника",
		price: 8.99,
		bgColor: "#C6D3FF",
		bgForbutton: "#A9BAF5"
	},
	{
		id: 5,
		type: "vegetables",
		img: "/kartofel.png",
		title: "Картошка",
		price: 1.59,
		bgColor: "#FAC07D",
		bgForbutton: "#F3A452"
	},
	{
		id: 6,
		type: "vegetables",
		img: "/ogurec.png",
		title: "Огурец",
		price: 2.59,
		bgColor: "#A6CE44",  
		bgForbutton: "#587645"
	},
	{
		id: 7,
		type: "vegetables",
		img: "/domates.png",
		title: "Помидор",
		price: 2.99,
		bgColor: "#EC957E",  
		bgForbutton: "#F1664B"
	},
	{
		id: 8,
		type: "vegetables",
		img: "/kobacheck.png",
		title: "Кабачок",
		price: 3.24,
		bgColor: "#C4E3A0",
		bgForbutton: "#95B665"
	},
	{
		id: 9,
		type: "spices",
		img: "/peper.jpg",
		title: "Перец чёрный",
		price: 1.24,
		bgColor: "#858188",
		bgForbutton: "#3A3539"
	},
	{
		id: 10,
		type: "spices",
		img: "/peperRed.png",
		title: "Перец красный",
		price: 1.24,
		bgColor: "#B25841",
		bgForbutton: "#9E2806"
	},
	{
		id: 11,
		type: "spices",
		img: "/koriandr.png",
		title: "Кориандр",
		price: 2.24,
		bgColor: "#987455",
		bgForbutton: "#73502D"
	},
	{
		id: 12,
		type: "spices",
		img: "/Cardamom.png",
		title: "Кардамон",
		price: 2.99,
		bgColor: "#AB9D1E",
		bgForbutton: "#706125"
	},
]