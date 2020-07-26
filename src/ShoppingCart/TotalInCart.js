import React from 'react';



export default function TotalInCart(props) {
    return (
        <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
                {props.USCurrencyFormat.format(props.total)}
            </div>
        </div>
    )
};
