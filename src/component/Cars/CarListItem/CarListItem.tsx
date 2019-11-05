import React from 'react'
import { Link } from 'react-router-dom';

import { Car } from '../../../models/Car';
import { currencyFormat } from '../../../utils/currencyFormat';

import './CarListItem.scss';

interface Props {
    car: Car;
}

const CarListItem: React.FC<Props> = ({ car }) => {
    return (
        <Link to={`/${car.id}`} className="car-ListItem">
            <div className="car-ListItem_Body">
                <div className="car-ListItem_ImageContainer">
                    <img
                        alt={`${car.make} ${car.model}`}
                        src={car.img_url} className="car-ListItem_Image"
                    />
                </div>

                <div className="car-ListItem_Content">
                    <h3 className="car-ListItem_Title">{car.make} {car.model}</h3>
                    <p className="car-ListItem_Text">from {currencyFormat(car.rrp, 'GBP')}</p>
                </div>
            </div>
        </Link>
    );
};

export default CarListItem;
