import React, {Component} from "react";
import {Line} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:{
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets:[
                    {
                        label:'USD',
                        data:[617594, 181045,153060,106519,105162,95072],
                        backgroundColor:['rgba(230, 126, 34, 1)','rgba(230, 126, 34, 1)','rgba(230, 126, 34, 1)','rgba(230, 126, 34, 1)','rgba(230, 126, 34, 1)','rgba(230, 126, 34, 1)']
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div className='chart'>
                <Line
                    data={this.state.chartData}
                    options={{}}
                />
            </div>
        )
    }
}

export default Chart;