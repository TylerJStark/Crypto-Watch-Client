import React, {Component} from "react";
import {Line} from 'react-chartjs-2';

const Chart = props => (
    // constructor(props) {
    //     super(props);
    //     this.state = {
            // chartData:{
            //     labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
            //     datasets:[
            //         {
            //             label:'USD',
            //             data:[617594, 181045,153060,106519,105162,95072],
            //             backgroundColor:['rgba(230, 126, 34, 1)','rgba(230, 126, 34, 1)','rgba(230, 126, 34, 1)','rgba(230, 126, 34, 1)','rgba(230, 126, 34, 1)','rgba(230, 126, 34, 1)']
            //         }
            //     ]
            // }
    //     }
    // }

    <div className='chart'>
        <Line
            data={props.chartData}
            options={{
                tooltips: {
                    title: function(tooltipItem, data) {
                        return data.labels[tooltipItem[0].index];
                    },
                    beforeLabel: function(tooltipItem, data) {
                        return 'Data1: ' + data.datasets[tooltipItem.datasetIndex].data1[tooltipItem.index];
                    },
                    label: function(tooltipItem, data) {
                        return 'Data2: ' + data.datasets[tooltipItem.datasetIndex].data2[tooltipItem.index];
                    },
                }
            }}
        />
    </div>
)

export default Chart;