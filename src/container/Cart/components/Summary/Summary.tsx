import React from "react";
import { ProductDataInterface } from "../../../Products/ProductsContainer";
import { CartDataInterface } from "../../CartContainer";
export interface SummaryInterface {
	products: CartDataInterface[];
}
const Summary = ({ products }: SummaryInterface) => {
	let total = 0;
	const totalPrice = () => {
		products.forEach((product) => {
			total += product.count * product.price;
		});
		return total;
	};
	return (
		<>
			<div className="border-b pb-8">
				{products.map((product) => (
					<div
						className="flex justify-between items-center mt-4"
						key={product.id}
					>
						<span>{product.name}</span>
						<span className="text-lg font-medium">
							$ {product.count * product.price}
						</span>
					</div>
				))}
			</div>
			<div className="flex items-center justify-between mt-4">
				<span className="text-xl">Total</span>
				<div className="text-xl font-medium">${totalPrice()}</div>
			</div>
		</>
	);
};

export default Summary;
