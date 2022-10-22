import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Home, Settings, ShoppingCart, User } from "react-feather";
const NavBar = () => {
	const router = useRouter();
	const isActive = (tab: string) =>
		router.pathname.split("/").includes(tab) &&
		"text-indigo-500 dark:text-indigo-300";
	const showIcon = () => {
		switch (router.pathname.split("/")[1]) {
			case "home":
				return <Home size={60} strokeWidth={0.8} className="mr-4" />;
			case "setting":
				return <Settings size={60} strokeWidth={0.8} className="mr-4" />;
			case "user":
				return <User size={60} strokeWidth={0.8} className="mr-4" />;
		}
	};
	return (
		<>
			<div className="flex items-center w-full rounded-lg px-4 py-3 bg-white dark:bg-stone-600 shadow-md dark:shadow-zinc-900">
				<div className="flex w-full justify-between items-center text-sm font-medium text-gray-700 dark:text-gray-200">
					{/* <Link href={`/home`} className="">
						<span className={`cursor-pointer ${isActive("home")}`}>Home</span>
					</Link> */}
					<div className="flex items-center">
						<Link href={`/products`} className="">
							<span className={`mx-4 cursor-pointer ${isActive("products")}`}>
								All products
							</span>
						</Link>
						<Link href={`/setting`} className="">
							<span className={`cursor-pointer ${isActive("setting")}`}>
								Setting
							</span>
						</Link>
					</div>
					<Link href={`/cart`} className="">
						<span className={`mx-4 cursor-pointer ${isActive("cart")}`}>
							<ShoppingCart />
						</span>
					</Link>
				</div>
			</div>
			{/* <pre>{JSON.stringify(router.pathname.split("/")[1])}</pre> */}
			<div className="mt-8 mb-4 flex justify-center items-center  text-7xl font-extralight font-poppins capitalize">
				{showIcon()}
				{router.pathname.split("/")[1]}
			</div>
		</>
	);
};

export default NavBar;
