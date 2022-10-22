import { enableStaticRendering } from "mobx-react-lite";
import { UserStore } from "./UserStore";

enableStaticRendering(typeof window === "undefined");

export class RootStore {
	userStore: UserStore;

	constructor() {
		this.userStore = new UserStore(this);
	}

	hydrate(data) {
		if (!data) return;
	}
}
