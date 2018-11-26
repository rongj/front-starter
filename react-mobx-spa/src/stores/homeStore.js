import { observable, action } from 'mobx';

class homeStore {
	@observable count = 0;

	@action increment = () => {
		this.count++;
	}

	@action decrement = () => {
		this.count--;
	}
}

export default new homeStore();