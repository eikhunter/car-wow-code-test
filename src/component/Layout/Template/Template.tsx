import React from 'react';

import Header from '../Header/Header';

import './Template.scss';

interface Props {

}

const Template: React.FC<Props> = ({ children }) => {
    return (
        <div className="tmp-Template">
            <Header />

            {children}
        </div>
    )
};

export default Template;
