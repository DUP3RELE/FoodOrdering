import { View, Text, Button } from "react-native";
import { supabase } from "@/lib/supabase";

const profileScreen = () => {
	return (
		<View>
			<Text>profile</Text>
			<Button
				title='Sign out'
				onPress={async () => await supabase.auth.signOut()}
			/>
		</View>
	);
};

export default profileScreen;
