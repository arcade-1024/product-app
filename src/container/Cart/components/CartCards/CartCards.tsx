import React, { useContext } from "react";
import { ReactNode } from "react";
import { Trash2 } from "react-feather";
import { StoreContext } from "../../../../contexts/StoreContext";
import { RootStore } from "../../../../stores/RootStore";

export interface CardInterface {
	id: string | number;
	cardTitle: ReactNode;
	cardBody: string;
	tags: string[];
	count: number;
	price: number;
	// setUserData: React.Dispatch<React.SetStateAction<UserDataInterface[]>>;
}
const CartCards = ({
	cardBody,
	cardTitle,
	id,
	tags,
	count,
	price,
}: CardInterface) => {
	const { userStore } = useContext<RootStore>(StoreContext);

	return (
		<div className="flex items-center justify-between shadow-md rounded-md bg-gray-100 dark:bg-stone-500 px-6 py-4 mb-6 last:mb-0">
			<div className="h-10 w-10 rounded-full flex items-center justify-center text-xl bg-indigo-50 dark:bg-stone-400 text-center">
				{count}
			</div>
			<div className="px-6 py-4">
				<div className="flex  items-center mb-2">
					<div className="font-bold text-xl dark:text-white ">{cardTitle}</div>
				</div>
				<p className="text-gray-700 text-base dark:text-gray-300 truncate max-w-xl">
					{cardBody}
				</p>
			</div>
			<button
				className="h-10 w-10 flex items-center justify-center transition-all hover:text-red-500    hover:bg-red-50 hover:shadow rounded-full dark:hover:bg-stone-400"
				onClick={() => {
					userStore.deleteProductToCart(id);
				}}
			>
				<Trash2 />
			</button>
		</div>
	);
};

export default CartCards;
