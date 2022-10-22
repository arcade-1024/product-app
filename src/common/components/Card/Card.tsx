import { ReactNode, useContext, useEffect, useState } from "react";
import { Plus, X } from "react-feather";
import { StoreContext } from "../../../contexts/StoreContext";
import { RootStore } from "../../../stores/RootStore";
export interface CardInterface {
	id: number;
	cardTitle: ReactNode;
	cardBody: string;
	tags: string[];
	// setUserData: React.Dispatch<React.SetStateAction<UserDataInterface[]>>;
}
import { v4 } from "uuid";
import { observer } from "mobx-react-lite";
export default observer(function Card({
	id,
	tags,
	cardBody,
	cardTitle,
}: // setUserData,
CardInterface) {
	const { userStore } = useContext<RootStore>(StoreContext);
	// const onDeleteClick = (id: number) => {
	// 	setUserData(userData.filter((user) => user.id !== id));
	// };
	const [currentTime, setCurrentTime] = useState(Date.now());
	useEffect(() => {
		setInterval(() => {
			setCurrentTime(Date.now());
		}, 100);
		return () => {
			setCurrentTime(null);
		};
	}, []);

	return (
		<>
			<div className="w-full overflow-hidden shadow-lg bg-white dark:bg-stone-600 rounded-lg relative">
				<div
					className="group absolute right-2 top-2"
					onClick={() => {
						userStore.addProductToCart(id);
					}}
				>
					<button className=" text-gray-600 dark:text-gray-300  group-hover:px-2 group-hover:py-1 rounded-lg group-hover:text-white group-hover:bg-indigo-500 transition-all flex items-center">
						<span className="hidden  group-hover:block text-sm mr-1">
							add to cart
						</span>

						<Plus size={18} />
					</button>
				</div>

				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">{cardTitle}</div>
					<p className="text-gray-700 text-base dark:text-gray-300">
						{cardBody}
					</p>
				</div>
				<div className="px-6 pt-4 pb-2">
					{tags.map((tag) => (
						<span
							className="inline-block bg-gray-200 dark:bg-stone-500 dark:text-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
							key={tag}
						>
							#{tag}
						</span>
					))}
				</div>
			</div>
		</>
	);
});
