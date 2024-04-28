export interface ItemState {
    id: number;
    category: number;
    title: string;
    price: number;
    "images": string[];
}

export interface ShopState {
    items: ItemState[];
}

export interface QueryState {
    categoryId?: number;
    offset?: number;
    searchPattern?: string;
}
