import React from 'react';

export const ItemListContainer = ({ greeting }) => {
    return (
        <div className="main_content">
            <div className="section pt-0 pb-0">
                <div className="custom-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading_tab_header d-flex justify-content-center" style={{ borderBottom: '0' }}>
                                <div className="heading_s2 ">
                                    <span>{greeting}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
