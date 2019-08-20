import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Layout = props => {
    return (
      <div className={`App ${props.className}`}>
        <Header titulo="proeducatics" />
        {props.children}
        <Footer/>
      </div>
    );
};

Layout.propTypes = {
    className: PropTypes.string.isRequired
};

export default Layout;