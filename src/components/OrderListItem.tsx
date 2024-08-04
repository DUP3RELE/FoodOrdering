import { StyleSheet, Text, Image, Pressable } from "react-native";
import Colors from "@/constants/Colors";
import { Order } from "@/types";
import { Link, useSegments } from "expo-router";

export const defaultPizzaImage =
	"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type OrderListItemProps = {
	order: Order;
};

const OrderListItem = ({ order }: OrderListItemProps) => {
	const segments = useSegments();

	return (
		<Link
			href={`/${segments[0]}/menu/${order.id}`}
			asChild
		>
			<Pressable style={styles.container}>
				<Text style={styles.title}>{order.created_at}</Text>
				<Text style={styles.title}>{order.total}</Text>
				<Text style={styles.price}>${order.status}</Text>
				<Text>Go to details</Text>
			</Pressable>
		</Link>
	);
};

export default OrderListItem;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		padding: 10,
		borderRadius: 20,
		flex: 1,
	},
	title: { fontSize: 18, fontWeight: "600", marginVertical: 10 },

	price: {
		color: Colors.light.tint,
		fontWeight: "bold",
	},
	image: { width: "100%", aspectRatio: 1 },
});
