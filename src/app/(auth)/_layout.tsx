import { FontAwesome } from "@expo/vector-icons";
import { Stack, Link } from "expo-router";
import { Pressable } from "react-native";
import { Text } from "@/components/Themed";

export default function MenuStack() {
	return (
		<Stack>
			<Stack.Screen
				name='sign-in'
				options={{
					title: "Sign In",
					headerRight: () => (
						<Link
							href='/(auth)/sign-on'
							asChild
						>
							<Pressable>
								<Text style={{ color: "blue" }}>Sign on</Text>
							</Pressable>
						</Link>
					),
				}}
			/>
		</Stack>
	);
}
