import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
import {C} from '../constant';
import {connect} from 'react-redux'






class FormularCanvas extends React.Component{
    super(props){
        debugger;
        Chart.defaults.global.elements.point.radius = 0;
        Chart.defaults.global.legend.display = false;
    }

    calc(f){
        let L = this.props.l;
        let D = this.props.d;
        let Db = this.props.db;

        let tanP = Math.PI * L * f / 500 / C;
        let logP = 1 + 0.25 * Db * Db / D / D * Math.tan(tanP) * Math.tan(tanP);
        let TL = 10 * Math.log10(logP)

        return TL;
    }
    componentDidMount(){ 
        //todo: if chart exist, just update.
        let ctx = document.getElementById('canvas');

        const step = 1;
        const from = 0;
        const to = 1000;

        let xData = [];
        for(let i=from; i<=to; i=i+step){
            xData.push(i);
        }

        let labels = xData.map(x=>x.toString());
        let yData = xData.map(x=>this.calc(x), this);

        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels,
                datasets: [{
                    data: yData,
                    fill: false,
                    borderColor: "rgb(54, 162, 235)",
                    borderWidth: 0.5
                }]
            },
            options: {
                title: {
					display: true,
					text: 'Transmission Loss - Quarter Wave Tube'
				},
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Frequency[Hz]'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Transmission Loss[dB]'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }

    render(){
        return (
            <canvas id='canvas' width="400" height="400"/>
        )
    }
}


let mapStateToProps = (state)=>{
    return state;
}
let mapDispatchToProps = null;
  
export default connect(mapStateToProps, mapDispatchToProps)(FormularCanvas);