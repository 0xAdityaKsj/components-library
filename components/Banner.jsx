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
                    <h4>There is a problem with your application</h4> :
                    (flag === 'yellow') ? <h5>Attention</h5> :
                        (flag === 'blue') ? <h5>update available</h5> : ''}
            {children}
        </div>
    )

}