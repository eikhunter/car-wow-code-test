import CarsStore from '../stores/CarsStore';

export class RootStore {
    cars: CarsStore;

    constructor() {
        this.setStores();
        this.cars = new CarsStore();
    }

    getStores = (): Stores => {
        return {
            carsStore: this.cars
        };
    };

    setStores() {
        this.cars = new CarsStore();
    }
}

export default (): Stores => {
    const rootStore = new RootStore();
    return rootStore.getStores();
};

export interface Stores {
    carsStore: CarsStore;
}
