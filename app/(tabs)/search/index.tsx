import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { useKmbRouteList } from "@/hooks/api";
import { Link, useRouter } from "expo-router";

const SearchScreen = () => {
	const { data } = useKmbRouteList();
	const router = useRouter();

	return (
		<View>
			<FlatList
				className="p-5"
				data={data?.data}
				renderItem={({ item }) => (
					<Pressable
						onPress={() => router.push("/search")}
						className="flex flex-row justify-between p-5 w-full"
					>
						<Text>{item.route}</Text>
						<Text className="ml-10">{item.dest_tc}</Text>
					</Pressable>
				)}
				keyExtractor={(item, index) => index.toString()}
			/>
		</View>
	);
};

export default SearchScreen;
