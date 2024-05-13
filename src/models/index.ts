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
    error?: {
		status: string;
		error: string;
	};
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

export interface ItemDetailsState {
	data: ItemDetailsState;
	isLoading?: boolean;
	error?: {
		status: string;
		error: string;
	};
	isError?: boolean;
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

export interface CategoriesState {
	data: Category[];
	isLoading?: boolean;
	isError?: boolean;
}

export interface CartState {
    items?: ItemsState;
    cart: ItemInCartState[];
    options: OptionsState;
}

export interface CartCartState {
    carts: CartState;
}

export interface ActionState {
	type: string;
}

export interface QuantityState {
	quantity: number;
	setQuantity: (value: number) => void;
}

export interface EncryptData {
	phone?: string;
	address?: string;
}
