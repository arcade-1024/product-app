import { action, computed, makeObservable, observable } from "mobx";
import { USER_DATA } from "../common/constants/constant";
import { CartDataInterface } from "../container/Cart/CartContainer";
import { ProductDataInterface } from "../container/Products/ProductsContainer";
import { RootStore } from "./RootStore";

export class UserStore {
	private root: RootStore;
	@observable userData: ProductDataInterface[] = USER_DATA;
	@observable filteredUserData: ProductDataInterface[] = [];
	@observable searchQuery: string = "";
	@observable cart: CartDataInterface[] = [];

	constructor(root: RootStore) {
		this.root = root;
		makeObservable(this);
	}

	@action
	deleteUserData(id: number) {
		if (this.searchQuery !== "") {
			this.filteredUserData = this.userData
				.filter((user) => {
					return user.name
						.toLowerCase()
						.includes(this.searchQuery.toLowerCase());
				})
				.filter((user) => user.id !== id);
		} else
			this.filteredUserData = this.userData.filter((user) => user.id !== id);

		this.userData = this.userData.filter((user) => user.id !== id);
	}

	@action
	searchUser(query: string) {
		this.searchQuery = query;
	}

	@action
	search() {
		this.filteredUserData = this.userData.filter((user) => {
			return user.name.toLowerCase().includes(this.searchQuery.toLowerCase());
		});
	}

	@action
	addProductToCart(id: number) {
		const product = <CartDataInterface>(
			this.userData.find((item) => item.id === id)
		);
		const cartProduct = this.cart.find((item) => item.id === product.id);
		if (cartProduct) {
			cartProduct.count += 1;
		} else {
			product.count = 1;
			this.cart.push(product);
		}
	}

	@action
	deleteProductToCart(id: string | number) {
		this.cart = this.cart.filter((item) => item.id !== id);
	}
}
