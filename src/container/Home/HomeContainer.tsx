import React, { useEffect, useState } from "react";
import NavBar from "../../common/components/NavBar/NavBar";
import PageLayout from "../../common/layout/PageLayout/PageLayout";
import axios from "axios";
import { FixedTable } from "../../common/components/FixedTable/FixedTable";
import TableRow from "./components/TableRow/TableRow";
import Image from "next/image";
import SearchBar from "../../common/components/SearchBar/SearchBar";

export interface TableDataInterface {
	API: string;
	Description: string;
	Auth: string;
	HTTPS: boolean;
	Cors: string;
	Link: string;
	Category: string;
}

export interface HomeContainerInterface {
	data: TableDataInterface[];
}
const HomeContainer = ({ data }: HomeContainerInterface) => {

	return (
		<PageLayout>
			<NavBar />
			<span className="mx-auto text-center w-1/3 text-gray-500 dark:text-gray-300 font-poppins font-light leading-7">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor.
			</span>
			<SearchBar />

			<div className="flex flex-col rounded-lg  pt-5 bg-white dark:bg-stone-600 shadow-md dark:shadow-zinc-900 mt-4 ">
				<div className="flex flex-col flex-1 px-6 mb-4  justify-center">
					<div className="text-xl font-semibold text-gray-800 dark:text-gray-50">
						Table
					</div>
					<div className="text-sm font-medium text-gray-600 dark:text-gray-300">
						You can see all table data.
					</div>
				</div>
				{data.length !== 0 && (
					<>
						<table>
							<thead className="bg-indigo-50 text-gray-600 dark:bg-stone-800 dark:text-gray-50  w-full  block">
								<tr className="w-full inline-flex text-sm font-semibold text-left uppercase">
									<th className="w-full pl-6 py-3" key={"header-1"}>
										API
									</th>
									<th className="w-full py-3" key={"header-2"}>
										Description
									</th>
									<th className="w-full py-3" key={"header-6"}>
										Link
									</th>
									<th className="w-full py-3" key={"header-7"}>
										Category
									</th>
								</tr>
							</thead>
						</table>
						<FixedTable className={`min-h-[450px] max-h-[550px]`}>
							{data.map((data) => (
								<TableRow
									API={data.API}
									Auth={data.Auth}
									Category={data.Category}
									Cors={data.Cors}
									Description={data.Description}
									HTTPS={data.HTTPS}
									Link={data.Link}
									key={`${data.API}-${data.Description}-${data.Category}`}
								/>
							))}
						</FixedTable>
					</>
				)}
				{data.length === 0 && (
					<div className="h-96 flex flex-col items-center justify-center rounded-lg px-6 py-5 bg-white dark:bg-stone-600 shadow-md dark:shadow-zinc-900 mt-4">
						<img src="/assets/box.png" className="h-44" alt="empty-box" />
						<div className="text-3xl font-light mt-4 ">No data found</div>
					</div>
				)}
			</div>
		</PageLayout>
	);
};

export default HomeContainer;
