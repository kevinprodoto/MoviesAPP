import React from "react";

import PropTypes from 'prop-types';

import { Pagination } from 'antd';

const AppFooter = ({updateMovies, label, page, rated}) => {

    let paginClass = "";
    if (rated) {
        paginClass = "invisible";
    }

    const onChange = (pageNumber) => {
        updateMovies(pageNumber, label)
    }

    return (
        <div className="appFooter">
            <Pagination className = {paginClass} showQuickJumper onChange={onChange} defaultCurrent={1} total={500} current = {page}/>
        </div>
    )  

  
}
AppFooter.defaultProps = {
    label: "",
    updateMovies: () => {},
    page: 1,
    rated: false,
}

AppFooter.propTypes = {
    label: PropTypes.string,
    updateMovies: PropTypes.func,
    page: PropTypes.number,
    rated: PropTypes.bool,
}
export default AppFooter;
