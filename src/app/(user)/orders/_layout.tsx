import { FontAwesome } from "@expo/vector-icons";
import { Stack, Link } from "expo-router";
import { Pressable } from "react-native";
import Colors from "@/constants/Colors";

export default function OrdersStack() {
	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{ title: "Orders" }}
			/>
		</Stack>
	);
}
