import React, { useContext } from "react";
import PageLayout from "../../common/layout/PageLayout/PageLayout";
import NavBar from "../../common/components/NavBar/NavBar";
import SearchBar from "../../common/components/SearchBar/SearchBar";
import { StoreContext } from "../../contexts/StoreContext";
import { RootStore } from "../../stores/RootStore";
import CartCards from "./components/CartCards/CartCards";
import { observer } from "mobx-react-lite";
import Summary from "./components/Summary/Summary";
export interface CartDataInterface {
	id: number;
	name: string;
	desc: string;
	tags: string[];
	count: number;
	price: number;
}
const CartContainer = () => {
	const { userStore } = useContext<RootStore>(StoreContext);
	return (
		<PageLayout>
			<NavBar />
			<span className="mx-auto text-center w-1/3 text-gray-500 dark:text-gray-300 font-poppins font-light leading-7">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor.
			</span>
			<SearchBar />
			<div className="flex rounded-lg   bg-white dark:bg-stone-600 shadow-md dark:shadow-zinc-900 mt-4  min-h-[500px] max-h-[800px]">
				<div className="flex-1 p-6">
					{userStore.cart.map((item) => (
						<CartCards
							id={item.id}
							cardTitle={item.name}
							cardBody={item.desc}
							tags={item.tags}
							count={item.count}
							price={item.price}
							key={item.id}
						/>
					))}
					{userStore.cart.length === 0 && (
						<div className="h-full flex flex-col items-center justify-center  dark:bg-stone-600">
							<img src="/assets/box.png" className="h-32" alt="empty-box" />
							<div className="text-2xl font-light mt-4 ">No item in cart</div>
						</div>
					)}
				</div>
				<div className="flex-1 h-full flex flex-col border-l dark:border-stone-800 relative">
					<div className="w-full flex-1 p-6 ">
						<h1 className="text-4xl">Summary</h1>
						<Summary products={userStore.cart} />
					</div>
					<div className="w-full p-6 bg-indigo-50 dark:bg-stone-500 flex items-center justify-end">
						{/* <button
							type="button"
							className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 transition bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  sm:mt-0 sm:w-auto sm:text-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 dark:bg-gray-100  	 dark:bg-opacity-70 dark:hover:bg-gray-50 dark:hover:bg-opacity-100"
						>
							Cancel
						</button> */}
						<button
							type="button"
							className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 transition bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none  sm:ml-3 sm:w-auto sm:text-sm dark:text-indigo-50 dark:bg-opacity-70 dark:hover:bg-opacity-100 disabled:opacity-50"
							disabled={userStore.cart.length === 0}
						>
							Proceed to checkout
						</button>
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export default observer(CartContainer);
