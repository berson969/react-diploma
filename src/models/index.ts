export interface ItemState {
    id: number;
    category: number;
    title: string;
    price: number;
    "images": string[];
}

export interface ItemsState {
    data?: ItemState[];
    isLoading?: boolean;
    error?: string;
}

export interface QueryState {
    categoryId?: number;
    offset?: number;
    searchPattern?: string;
}

interface SizeType  {
    size: string;
    available: boolean;
}

export interface ItemDetailsState {
    id: number;
    category: number;
    title: string;
    images: string[];
    sku: string;
    manufacturer: string;
    color: string;
    material: string;
    reason: string;
    season: string;
    heelSize: string;
    price: number;
    sizes: SizeType[];
}

export interface ItemInCartState {
    id: number;
    title: string;
    size: string;
    count: number;
    price: number;
}

export interface CartState {
    items?: ItemsState;
    cart: ItemInCartState[];
    totalPrice: number;
    totalQuantity: number;
}

export interface CartCartState {
    cart: CartState;
}