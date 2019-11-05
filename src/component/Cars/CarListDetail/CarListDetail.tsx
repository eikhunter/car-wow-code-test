import React from 'react'

import { Car } from '../../../models/Car';

import './CarListDetail.scss';
import {currencyFormat} from '../../../utils/currencyFormat';

interface Props {
    car?: Car;
}

const CarListDetail: React.FC<Props> = ({ car }) => {
    return (car
            ?
            <div className="car-ListDetail">
                <div className="car-ListDetail_Body">
                    <div className="car-ListDetail_Header">
                        <h3 className="car-ListDetail_Title">{car.make} {car.model}</h3>
                        <p className="car-ListDetail_Price">
                            {currencyFormat(car.rrp, 'GBP')}
                        </p>
                    </div>
                    <p className="car-ListDetail_Text">{car.summary}</p>
                </div>

                <div className="car-ListDetail_ImageContainer">
                    <img alt="" src={car.img_url} className="car-ListDetail_Image"/>
                </div>

                <div className="car-ListDetail_Footer">
                    <button className="car-ListDetail_Button">Find out more</button>
                </div>
            </div>
            : <p className="car-ListDetail_Empty">Hover over a car for quick comparison, or click to view more</p>
    );
};

export default CarListDetail;
