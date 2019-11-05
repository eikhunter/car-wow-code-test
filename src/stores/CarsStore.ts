import { observable, action } from 'mobx';

import { Car } from '../models/Car';

export default class CarsStore {
    @observable cars: Car[];
    @observable loading: boolean;

    constructor() {
        this.cars = [];
        this.loading = true;
    }

    @action async load (): Promise<void> {
        try {
            this.loading = true;

            const response = await fetch('https://warm-dawn-92320.herokuapp.com/models');
            this.cars = await response.json();

            this.loading = false;
        } catch (e) {

        }
    }
}
