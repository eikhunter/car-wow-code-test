import React from 'react';

import Header from '../Header/Header';
import Loader from '../Loader/Loader';

import './Template.scss';

interface Props {
    loading?: boolean
}

const Template: React.FC<Props> = ({ children, loading }) => {
    return (
        <div className="tmp-Template">
            <Header />

            {!loading ? children : <Loader />}
        </div>
    )
};

export default Template;
