import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';

const Layout = props => {
    return (
      <div className={`App ${props.className}`}>
        <Header titulo="proeducatics" />
        {props.children}
      </div>
    );
};

Layout.propTypes = {
    className: PropTypes.string.isRequired
};

export default Layout;