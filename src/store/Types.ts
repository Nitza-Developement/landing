export type CardContent = {
	title: string,
	text: string,
	imagenLink: string
}

export type InnerItem = {
	name: string,
	href?: string,
	lang?: string,
	code?: string,
}

export type MegaMenuContent = {
	buttons: {
		name: string;
		id: string;
	}[];
	panels: {
		id: string;
		subPanels: {
			title: string;
			items: InnerItem[];
		}[];
	}[];
}

export type HeaderItem = {
	name: string,
	href?: string,
	innerItems?: InnerItem[]
	megaMenuContent?: MegaMenuContent,
}

export type HeaderContent = {
	itemsMovile: HeaderItem[],
	items: HeaderItem[],
	config: HeaderItem,
	logoName: string
	userList: HeaderItem,
}

export type ButtonType = "Primary" | "Large" | "Icon" | "IconText";

export type BadgeType = "Default" | "count";

export type SubscribeContent = {
	title: string,
	text: string,
	placeHolder: string
}

export type ReviewContent = {
	name: string,
	text: string,
	img: string,
	stars: number
}

