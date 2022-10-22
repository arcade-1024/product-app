import React, { useContext, useEffect, useState } from "react";
import PageLayout, {
	contextInterface,
} from "../../common/layout/PageLayout/PageLayout";
import NavBar from "../../common/components/NavBar/NavBar";
import Card from "../../common/components/Card/Card";
import Image from "next/image";
import SearchBar from "../../common/components/SearchBar/SearchBar";
import { USER_DATA } from "../../common/constants/constant";
import { StoreContext } from "../../contexts/StoreContext";
import { RootStore } from "../../stores/RootStore";
import { observer } from "mobx-react-lite";

export interface ProductDataInterface {
	id: number;
	name: string;
	desc: string;
	tags: string[];
	price: number;
}
const UserContainer = () => {
	const { userStore } = useContext<RootStore>(StoreContext);
	useEffect(() => {
		userStore.search();
	}, [userStore.searchQuery]);

	return (
		<PageLayout>
			<NavBar />
			<span className="mx-auto text-center w-1/3 text-gray-500 dark:text-gray-300 font-poppins font-light leading-7">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</span>
			<SearchBar />
			<div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8  mt-4">
				{userStore.filteredUserData.map((user) => (
					<Card
						id={user.id}
						cardTitle={user.name}
						cardBody={user.desc}
						tags={user.tags}
						key={user.id}
					/>
				))}
			</div>
			{userStore.filteredUserData.length === 0 && (
				<div className="h-96 flex flex-col items-center justify-center rounded-lg px-6 py-5 bg-white dark:bg-stone-600 shadow-md dark:shadow-zinc-900 mt-4">
					<img src="/assets/box.png" className="h-44" alt="empty-box" />
					<div className="text-3xl font-light mt-4 ">No product found</div>
				</div>
			)}
		</PageLayout>
	);
};

export default observer(UserContainer);
