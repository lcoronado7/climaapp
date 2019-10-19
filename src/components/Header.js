import React from  'react';
import PropTypes from 'prop-types';

export const Header= (props) =>{

    return(
        <div>
            <nav>
                <div className="nav-wrapper light-blue darken-2">
                    <span className="brand-logo">{props.titulo}</span>
                </div>
            </nav>
        </div>
    )
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;