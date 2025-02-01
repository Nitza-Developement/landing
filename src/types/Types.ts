export type CardContent = {
	title: string,
	text: string,
	imagenLink: string
}

export type InnerItem = {
	name: string,
	href?: string,
	lang?: string,
}

export type HeaderItem = {
	name: string,
	href?: string,
	innerItems?: InnerItem[]
}

export type HeaderContent = {
	items: HeaderItem[],
	config: HeaderItem,
	logoName: string
}

export type ButtonType = "Primary" | "Large" | "Icon" | "IconText";

export type BadgeType = "Default" | "count";

