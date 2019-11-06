import React from 'react'

import { Car } from '../../../models/Car';

import CarListItem from '../CarListItem/CarListItem';

import './CarsList.scss';

interface Props {
    cars: Car[];
    onHover: (index: number) => void;
}

const CarsList: React.FC<Props> = ({ cars, onHover }) => {
    return (
        <div className="car-List">
            <ul className="car-List_List">
                {cars.map((car, index) => (
                    <li key={car.id} onMouseEnter={() => onHover(index)} className="car-List_Item">
                        <CarListItem car={car}  />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarsList;
