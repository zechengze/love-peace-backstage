import React from 'react';
import './Charts.scss';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

function Charts() {
    return (
        <div className="content">
            <div className="chart-content">
                <h1 className="text-primary font-weight-bold">Charts</h1>
                <div className="chart-pic col-6">
                    <div className="chart-search mr-4 mb-4">
                        <div className="input-group">
                            <select className="custom-select" id="chartSearchSelect">
                                <option value="">以類別查詢</option>
                                <option value="chartclothe">服飾</option>
                                <option value="chartmask">口罩</option>
                                <option value="chartsmall">小物</option>
                                <option value="chartdrink">飲用</option>
                                <option value="chartnone">售罄</option>
                            </select>
                        </div>
                    </div>
                    <Doughnut data={data} />
                </div>
                <div className="chart-table col-6">

                </div>
            </div>
        </div>
    );
}
export default Charts;