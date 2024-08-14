import { CartItem, Order, Tables } from "@/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { randomUUID } from "expo-crypto";
import { useInsertOrder } from "@/api/orders";
import { useRouter } from "expo-router";
import { useInsertOrderIitems } from "@/api/order-items";

type Product = Tables<"products">;

type CartType = {
	items: CartItem[];
	addItem: (product: Product, size: CartItem["size"]) => void;
	updateQuantity: (itemId: string, amount: -1 | 1) => void;
	total: number;
	checkout: () => void;
};

export const CartContext = createContext<CartType>({
	items: [],
	addItem: () => {},
	updateQuantity: () => {},
	total: 0,
	checkout: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
	const [items, setItems] = useState<CartItem[]>([]);

	const { mutate: insertOrder } = useInsertOrder();
	const { mutate: insertOrderItems } = useInsertOrderIitems();
	const router = useRouter();

	const addItem = (product: Product, size: CartItem["size"]) => {
		const exisitingItem = items.find(
			(item) => item.product == product && item.size == size
		);
		if (exisitingItem) {
			updateQuantity(exisitingItem.id, 1);
			return;
		}

		const newCartItem: CartItem = {
			id: randomUUID(),
			product,
			product_id: product.id,
			size,
			quantity: 1,
		};

		setItems([newCartItem, ...items]);
	};

	const updateQuantity = (itemId: string, amount: -1 | 1) => {
		setItems(
			items
				.map((item) =>
					item.id !== itemId
						? item
						: { ...item, quantity: item.quantity + amount }
				)
				.filter((item) => item.quantity > 0)
		);
	};

	const total = items.reduce(
		(sum, item) => (sum += item.product.price * item.quantity),
		0
	);

	const clearCart = () => {
		setItems([]);
	};

	const checkout = () => {
		insertOrder({ total }, { onSuccess: saveOrderItems });
	};

	const saveOrderItems = (order: Tables<"orders">) => {
		const orderItems = items.map((CartItem) => ({
			order_id: order.id,
			product_id: CartItem.product_id,
			quantity: CartItem.quantity,
			size: CartItem.size,
		}));

		insertOrderItems(orderItems, {
			onSuccess() {
				clearCart();
				router.push(`/(user)/orders/${order.id}`);
			},
		});
	};
	return (
		<CartContext.Provider
			value={{ items, addItem, updateQuantity, total, checkout }}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
