import React from "react";
import {
	FixedTableCell,
	FixedTableRow,
} from "../../../../common/components/FixedTable/FixedTable";
import { TableDataInterface } from "../../HomeContainer";

const TableRow = ({
	API,
	Auth,
	Category,
	Cors,
	Description,
	HTTPS,
	Link,
}: TableDataInterface) => {
	return (
		<FixedTableRow
			className={`border-b dark:border-stone-800 dark:text-white transition-all duration-300 w-full min-w-min flex items-center`}
			key={`${API}-${Category}-${Description}`}
		>
			<FixedTableCell className="w-full py-6 pl-5">{API}</FixedTableCell>
			<FixedTableCell className="w-full py-6 break-words pr-2">
				{Description}
			</FixedTableCell>
			{/* <FixedTableCell className="w-full py-6">{Auth}</FixedTableCell>
			<FixedTableCell className="w-full py-6">{HTTPS}</FixedTableCell>
			<FixedTableCell className="w-full py-6">{Cors}</FixedTableCell> */}
			<FixedTableCell className="w-full py-6">
				<a target={"_blank"} href={Link} rel="noreferrer">
					link
				</a>
			</FixedTableCell>
			<FixedTableCell className="w-full py-6">{Category}</FixedTableCell>
		</FixedTableRow>
	);
};

export default TableRow;
