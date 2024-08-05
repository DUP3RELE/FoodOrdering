import { FontAwesome } from "@expo/vector-icons";
import { Stack, Link, withLayoutContext } from "expo-router";
import { Pressable } from "react-native";
import Colors from "@/constants/Colors";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export default function OrdersStack() {
	return (
		<Stack>
			<Stack.Screen
				name='list'
				options={{ headerShown: false }}
			/>
		</Stack>
	);
}
