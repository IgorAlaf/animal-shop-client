export interface ICart {
	title: string
	sublist: ISubSection[]
	image: string
	path: string
	addition?: string
}

export interface ISubSection {
	title: string
	path: string
}
