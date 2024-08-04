import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import Button from "@/components/Button";
import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

export default function signOn() {
	const [email, setEmail] = useState("");
	const [Password, setPassword] = useState("");

	const createAccount = () => {
		console.warn("Account Created!");
	};
	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: "Create Account" }} />
			<Text style={styles.label}>Email</Text>
			<TextInput
				value={email}
				onChangeText={setEmail}
				placeholder='Email'
				style={styles.input}
			/>
			<Text style={styles.label}>Password</Text>
			<TextInput
				value={Password}
				placeholder='Password'
				style={styles.input}
				onChangeText={setPassword}
			/>
			<Button
				text={"Create Account"}
				onPress={createAccount}
			/>

			<Link
				href={"/(auth)/sign-in"}
				style={styles.textButton}
			>
				Log in
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 10,
	},
	input: {
		backgroundColor: "white",
		padding: 10,
		borderRadius: 5,
		marginTop: 5,
		marginBottom: 20,
	},
	label: {
		color: "gray",
		fontSize: 16,
	},
	image: {
		width: "50%",
		aspectRatio: 1,
		alignSelf: "center",
	},
	textButton: {
		alignSelf: "center",
		fontWeight: "bold",
		color: Colors.light.tint,
		marginVertical: 10,
	},
});
