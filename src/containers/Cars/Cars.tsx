import React from 'react';
import { observer } from 'mobx-react';

import CarsStore from '../../stores/CarsStore';
import { Car } from '../../models/Car';

import CarsList from '../../component/Cars/CarsList/CarsList';
import CarListDetail from '../../component/Cars/CarListDetail/CarListDetail';
import Template from '../../component/Layout/Template/Template';

import './Cars.scss';

interface Props {
    carsStore: CarsStore;
}

const initialState = () => ({
    activeHoverIndex: -1
});

type State = ReturnType<typeof initialState>;

@observer
class Cars extends React.Component<Props> {
    readonly state: State = initialState();

    componentDidMount(): void {
        const { carsStore } = this.props;
        carsStore.load();
    }

    _onHover = (index: number): void => this.setState({ activeHoverIndex: index });

    get activeHoveredCar (): Car {
        const { carsStore } = this.props;
        const { activeHoverIndex } = this.state;
        return carsStore.cars[activeHoverIndex];
    }

    render() {
        const { carsStore } = this.props;

        return (!carsStore.loading && (
                <div className="car-Cars">
                    <Template>
                        <div className="car-Cars_Inner">
                            <div className="car-Cars_Body">
                                <div className="car-Cars_Columns">
                                    <aside className="car-Cars_Column car-Cars_Column-aside">
                                        <CarsList cars={carsStore.cars} onHover={this._onHover}/>
                                    </aside>

                                    <main className="car-Cars_Column car-Cars_Column-main">
                                        <CarListDetail car={this.activeHoveredCar}/>
                                    </main>
                                </div>
                            </div>
                        </div>
                    </Template>
                </div>
            )
        );
    }
}

export default Cars;
