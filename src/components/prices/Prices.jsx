import React from 'react';
import './prices.css';

const Prices = () => {
    return (
        <div className="prices">
            <h1>Prices</h1>
            <table>
                
                <tr>
                    <th>Service</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>Hair Cuts</td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td>Hair Styling</td>
                    <td>$50</td>
                </tr>
                <tr>
                    <td>Hair Cleaning</td>
                    <td>$50</td>
                </tr>
                <tr>
                    <td>Blow Drying</td>
                    <td>$50</td>
                </tr>
                <tr>
                    <td>Dreads Interlocking and maintenance</td>
                    <td>$50</td>
                </tr>
            </table>
        </div>
    )
}

export default Prices;