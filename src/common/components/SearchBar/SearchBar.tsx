import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../../contexts/StoreContext";
import { RootStore } from "../../../stores/RootStore";

const SearchBar = () => {
	const router = useRouter();
	const { userStore } = useContext<RootStore>(StoreContext);

	return (
		<div
			className={`px-6 py-6 mb-4 bg-white dark:bg-stone-600 rounded-lg shadow-md flex items-center w-full justify-between mt-6`}
		>
			<div className="flex-1">
				<div className="flex items-center">
					<h1 className="text-lg font-semibold text-gray-700 dark:text-white">
						Search
					</h1>
				</div>
				<p className="text-md font-medium text-gray-500 dark:text-gray-300 flex items-center ">
					Use the search bar to search users
				</p>
			</div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					router.push(`/products`);
				}}
			>
				<input
					className="input-field w-96 disabled:opacity-50 px-4 py-3 text-sm border border-gray-400 rounded focus:outline-none focus:ring-2 ring-indigo-500 dark:bg-stone-500 dark:text-white dark:border-transparent dark:placeholder-gray-300"
					placeholder="search"
					onChange={(e) => userStore.searchUser(e.target.value)}
					value={userStore.searchQuery}
				/>
			</form>
		</div>
	);
};

export default observer(SearchBar);
