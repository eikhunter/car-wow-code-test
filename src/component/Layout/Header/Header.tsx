import React from 'react'

import './Header.scss';
import Logo from '../../../assets/svgs/Logo';

interface Props {

}

const Header: React.FC = ({}) => {
    return (
        <div className="hd-Header">
            <div className="hd-Header_Inner">
                <div className="hd-Header_Body">
                    <div className="hd-Header_LogoContainer">
                        <Logo />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
