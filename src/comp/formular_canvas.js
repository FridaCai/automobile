import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
import {C} from '../constant';
import {connect} from 'react-redux'





let yData = [];
class FormularCanvas extends React.Component{
    constructor(props){
        super(props);
        Chart.defaults.global.elements.point.radius = 0;
        Chart.defaults.global.legend.display = false;
        this.chart = null;

        const step = 1;
        const from = 0;
        const to = 1000;

        this.xData = [];
        for(let i=from; i<=to; i=i+step){
            this.xData.push(i);
        }
        this.updateYData();
    }

    calc(f){
        let L = this.props.l;
        let D = this.props.d;
        let Db = this.props.db;

        let tanP = Math.PI * L * f / 500 / C;
        let logP = 1 + 0.25 * Db * Db / D / D * Math.tan(tanP) * Math.tan(tanP);
        let TL = 10 * Math.log10(logP)

        if(f==100){
            console.log('TL: ', TL);
        }

        return TL;
    }
    updateYData(){
        yData = this.xData.map(x=>this.calc(x), this);
    }
    componentDidMount(){ 
        //todo: if chart exist, just update.
        let ctx = document.getElementById('canvas');
        let labels = this.xData.map(x=>x.toString());
        this.updateYData();
        this.chart = new Chart(ctx, {
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
                responsive: true,
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
    componentDidUpdate(){
        if(this.chart){
            this.updateYData();
            this.chart.data.datasets[0].data = yData;
            this.chart.update();
        }
    }

    render(){
        return (
            <canvas id='canvas' width="400" height="400"/>
        )
    }
}


let mapStateToProps = (state)=>{
    return Object.assign({}, state);
}
let mapDispatchToProps = null;
  
export default connect(mapStateToProps, mapDispatchToProps)(FormularCanvas);