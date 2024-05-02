export interface ItemState {
    id: number;
    category: number;
    title: string;
    price: number;
    "images": string[];
}

export interface ItemsState {
    data: ItemState[];
    isLoading?: boolean;
    error?: string;
    isError?: boolean;
}

export interface OptionsState {
    categoryId: number | undefined;
    offset: number | undefined;
    searchPattern: string | undefined;
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

interface Category {
    id: number;
    title: string;
}

export interface CartState {
    items?: ItemsState;
    cart: ItemInCartState[];
    categories: Category[];
    totalPrice: number;
    totalQuantity: number;
    options: OptionsState;
}

export interface CartCartState {
    carts: CartState;
}