import React from "react";

export default function Banner({ children, flag }) {

    return (
        <div className={`banner ${flag}`}>
            {(flag === 'green') ?
                <div className="banner-head-text">
                    <i class="fa-solid fa-circle-check"></i>
                    <h5>Congratulations</h5>
                </div> :
                (flag === 'red') ?
                    <div className="banner-head-text">
                        <i class="fa-solid fa-circle-xmark"></i>
                        <h4>There is a problem with your application</h4>
                    </div> :
                    (flag === 'yellow') ?
                        <div className="banner-head-text">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                            <h5>Attention!</h5>
                        </div> :
                        (flag === 'blue') ?
                            <div className="banner-head-text">
                                <i class="fa-solid fa-circle-info"></i>
                                <h5>Update Available</h5>
                            </div> : ''}
            {children && (
                <div className="banner-content">
                    {children}
                </div>
            )}
        </div>
    )

}