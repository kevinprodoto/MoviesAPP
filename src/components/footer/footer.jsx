import React from "react";

import PropTypes from 'prop-types';

import { Pagination } from 'antd';

const AppFooter = ({updateMovies, label, page}) => {

    const onChange = (pageNumber) => {
        updateMovies(pageNumber, label)
    }

    return (
        <div className="appFooter">
            <Pagination showQuickJumper onChange={onChange} defaultCurrent={1} total={500} current = {page}/>
        </div>
    )  

  
}
AppFooter.defaultProps = {
    label: "",
    updateMovies: () => {},
    page: 1,
}

AppFooter.propTypes = {
    label: PropTypes.string,
    updateMovies: PropTypes.func,
    page: PropTypes.number,
}
export default AppFooter;
