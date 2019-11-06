import React from 'react';
import { observer } from 'mobx-react';
import {Link, RouteComponentProps} from 'react-router-dom';

import CarsStore from '../../stores/CarsStore';
import Template from '../../component/Layout/Template/Template';
import { currencyFormat } from '../../utils/currencyFormat';

import './CarDetail.scss';

interface RouterProps {
    id: string;
}

interface Props extends RouteComponentProps<RouterProps> {
    carsStore: CarsStore;
}

@observer
class CarDetail extends React.Component<Props> {
    componentDidMount(): void {
        this.loadCarById();
    }

    loadCarById = (): void => {
        const { carsStore } = this.props;
        const id = this.props.match.params.id;
        carsStore.loadCarById(id);
    }

    render() {
        const { carsStore } = this.props;
        const car = carsStore.selectedCar;

        return (
            <Template loading={carsStore.loadingCar}>
                {car ?
                    <div className="car-Detail">
                        <div className="car-Detail_Inner">
                            <div className="car-Detail_Columns">
                                <div className="car-Detail_Column car-Detail_Column-content">
                                    <div className="car-Detail_Body">
                                        <Link to="/" className="car-Detail_Back">
                                            Go back to cars
                                        </Link>

                                        <div className="car-Detail_Meta">
                                            {car.recommended_engine && (
                                                <p className="car-Detail_Kicker">
                                                    {car.recommended_engine}
                                                </p>
                                            )}
                                            <h2 className="car-Detail_Title">{car.model} {car.make}</h2>
                                            <p className="car-Detail_Text">{car.summary}</p>
                                        </div>

                                        <div className="car-Detail_KeyInformation">
                                            <div className="car-Detail_Information">
                                                <p className="car-Detail_Key">Price from</p>
                                                <p className="car-Detail_Value">
                                                    {currencyFormat(car.rrp, 'GBP')}
                                                </p>
                                            </div>

                                            <div className="car-Detail_Information">
                                                <p className="car-Detail_Key">Carwow rating</p>
                                                <p className="car-Detail_Value">
                                                    {car.carwow_rating} / 10
                                                </p>
                                            </div>
                                        </div>

                                        {car.available_colors && (
                                            // Id Move this into it's own component or out of the render
                                            <div className="car-Detail_Colours">
                                                <p className="car-Detail_Key">Available colours</p>
                                                <ul className="car-Detail_List">
                                                    {car.available_colors.map(color => {
                                                        return (
                                                            <li className="car-Detail_Item"
                                                                style={{ backgroundColor: color }} />
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="car-Detail_Column car-Detail_Column-image">
                                    <div className="car-Detail_ImageContainer">
                                        <img
                                            alt={`${car.make} ${car.model}`}
                                            src={car.img_url} className="car-Detail_Image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <p>There was a problem loading this car, please try again</p>
                        <button onClick={this.loadCarById}>Retry</button>
                    </div>
                }
            </Template>
        )
    }
}

export default CarDetail;
