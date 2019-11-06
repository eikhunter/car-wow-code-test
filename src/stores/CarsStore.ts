import { observable, action } from 'mobx';

import { Car } from '../models/Car';

export default class CarsStore {
    @observable cars: Car[]; // List of cards
    @observable loading: boolean; // Loading list of cars
    @observable loadingCar: boolean; // Loading car detail
    @observable selectedCar?: Car; // Store the car that is selected

    constructor() {
        this.cars = [];
        this.loading = true;
        this.loadingCar = true;
    }

    @action async load (): Promise<void> {
        try {
            this.loading = true;

            // Create a fetch function that takes parameters so code isn't repeated for each http request
            const response = await fetch('https://warm-dawn-92320.herokuapp.com/models');
            this.cars = await response.json();

            this.loading = false;
        } catch (e) {
            // Add more error handling here - i.e. Pop up with instruction on how to fix
            return e;
        }
    }

    @action async loadCarById(id: string): Promise<void> {
        // Would move this into a separate store but for time sake i am keeping it in the same store as the listing page
        try {
            this.loadingCar = true;

            const response = await fetch(`https://warm-dawn-92320.herokuapp.com/model/${id}`);
            this.selectedCar = await response.json();
            console.log(this.selectedCar);

            this.loadingCar = false;
        } catch (e) {
            // Add more error handling here - i.e. Pop up with instruction on how to fix
            return e;
        }
    }
}
