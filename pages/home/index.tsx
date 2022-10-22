import React from "react";
import HomeContainer from "../../src/container/Home/HomeContainer";
import axios from "axios";

export async function getServerSideProps(context: any) {
	try {
		const result = await axios(`https://api.publicapis.org/entries`);
		if (result)
			return {
				props: { data: result.data.entries },
			};
		else {
			return {
				props: { data: [] },
			};
		}
	} catch {
		return {
			props: { data: [] },
		};
	}
}
export default function HomePage(props: any) {
	return <HomeContainer data={[...props.data]} />;
}
