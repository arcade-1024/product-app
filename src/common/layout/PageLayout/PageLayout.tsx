import {
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
	createContext,
	useContext,
} from "react";
import { UserDataInterface } from "../../../container/Products/ProductsContainer";
import { USER_DATA } from "../../constants/constant";

export interface PageLayoutInterface {
	children: ReactNode;
}
export interface contextInterface {
	userData: UserDataInterface[];
	setUser: Dispatch<SetStateAction<UserDataInterface[]>>;
}

const PageLayout = ({ children }: PageLayoutInterface) => {
	const [user, setUserData] = useState<UserDataInterface[]>(USER_DATA);
	// const SiteDataContext = createContext<contextInterface>({
	// 	userData: USER_DATA,
	// 	setUser: setUserData,
	// });
	return (
		<div className=" flex flex-col h-screen items-center flex-1 lg:px-5 py-8 px-2 bg-gray-200 dark:bg-stone-900">
			<div className="sm:w-full max-w-screen-2xl flex flex-col ">
				{children}
			</div>
		</div>
	);
};

export default PageLayout;
