import React, { MouseEvent, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Charts.scss';

import type { InteractionItem } from 'chart.js';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
} from 'chart.js';
import {
    Chart,
    getDatasetAtEvent,
    getElementAtEvent,
    getElementsAtEvent,
} from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

export const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
    labels,
    datasets: [
        {
            type: 'line' as const,
            label: '總收益',
            borderColor: 'rgb(50, 103, 113)',
            borderWidth: 3,
            fill: false,
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        },
        {
            type: 'bar' as const,
            label: '淨利',
            backgroundColor: 'rgb(254, 153, 32)',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'white',
            borderWidth: 2,
        },
        // {
        //     type: 'bar' as const,
        //     label: 'Dataset 3',
        //     backgroundColor: 'rgb(53, 162, 235)',
        //     data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        // },
    ],
};

function Charts() {
    const printDatasetAtEvent = (dataset: InteractionItem[]) => {
        if (!dataset.length) return;

        const datasetIndex = dataset[0].datasetIndex;

        console.log(data.datasets[datasetIndex].label);
    };

    const printElementAtEvent = (element: InteractionItem[]) => {
        if (!element.length) return;

        const { datasetIndex, index } = element[0];

        console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
    };

    const printElementsAtEvent = (elements: InteractionItem[]) => {
        if (!elements.length) return;

        console.log(elements.length);
    };

    const chartRef = useRef<ChartJS>(null);

    const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
        const { current: chart } = chartRef;

        if (!chart) {
            return;
        }

        printDatasetAtEvent(getDatasetAtEvent(chart, event));
        printElementAtEvent(getElementAtEvent(chart, event));
        printElementsAtEvent(getElementsAtEvent(chart, event));
    };

    return (

        <div className="content">
            <div className="chart-content">
                <h2 className="font-weight-bold mb-4 col-12">各月份商品收益統計</h2>

                {/* <div className="chart-search mb-4 col-6">
                    <div className="input-group">
                        <select className="custom-select" id="chartSearchSelect">
                            <option value="">全部</option>
                            <option value="chartclothe">服飾</option>
                            <option value="chartmask">口罩</option>
                            <option value="chartsmall">小物</option>
                            <option value="chartdrink">飲用</option>
                        </select>
                    </div>
                </div> */}
                <div className="chart-pic mb-4 col-11">
                    <Chart
                        ref={chartRef}
                        type='bar'
                        onClick={onClick}
                        options={options}
                        data={data}
                        width={10}
                        height={4}
                        
                    />
                </div>
                <div className="chart-table pl-4 col-11">
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>月份</th>
                                <th>1月</th>
                                <th>2月</th>
                                <th>3月</th>
                                <th>4月</th>
                                <th>5月</th>
                                <th>6月</th>
                                <th>7月</th>
                                <th>8月</th>
                                <th>9月</th>
                                <th>10月</th>
                                <th>11月</th>
                                <th>12月</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span>總收益</span>
                                </td>
                                <td>
                                    <span>11543</span>
                                </td>
                                <td>
                                    <span>22356</span>
                                </td>
                                <td>
                                    <span>12314</span>
                                </td>
                                <td>
                                    <span>11543</span>
                                </td>
                                <td>
                                    <span>22356</span>
                                </td>
                                <td>
                                    <span>12314</span>
                                </td>
                                <td>
                                    <span>11543</span>
                                </td>
                                <td>
                                    <span>22356</span>
                                </td>
                                <td>
                                    <span>12314</span>
                                </td>
                                <td>
                                    <span>11543</span>
                                </td>
                                <td>
                                    <span>22356</span>
                                </td>
                                <td>
                                    <span>12314</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>淨利</span>
                                </td>
                                <td>
                                    <span>7232</span>
                                </td>
                                <td>
                                    <span>9422</span>
                                </td>
                                <td>
                                    <span>6431</span>
                                </td>
                                <td>
                                    <span>7232</span>
                                </td>
                                <td>
                                    <span>9422</span>
                                </td>
                                <td>
                                    <span>6431</span>
                                </td>
                                <td>
                                    <span>7232</span>
                                </td>
                                <td>
                                    <span>9422</span>
                                </td>
                                <td>
                                    <span>6431</span>
                                </td>
                                <td>
                                    <span>7232</span>
                                </td>
                                <td>
                                    <span>9422</span>
                                </td>
                                <td>
                                    <span>6431</span>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        </div>



    );
}
export default Charts;