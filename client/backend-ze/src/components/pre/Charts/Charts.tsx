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
            label: 'Dataset 1',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            fill: false,
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        },
        {
            type: 'bar' as const,
            label: 'Dataset 2',
            backgroundColor: 'rgb(75, 192, 192)',
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
                <h1 className="text-primary font-weight-bold">Charts</h1>

                <div className="chart-search mb-4 col-6">
                    <div className="input-group">
                        <select className="custom-select" id="chartSearchSelect">
                            <option value="">??????</option>
                            <option value="chartclothe">??????</option>
                            <option value="chartmask">??????</option>
                            <option value="chartsmall">??????</option>
                            <option value="chartdrink">??????</option>
                        </select>
                    </div>
                </div>
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
                                <th>??????</th>
                                <th>1???</th>
                                <th>2???</th>
                                <th>3???</th>
                                <th>4???</th>
                                <th>5???</th>
                                <th>6???</th>
                                <th>7???</th>
                                <th>8???</th>
                                <th>9???</th>
                                <th>10???</th>
                                <th>11???</th>
                                <th>12???</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span>?????????</span>
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
                                    <span>??????</span>
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