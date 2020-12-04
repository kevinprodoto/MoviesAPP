import React from "react";

import PropTypes from 'prop-types';

import { Pagination } from 'antd';

const AppFooter = ({updateMovies}) => {

    const onChange = (pageNumber) => {
        updateMovies(pageNumber)
    }

    return (
        <div className="appFooter">
            <Pagination showQuickJumper onChange={onChange} defaultCurrent={1} total={500}/>
        </div>
    )  

  
}
AppFooter.defaultProps = {
    updateMovies: () => {},
}

AppFooter.propTypes = {
    updateMovies: PropTypes.number,
}
export default AppFooter;
