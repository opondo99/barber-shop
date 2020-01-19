import React from 'react';
import './schedule.css';

const Schedule = () => {
    return (
        <div className="schedule">
            <h1>Schedule</h1>
            <table>
                <tr>
                    <th>Days</th>
                    <th>Time</th>
                </tr>
                <tr>
                    <td>Weekdays</td>
                    <td>9:00am - 9:00pm</td>
                </tr>
                <tr>
                    <td>Saturday</td>
                    <td>9:00am - 7:00pm</td>
                </tr>
                <tr>
                    <td>Sunday</td>
                    <td>11:30am - 9:00pm</td>
                </tr>
            </table>
        </div>
    )
}

export default Schedule;