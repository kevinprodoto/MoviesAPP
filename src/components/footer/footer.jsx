import React from "react";

import { Pagination } from 'antd';

const AppFooter = () => {
    const onChange = () => {

    }
    return (
        <div className="appFooter">
            <Pagination onChange={onChange} defaultCurrent={1} total={50} />
        </div>
    )    
}

export default AppFooter
